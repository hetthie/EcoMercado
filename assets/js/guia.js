// ========== LÓGICA DE LA PÁGINA DE GUÍA MEJORADA ==========

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

// Función mejorada para procesar el texto de la guía en secciones estructuradas
function procesarGuiaEnSecciones(textoGuia) {
    const secciones = [];
    
    // Dividir por las líneas de separación (━━━)
    const bloques = textoGuia.split(/━{15,}/);
    
    bloques.forEach(bloque => {
        const lineas = bloque.trim().split('\n').filter(l => l.trim());
        
        if (lineas.length === 0) return;
        
        let seccionActual = null;
        let contenidoActual = [];
        
        for (let i = 0; i < lineas.length; i++) {
            const linea = lineas[i].trim();
            
            // Detectar títulos de sección (con emojis al inicio)
            if (/^[🎯📍💵👥🔥📞🎁🍳📦🎨💡📊⚠️🥗🧃🍪🍞🍦🥤🍲🔴🟡🟢✅]/.test(linea)) {
                // Si ya había una sección, guardarla
                if (seccionActual && contenidoActual.length > 0) {
                    secciones.push({
                        titulo: seccionActual,
                        contenido: contenidoActual.join('\n'),
                        tipo: detectarTipoSeccion(seccionActual)
                    });
                }
                
                // Iniciar nueva sección
                seccionActual = linea;
                contenidoActual = [];
            } else if (seccionActual) {
                // Agregar contenido a la sección actual
                contenidoActual.push(linea);
            } else {
                // Texto introductorio (antes de cualquier sección)
                if (linea.length > 0) {
                    secciones.push({
                        titulo: null,
                        contenido: linea,
                        tipo: 'intro'
                    });
                }
            }
        }
        
        // Guardar última sección
        if (seccionActual && contenidoActual.length > 0) {
            secciones.push({
                titulo: seccionActual,
                contenido: contenidoActual.join('\n'),
                tipo: detectarTipoSeccion(seccionActual)
            });
        }
    });
    
    return secciones;
}

// Detectar tipo de sección para aplicar estilos específicos
function detectarTipoSeccion(titulo) {
    if (!titulo) return 'normal';
    
    const tituloLower = titulo.toLowerCase();
    
    if (tituloLower.includes('venta') || tituloLower.includes('precio') || tituloLower.includes('estrategia')) {
        return 'ventas';
    } else if (tituloLower.includes('receta') || tituloLower.includes('preparación') || tituloLower.includes('uso')) {
        return 'recetas';
    } else if (tituloLower.includes('conservación') || tituloLower.includes('almacenamiento')) {
        return 'conservacion';
    } else if (tituloLower.includes('contacto') || tituloLower.includes('cliente')) {
        return 'contactos';
    } else if (tituloLower.includes('urgente') || tituloLower.includes('emergencia') || tituloLower.includes('crítico')) {
        return 'urgente';
    } else if (tituloLower.includes('económico') || tituloLower.includes('pérdida') || tituloLower.includes('cálculo')) {
        return 'economico';
    }
    
    return 'normal';
}

// Formatear contenido con bullets y estructura
function formatearContenido(contenido) {
    // Separar por líneas
    const lineas = contenido.split('\n');
    let html = '';
    let enLista = false;
    
    lineas.forEach(linea => {
        const lineaTrim = linea.trim();
        
        if (!lineaTrim) {
            if (enLista) {
                html += '</ul>';
                enLista = false;
            }
            return;
        }
        
        // Detectar bullets (•, -, →)
        if (/^[•\-→]/.test(lineaTrim)) {
            if (!enLista) {
                html += '<ul class="bullet-list">';
                enLista = true;
            }
            html += `<li>${lineaTrim.substring(1).trim()}</li>`;
        } else {
            if (enLista) {
                html += '</ul>';
                enLista = false;
            }
            html += `<p class="content-paragraph">${lineaTrim}</p>`;
        }
    });
    
    if (enLista) {
        html += '</ul>';
    }
    
    return html;
}

// Función para renderizar la guía con diseño mejorado
function renderizarGuia() {
    const { producto, estado } = obtenerParametrosURL();
    
    // Validar parámetros
    if (!producto || !estado) {
        document.getElementById('guideContent').innerHTML = `
            <div class="guide-section error-section">
                <div class="error-icon">⚠️</div>
                <p class="error-text">No se especificó producto o estado</p>
                <a href="registro.html" class="link-button">Volver al registro</a>
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
            <div class="guide-section error-section">
                <div class="error-icon">❌</div>
                <p class="error-text">No se encontró guía para:<br><strong>${producto} - ${estado}</strong></p>
                <a href="registro.html" class="link-button">Volver al registro</a>
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
    
    // Generar HTML con las secciones estructuradas
    const guideContainer = document.getElementById('guideContent');
    guideContainer.innerHTML = '';
    
    secciones.forEach((seccion, index) => {
        const seccionDiv = document.createElement('div');
        
        // Aplicar clase según tipo
        let claseSeccion = 'guide-section';
        if (seccion.tipo !== 'intro' && seccion.tipo !== 'normal') {
            claseSeccion += ` section-${seccion.tipo}`;
        }
        
        seccionDiv.className = claseSeccion;
        
        if (seccion.tipo === 'intro') {
            // Texto introductorio (destacado)
            seccionDiv.innerHTML = `
                <div class="intro-banner">
                    <div class="intro-icon">${obtenerIconoEstado(estado)}</div>
                    <div class="intro-text">${seccion.contenido}</div>
                </div>
            `;
        } else if (seccion.titulo) {
            // Sección con título
            seccionDiv.innerHTML = `
                <div class="section-header-enhanced">
                    <div class="section-number">${index}</div>
                    <div class="section-title-text">${seccion.titulo}</div>
                </div>
                <div class="section-content">
                    ${formatearContenido(seccion.contenido)}
                </div>
            `;
        } else {
            // Contenido sin título
            seccionDiv.innerHTML = `
                <div class="section-content">
                    ${formatearContenido(seccion.contenido)}
                </div>
            `;
        }
        
        guideContainer.appendChild(seccionDiv);
    });
}

// Función para volver al registro
function volverARegistro() {
    window.location.href = 'registro.html';
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', renderizarGuia);