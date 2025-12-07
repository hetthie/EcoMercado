// ========== ELEMENTOS DE UI ==========
const fotoCapturada = document.getElementById('foto-capturada');
const resultadoContainer = document.getElementById('resultado-container');
const botonesAnalisis = document.getElementById('botones-analisis');

// ========== NAVEGACIÓN ==========
function mostrarPantalla(nombre) {
    document.querySelectorAll('.pantalla').forEach(p => {
        p.classList.remove('activa');
    });
    document.getElementById(`pantalla-${nombre}`).classList.add('activa');
}

function volverACamara() {
    mostrarPantalla('camara');
}

// ========== PANTALLA DE ANÁLISIS ==========
async function mostrarPantallaAnalisis(imagenBase64) {
    // Cambiar a pantalla de análisis
    mostrarPantalla('analisis');
    
    // Mostrar la imagen capturada
    fotoCapturada.src = imagenBase64;
    
    // Limpiar botones
    botonesAnalisis.innerHTML = '';
    
    // Mostrar loading
    resultadoContainer.innerHTML = `
        <div class="result-container analyzing">
            <div class="result-icon">⏳</div>
            <div class="result-title">Analizando imagen...</div>
            <div class="confidence">Por favor espere mientras procesamos la imagen</div>
        </div>
    `;
    
    try {
        // Llamar a la API
        const resultado = await analizarImagenConAPI(imagenBase64);
        
        // Mostrar resultado
        mostrarResultado(resultado);
        
    } catch (error) {
        console.error('Error en análisis:', error);
        mostrarError(error);
    }
}

// ========== MOSTRAR RESULTADO ==========
function mostrarResultado(resultado) {
    if (resultado.producto === "Desconocido") {
        resultadoContainer.innerHTML = `
            <div class="result-container result">
                <div class="result-icon">❓</div>
                <div class="result-title">Producto no reconocido</div>
                <div class="result-detail">${resultado.razon}</div>
                <div class="confidence">Por favor, toma una foto de: Plátano, Tomate, Aguacate, Manzana o Lechuga</div>
            </div>
        `;
        
        botonesAnalisis.innerHTML = `
            <button class="btn-secondary" onclick="volverACamara()">Volver a Cámara</button>
        `;
        return;
    }
    
    resultadoContainer.innerHTML = `
        <div class="result-container result">
            <div class="result-icon">✅</div>
            <div class="result-title">${resultado.producto} detectado</div>
            
            <div class="result-detail">
                <strong>Estado:</strong> ${resultado.estado}
            </div>
            
            <div class="result-detail">
                <strong>Análisis:</strong> ${resultado.razon}
            </div>
            
            <div class="confidence">Confianza del análisis: ${resultado.confianza}%</div>
        </div>
    `;
    
    botonesAnalisis.innerHTML = `
        <button class="btn-secondary" onclick="volverACamara()">Volver a Cámara</button>
    `;
}

// ========== MOSTRAR ERROR ==========
function mostrarError(error) {
    let errorMessage = 'No se pudo analizar la imagen. Por favor, intenta nuevamente.';
    
    try {
        const errorData = JSON.parse(error.message);
        if (errorData.error) {
            if (errorData.error.code === 429) {
                errorMessage = 'Has excedido el límite de requests. Por favor, espera un momento e intenta nuevamente.';
            } else if (errorData.error.message) {
                errorMessage = errorData.error.message;
            }
        }
    } catch (e) {
        // Usar mensaje por defecto
    }
    
    resultadoContainer.innerHTML = `
        <div class="result-container">
            <div class="result-icon">❌</div>
            <div class="result-title">Error en el análisis</div>
            <div class="confidence">${errorMessage}</div>
        </div>
    `;
    
    botonesAnalisis.innerHTML = `
        <button class="btn-secondary" onclick="volverACamara()">Volver a Cámara</button>
    `;
}