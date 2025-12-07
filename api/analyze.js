// Serverless Function para Vercel
// Este archivo maneja las llamadas a Gemini API de forma segura

export default async function handler(req, res) {
    // Solo permitir POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { image } = req.body;

        if (!image) {
            return res.status(400).json({ error: 'No se proporcionó imagen' });
        }

        // Obtener API key desde variables de entorno
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

        if (!GEMINI_API_KEY) {
            console.error('API key no configurada');
            return res.status(500).json({ error: 'Configuración del servidor incompleta' });
        }

        // Extraer base64 sin prefijo si lo tiene
        const base64Image = image.includes(',') ? image.split(',')[1] : image;

        // Llamar a Gemini API
       // ✅ CORRECTO
const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

        const response = await fetch(geminiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        {
                            text: `Analiza esta imagen de un producto alimenticio.

Determina:
1. ¿Es uno de estos productos?: Plátano, Tomate, Aguacate, Manzana, Lechuga
2. Estado de maduración:
   - "Maduración baja" (verde, inmaduro, no listo para consumir)
   - "Maduración avanzada" (maduro, listo para consumo, en su punto)
   - "Maduración muy avanzada" (sobremaduro, manchas oscuras, debe usarse hoy)

Responde ÚNICAMENTE en formato JSON exacto:
{
  "producto": "nombre exacto del producto",
  "estado": "Maduración baja" o "Maduración avanzada" o "Maduración muy avanzada",
  "confianza": número del 0 al 100,
  "razon": "breve explicación visual de por qué determinaste este estado"
}

Si no es ninguno de los 5 productos, responde:
{
  "producto": "Desconocido",
  "estado": null,
  "confianza": 0,
  "razon": "No es uno de los productos permitidos"
}`
                        },
                        {
                            inline_data: {
                                mime_type: "image/jpeg",
                                data: base64Image
                            }
                        }
                    ]
                }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error de Gemini:', errorData);
            return res.status(response.status).json(errorData);
        }

        const data = await response.json();
        
        // Extraer el texto de la respuesta
        const textoRespuesta = data.candidates[0].content.parts[0].text;
        
        // Parsear JSON de la respuesta
        const jsonMatch = textoRespuesta.match(/\{[\s\S]*\}/);
        const resultado = JSON.parse(jsonMatch ? jsonMatch[0] : textoRespuesta);

        // Devolver resultado
        return res.status(200).json(resultado);

    } catch (error) {
        console.error('Error en serverless function:', error);
        return res.status(500).json({ 
            error: 'Error interno del servidor',
            message: error.message 
        });
    }
}