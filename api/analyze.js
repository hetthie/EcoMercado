// Serverless Function para Vercel con Hugging Face
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { image } = req.body;

        if (!image) {
            return res.status(400).json({ error: 'No se proporcionó imagen' });
        }

        const HF_API_KEY = process.env.HF_API_KEY;

        if (!HF_API_KEY) {
            console.error('API key no configurada');
            return res.status(500).json({ error: 'Configuración del servidor incompleta' });
        }

        // Extraer base64 sin prefijo si lo tiene
        let base64Image = image.includes(',') ? image.split(',')[1] : image;

        // Convertir base64 a Buffer
        const imageBuffer = Buffer.from(base64Image, 'base64');

        // PASO 1: Usar modelo de clasificación de imágenes
        const classificationResponse = await fetch(
            'https://api-inference.huggingface.co/models/google/vit-base-patch16-224',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${HF_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: imageBuffer
            }
        );

        if (!classificationResponse.ok) {
            const errorData = await classificationResponse.json();
            console.error('Error de HuggingFace:', errorData);
            return res.status(classificationResponse.status).json(errorData);
        }

        const classificationData = await classificationResponse.json();

        // PASO 2: Analizar resultados y mapear a nuestros productos
        const resultado = analizarResultados(classificationData);

        return res.status(200).json(resultado);

    } catch (error) {
        console.error('Error en serverless function:', error);
        return res.status(500).json({ 
            error: 'Error interno del servidor',
            message: error.message 
        });
    }
}

function analizarResultados(clasificacion) {
    // Mapeo de etiquetas de HuggingFace a nuestros productos
    const mapeoProductos = {
        'banana': 'Plátano',
        'lemon': 'Manzana', // Aproximación
        'orange': 'Tomate',  // Aproximación
        'apple': 'Manzana',
        'strawberry': 'Tomate', // Aproximación
        'bell pepper': 'Aguacate', // Aproximación
        'zucchini': 'Aguacate', // Aproximación
        'cucumber': 'Aguacate', // Aproximación
        'cabbage': 'Lechuga',
        'broccoli': 'Lechuga',
        'cauliflower': 'Lechuga'
    };

    // Buscar el producto con mayor confianza
    let productoDetectado = null;
    let confianzaMaxima = 0;

    for (const prediccion of clasificacion) {
        const label = prediccion.label.toLowerCase();
        
        // Buscar coincidencias en nuestro mapeo
        for (const [keyword, producto] of Object.entries(mapeoProductos)) {
            if (label.includes(keyword)) {
                if (prediccion.score > confianzaMaxima) {
                    productoDetectado = producto;
                    confianzaMaxima = prediccion.score;
                }
            }
        }
    }

    // Si no se detectó ningún producto válido
    if (!productoDetectado || confianzaMaxima < 0.3) {
        return {
            producto: "Desconocido",
            estado: null,
            confianza: 0,
            razon: "No es uno de los productos permitidos (Plátano, Tomate, Aguacate, Manzana, Lechuga)"
        };
    }

    // Determinar estado de maduración (simplificado, basado en confianza)
    let estado;
    let razon;

    if (confianzaMaxima > 0.8) {
        estado = "Maduración avanzada";
        razon = "El producto se ve en buen estado, maduro y listo para consumir";
    } else if (confianzaMaxima > 0.5) {
        estado = "Maduración baja";
        razon = "El producto parece estar en etapa temprana de maduración";
    } else {
        estado = "Maduración muy avanzada";
        razon = "El producto muestra signos de maduración avanzada";
    }

    return {
        producto: productoDetectado,
        estado: estado,
        confianza: Math.round(confianzaMaxima * 100),
        razon: razon
    };
}