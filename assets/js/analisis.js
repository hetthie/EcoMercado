// ========== LÓGICA DE ANÁLISIS ==========

let resultadoActual = null;

// Mostrar pantalla de análisis
async function mostrarPantallaAnalisis(imagenBase64) {
    // Ocultar pantalla de cámara
    document.getElementById('pantalla-camara').classList.remove('activa');
    
    // Mostrar pantalla de análisis
    const pantallaAnalisis = document.getElementById('pantalla-analisis');
    pantallaAnalisis.classList.add('activa');
    
    // Mostrar la foto capturada
    document.getElementById('foto-capturada').src = imagenBase64;
    
    // Mostrar loading
    const resultadoContainer = document.getElementById('resultado-container');
    resultadoContainer.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Analizando producto...</p>
        </div>
    `;
    
    try {
        // Llamar a la API
        const resultado = await analizarImagenConAPI(imagenBase64);
        resultadoActual = resultado;
        
        // Mostrar resultado
        mostrarResultado(resultado);
        
    } catch (error) {
        console.error('Error en análisis:', error);
        resultadoContainer.innerHTML = `
            <div class="error-message">
                <p>❌ Error al analizar la imagen</p>
                <p class="error-detail">${error.message || 'Intenta de nuevo'}</p>
            </div>
        `;
        
        // Botón para volver
        const botonesContainer = document.getElementById('botones-analisis');
        botonesContainer.innerHTML = `
            <button class="btn-secondary" onclick="volverACamara()">Volver a Cámara</button>
        `;
    }
}

// Mostrar resultado del análisis
function mostrarResultado(resultado) {
    const resultadoContainer = document.getElementById('resultado-container');
    
    // Obtener días estimados
    const diasEstimados = DIAS_PRODUCTO[resultado.producto]?.[resultado.estado] || 0;
    
    // Determinar clase de estado
    let estadoClass = 'estado-normal';
    if (resultado.estado === 'Maduración baja') {
        estadoClass = 'estado-baja';
    } else if (resultado.estado === 'Maduración muy avanzada') {
        estadoClass = 'estado-muy-avanzada';
    }
    
    // HTML del resultado
    resultadoContainer.innerHTML = `
        <div class="resultado-card">
            <div class="resultado-header">
                <h2>${resultado.producto}</h2>
                <span class="badge-confianza">${resultado.confianza}% confianza</span>
            </div>
            
            <div class="resultado-estado ${estadoClass}">
                <strong>Estado:</strong> ${resultado.estado}
            </div>
            
            ${diasEstimados > 0 ? `
                <div class="resultado-dias">
                    <span class="dias-icon">⏱️</span>
                    <span><strong>Días estimados:</strong> ${diasEstimados} días</span>
                </div>
            ` : ''}
            
            <div class="resultado-razon">
                <strong>Análisis:</strong>
                <p>${resultado.razon}</p>
            </div>
        </div>
    `;
    
    // Mostrar botones
    mostrarBotones(resultado, diasEstimados);
}

// Mostrar botones de acción
function mostrarBotones(resultado, diasEstimados) {
    const botonesContainer = document.getElementById('botones-analisis');
    
    // Solo mostrar botón de guía si el producto es conocido
    const botonGuia = resultado.producto !== 'Desconocido' ? 
        `<button class="btn-primary" onclick="mostrarGuia('${resultado.producto}', '${resultado.estado}')">📖 Ver Guía de Tratamiento</button>` : '';
    
    const botonAgregar = resultado.producto !== 'Desconocido' ? 
        `<button class="btn-success" onclick="agregarAlRegistro('${resultado.producto}', '${resultado.estado}', ${diasEstimados})">➕ Agregar al Registro</button>` : '';
    
    botonesContainer.innerHTML = `
        ${botonGuia}
        ${botonAgregar}
        <button class="btn-secondary" onclick="volverACamara()">📷 Nueva Foto</button>
    `;
}

// Mostrar guía de tratamiento
function mostrarGuia(producto, estado) {
    const guiaContainer = document.getElementById('guia-container');
    const guiaTexto = GUIAS[producto]?.[estado] || 'Guía no disponible';
    
    guiaContainer.innerHTML = `
        <div class="guia-card">
            <div class="guia-header">
                <h3>📖 Guía de Tratamiento</h3>
                <h4>${producto} - ${estado}</h4>
            </div>
            <div class="guia-contenido">
                ${guiaTexto.split('\n').map(linea => `<p>${linea}</p>`).join('')}
            </div>
            <div class="guia-botones">
                <button class="btn-success" onclick="agregarAlRegistro('${producto}', '${estado}', ${DIAS_PRODUCTO[producto]?.[estado] || 0})">➕ Agregar al Registro</button>
                <button class="btn-secondary" onclick="cerrarGuia()">Cerrar Guía</button>
            </div>
        </div>
    `;
    
    guiaContainer.style.display = 'block';
    
    // Scroll a la guía
    guiaContainer.scrollIntoView({ behavior: 'smooth' });
}

// Cerrar guía
function cerrarGuia() {
    const guiaContainer = document.getElementById('guia-container');
    guiaContainer.style.display = 'none';
}

// Agregar producto al registro
function agregarAlRegistro(producto, estado, diasEstimados) {
    const nuevoProducto = {
        producto: producto,
        estado: estado,
        diasEstimados: diasEstimados,
        confianza: resultadoActual?.confianza || 0,
        razon: resultadoActual?.razon || ''
    };
    
    guardarYRedirigir(nuevoProducto);
}

// Volver a la cámara
function volverACamara() {
    // Ocultar pantalla de análisis
    document.getElementById('pantalla-analisis').classList.remove('activa');
    
    // Mostrar pantalla de cámara
    document.getElementById('pantalla-camara').classList.add('activa');
    
    // Limpiar resultado
    resultadoActual = null;
    document.getElementById('resultado-container').innerHTML = '';
    document.getElementById('botones-analisis').innerHTML = '';
    cerrarGuia();
}