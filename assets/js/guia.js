// ========== LÓGICA DE LA PÁGINA DE GUÍA ==========

// Mapeo de emojis por producto
const EMOJIS_PRODUCTOS = {
    'Plátano': '🍌',
    'Tomate': '🍅',
    'Aguacate': '🥑',
    'Manzana': '🍎',
    'Lechuga': '🥬'
};

// Función para obtener parámetros de la URL
function obtenerParametrosURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        producto: urlParams.get('producto'),
        estado: urlParams.get('estado')
    };
}

// Función para obtener clase CSS según el estado
function obtenerClaseEstado(estado) {
    if (estado === 'Maduración baja') return 'status-baja';
    if (estado === 'Maduración avanzada') return 'status-avanzada';
    if (estado === 'Maduración muy avanzada') return 'status-muy-avanzada';
    return 'status-baja';
}

// Función para obtener icono según el estado
function obtenerIconoEstado(estado) {
    if (estado === 'Maduración baja') return '🟢';
    if (estado === 'Maduración avanzada') return '🟡';
    if (estado === 'Maduración muy avanzada') return '🔴';
    return '⏱️';
}

// Función para procesar el texto de la guía en secciones
function procesarGuiaEnSecciones(textoGuia) {
    const secciones = [];
    
    // Dividir por las líneas de separación (━━━)
    const bloques = textoGuia.split(/━{15,}/);
    
    bloques.forEach(bloque => {
        const lineas = bloque.trim().split('\n').filter(l => l.trim());
        
        if (lineas.length === 0) return;
        
        // Buscar líneas que parecen títulos (tienen emojis al inicio)
        for (let i = 0; i < lineas.length; i++) {
            const linea = lineas[i].trim();
            
            // Si la línea tiene emoji al inicio, es un título de sección
            if (/^[🎯📍💵👥🔥📞🎁🍳📦🎨💡📊⚠️🥗🧃🍪🍞🍦🥤🍲🔴🟡🟢✅]/.test(linea)) {
                // El título es esta línea
                const titulo = linea;
                
                // El contenido es todo lo que sigue hasta el próximo título o fin del bloque
                let contenido = [];
                for (let j = i + 1; j < lineas.length; j++) {
                    const siguienteLinea = lineas[j].trim();
                    // Si encontramos otro título, parar
                    if (/^[🎯📍💵👥🔥📞🎁🍳📦🎨💡📊⚠️🥗🧃🍪🍞🍦🥤🍲🔴🟡🟢✅]/.test(siguienteLinea)) {
                        break;
                    }
                    contenido.push(siguienteLinea);
                }
                
                if (contenido.length > 0) {
                    secciones.push({
                        titulo: titulo,
                        contenido: contenido.join('\n')
                    });
                }
                
                // Saltar las líneas que ya procesamos
                i += contenido.length;
            }
        }
        
        // Si el bloque no tiene títulos con emojis, tratarlo como una sección completa
        if (secciones.length === 0 && lineas.length > 0) {
            // La primera línea es el título
            const titulo = lineas[0];
            const contenido = lineas.slice(1).join('\n');
            
            if (contenido.trim()) {
                secciones.push({ titulo, contenido });
            }
        }
    });
    
    return secciones;
}

// Función para renderizar la guía
function renderizarGuia() {
    const { producto, estado } = obtenerParametrosURL();
    
    // Validar parámetros
    if (!producto || !estado) {
        document.getElementById('guideContent').innerHTML = `
            <div class="guide-section">
                <p style="text-align: center; color: #ef4444; padding: 40px 20px;">
                    ⚠️ Error: No se especificó producto o estado<br><br>
                    <a href="/registro.html" style="color: #3b82f6; text-decoration: underline;">Volver al registro</a>
                </p>
            </div>
        `;
        return;
    }
    
    // Actualizar título de la página
    document.title = `EcoMercado - Guía: ${producto} ${estado}`;
    
    // Actualizar header del producto
    document.getElementById('productEmoji').textContent = EMOJIS_PRODUCTOS[producto] || '📦';
    document.getElementById('productName').textContent = producto;
    
    const badgeElement = document.getElementById('statusBadge');
    badgeElement.textContent = `${obtenerIconoEstado(estado)} ${estado}`;
    badgeElement.className = `status-badge ${obtenerClaseEstado(estado)}`;
    
    // Obtener guía desde GUIAS (definido en datos.js)
    const guiaTexto = GUIAS[producto]?.[estado];
    
    if (!guiaTexto) {
        document.getElementById('guideContent').innerHTML = `
            <div class="guide-section">
                <p style="text-align: center; color: #ef4444; padding: 40px 20px;">
                    ⚠️ No se encontró guía para:<br>
                    <strong>${producto} - ${estado}</strong><br><br>
                    <a href="/registro.html" style="color: #3b82f6; text-decoration: underline;">Volver al registro</a>
                </p>
            </div>
        `;
        return;
    }
    
    // Procesar guía en secciones
    const secciones = procesarGuiaEnSecciones(guiaTexto);
    
    // Si no se encontraron secciones, mostrar el texto completo
    if (secciones.length === 0) {
        document.getElementById('guideContent').innerHTML = `
            <div class="guide-section">
                <div class="guide-text">${guiaTexto}</div>
            </div>
        `;
        return;
    }
    
    // Generar HTML con las secciones
    const guideContainer = document.getElementById('guideContent');
    guideContainer.innerHTML = '';
    
    secciones.forEach(seccion => {
        const seccionDiv = document.createElement('div');
        seccionDiv.className = 'guide-section';
        
        seccionDiv.innerHTML = `
            <div class="section-header">${seccion.titulo}</div>
            <div class="guide-text">${seccion.contenido}</div>
        `;
        
        guideContainer.appendChild(seccionDiv);
    });
}

// Función para volver al registro
function volverARegistro() {
    window.location.href = '/registro.html';
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', renderizarGuia);