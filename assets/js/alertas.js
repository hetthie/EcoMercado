// ========== SISTEMA DE ALERTAS ==========

// Keys de localStorage para control de alertas
const ALERTAS_VISTAS_KEY = 'ecomercado_alertas_vistas';

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
    
    // Verificar si debemos mostrar alerta
    const deberíaMostrar = deberíaMostrarAlerta(criticos.length, urgentes.length);
    
    if (!deberíaMostrar) {
        return; // No mostrar si el usuario ya la cerró
    }
    
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

// Verificar si debería mostrar alerta
function deberíaMostrarAlerta(cantidadCriticos, cantidadUrgentes) {
    const alertasVistas = obtenerAlertasVistas();
    
    // Si no hay productos críticos ni urgentes, no mostrar
    if (cantidadCriticos === 0 && cantidadUrgentes === 0) {
        return false;
    }
    
    // Crear firma única de la situación actual
    const firmaActual = `criticos:${cantidadCriticos}_urgentes:${cantidadUrgentes}`;
    
    // Si ya vio esta alerta exacta, no mostrar
    if (alertasVistas.firma === firmaActual && alertasVistas.cerrada) {
        return false;
    }
    
    // Si la cantidad cambió (empeoró o mejoró), mostrar de nuevo
    return true;
}

// Obtener alertas vistas
function obtenerAlertasVistas() {
    const data = localStorage.getItem(ALERTAS_VISTAS_KEY);
    if (!data) {
        return { firma: '', cerrada: false };
    }
    return JSON.parse(data);
}

// Marcar alerta como vista/cerrada
function marcarAlertaCerrada(cantidadCriticos, cantidadUrgentes) {
    const firma = `criticos:${cantidadCriticos}_urgentes:${cantidadUrgentes}`;
    localStorage.setItem(ALERTAS_VISTAS_KEY, JSON.stringify({
        firma: firma,
        cerrada: true,
        timestamp: Date.now()
    }));
}

// Resetear alertas vistas (cuando situación cambia)
function resetearAlertasVistas() {
    localStorage.removeItem(ALERTAS_VISTAS_KEY);
}

// Mostrar banner de alerta
function mostrarBannerAlerta(nivel, productos) {
    const bannerExistente = document.getElementById('alerta-banner');
    if (bannerExistente) {
        return; // Ya está visible
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
    banner.setAttribute('data-nivel', nivel);
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
    if (!banner) return;
    
    // Contar productos actuales para marcar como vista
    const productos = obtenerProductos();
    let criticos = 0;
    let urgentes = 0;
    
    productos.forEach(producto => {
        const diasRestantes = calcularDiasRestantes(producto);
        if (diasRestantes === 0) criticos++;
        else if (diasRestantes === 1) urgentes++;
    });
    
    // Marcar esta alerta como cerrada
    marcarAlertaCerrada(criticos, urgentes);
    
    // Animar salida
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 300);
}

// Ir al registro desde alerta
function irARegistroDesdeAlerta() {
    cerrarBanner(); // Cerrar antes de navegar
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
    
    // Solo enviar notificación si no se ha enviado antes para esta situación
    const notifKey = `notif_${nivel}_${cantidad}_${new Date().toDateString()}`;
    if (sessionStorage.getItem(notifKey)) {
        return; // Ya se envió hoy
    }
    
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
    
    // Marcar como enviada
    sessionStorage.setItem(notifKey, 'true');
    
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
}v