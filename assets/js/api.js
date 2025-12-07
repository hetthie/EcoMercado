// ========== API CLIENT ==========

/**
 * Analiza una imagen usando el backend serverless
 * @param {string} base64Image - Imagen en formato base64
 * @returns {Promise<Object>} - Resultado del análisis
 */
async function analizarImagenConAPI(base64Image) {
    try {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: base64Image
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error en API:', error);
        throw error;
    }
}