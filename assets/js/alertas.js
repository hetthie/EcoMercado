// ========== SISTEMA DE ALERTAS ==========

// Inicializar sistema de alertas
function inicializarAlertas() {
    verificarYMostrarAlertas();
    solicitarPermisoNotificaciones();
}

// Verificar productos críticos y mostrar alertas
function verificarYMostrarAlertas() {
    const productos = obtenerProductos();
    
    if (productos.length === 0) return;
    
    // Clasificar productos por urgencia
    const criticos = []; // 0 días
    const urgentes = []; // 1 día
    const preventivos = []; // 2-3 días
    
    productos.forEach(producto => {
        const diasRestantes = calcularDiasRestantes(producto);
        
        if (diasRestantes === 0) {
            criticos.push(producto);
        } else if (diasRestantes === 1) {
            urgentes.push(producto);
        } else if (diasRestantes >= 2 && diasRestantes <= 3) {
            preventivos.push(producto);
        }
    });
    
    // Mostrar banner si hay alertas
    if (criticos.length > 0) {
        mostrarBannerAlerta('critico', criticos);
        enviarNotificacionPush('critico', criticos.length);
    } else if (urgentes.length > 0) {
        mostrarBannerAlerta('urgente', urgentes);
        enviarNotificacionPush('urgente', urgentes.length);
    } else if (preventivos.length > 0) {
        mostrarBannerAlerta('preventivo', preventivos);
    }
}

// Mostrar banner de alerta
function mostrarBannerAlerta(nivel, productos) {
    const bannerExistente = document.getElementById('alerta-banner');
    if (bannerExistente) {
        bannerExistente.remove();
    }
    
    let icono, titulo, clase, mensaje;
    
    switch(nivel) {
        case 'critico':
            icono = '🔴';
            titulo = '¡URGENTE!';
            clase = 'alerta-critica';
            mensaje = `${productos.length} producto${productos.length > 1 ? 's' : ''} debe${productos.length > 1 ? 'n' : ''} venderse HOY`;
            break;
        case 'urgente':
            icono = '🟡';
            titulo = 'Atención';
            clase = 'alerta-urgente';
            mensaje = `${productos.length} producto${productos.length > 1 ? 's' : ''} madurará${productos.length > 1 ? 'n' : ''} mañana`;
            break;
        case 'preventivo':
            icono = '🟢';
            titulo = 'Aviso';
            clase = 'alerta-preventiva';
            mensaje = `${productos.length} producto${productos.length > 1 ? 's' : ''} próximo${productos.length > 1 ? 's' : ''} a madurar`;
            break;
    }
    
    const banner = document.createElement('div');
    banner.id = 'alerta-banner';
    banner.className = `alerta-banner ${clase}`;
    banner.innerHTML = `
        <div class="alerta-contenido">
            <div class="alerta-icono">${icono}</div>
            <div class="alerta-texto">
                <div class="alerta-titulo">${titulo}</div>
                <div class="alerta-mensaje">${mensaje}</div>
            </div>
            <button class="alerta-ver" onclick="irARegistroDesdeAlerta()">Ver</button>
            <button class="alerta-cerrar" onclick="cerrarBanner()">✕</button>
        </div>
    `;
    
    document.body.insertAdjacentElement('afterbegin', banner);
    
    // Animar entrada
    setTimeout(() => banner.classList.add('visible'), 100);
}

// Cerrar banner
function cerrarBanner() {
    const banner = document.getElementById('alerta-banner');
    if (banner) {
        banner.classList.remove('visible');
        setTimeout(() => banner.remove(), 300);
    }
}

// Ir al registro desde alerta
function irARegistroDesdeAlerta() {
    window.location.href = '/registro.html';
}

// Solicitar permiso de notificaciones
function solicitarPermisoNotificaciones() {
    if (!("Notification" in window)) {
        console.log("Este navegador no soporta notificaciones");
        return;
    }
    
    // Si ya dio permiso, no volver a preguntar
    if (Notification.permission === "granted") {
        return;
    }
    
    // Si no ha rechazado, preguntar después de 3 segundos
    if (Notification.permission !== "denied") {
        setTimeout(() => {
            Notification.requestPermission().then(permission => {
                console.log("Permiso de notificaciones:", permission);
            });
        }, 3000);
    }
}

// Enviar notificación push
function enviarNotificacionPush(nivel, cantidad) {
    if (!("Notification" in window)) return;
    if (Notification.permission !== "granted") return;
    
    let titulo, cuerpo, icono;
    
    switch(nivel) {
        case 'critico':
            titulo = '⚠️ EcoMercado - URGENTE';
            cuerpo = `¡${cantidad} producto${cantidad > 1 ? 's' : ''} debe${cantidad > 1 ? 'n' : ''} venderse HOY!`;
            icono = '🔴';
            break;
        case 'urgente':
            titulo = '⚠️ EcoMercado - Atención';
            cuerpo = `${cantidad} producto${cantidad > 1 ? 's' : ''} madurará${cantidad > 1 ? 'n' : ''} mañana`;
            icono = '🟡';
            break;
    }
    
    const notification = new Notification(titulo, {
        body: cuerpo,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'ecomercado-alerta',
        requireInteraction: true // No desaparece automáticamente
    });
    
    // Al hacer clic en la notificación
    notification.onclick = function() {
        window.focus();
        window.location.href = '/registro.html';
        notification.close();
    };
}

// Contar productos por urgencia
function contarProductosPorUrgencia() {
    const productos = obtenerProductos();
    
    let criticos = 0;
    let urgentes = 0;
    let preventivos = 0;
    
    productos.forEach(producto => {
        const diasRestantes = calcularDiasRestantes(producto);
        
        if (diasRestantes === 0) {
            criticos++;
        } else if (diasRestantes === 1) {
            urgentes++;
        } else if (diasRestantes >= 2 && diasRestantes <= 3) {
            preventivos++;
        }
    });
    
    return { criticos, urgentes, preventivos };
}

// Actualizar badge del tab del navegador
function actualizarBadgeTab() {
    const { criticos } = contarProductosPorUrgencia();
    
    if (criticos > 0) {
        document.title = `(${criticos}) EcoMercado`;
    } else {
        document.title = 'EcoMercado';
    }
}