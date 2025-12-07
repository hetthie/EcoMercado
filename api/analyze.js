// Serverless Function para Vercel con Claude API
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { image } = req.body;

        if (!image) {
            return res.status(400).json({ error: 'No se proporcionó imagen' });
        }

        const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

        if (!CLAUDE_API_KEY) {
            console.error('API key no configurada');
            return res.status(500).json({ error: 'Configuración del servidor incompleta' });
        }

        // Extraer base64 sin prefijo
        const base64Image = image.includes(',') ? image.split(',')[1] : image;

        // Llamar a Claude API
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': CLAUDE_API_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 1024,
                messages: [{
                    role: 'user',
                    content: [
                        {
                            type: 'image',
                            source: {
                                type: 'base64',
                                media_type: 'image/jpeg',
                                data: base64Image
                            }
                        },
                        {
                            type: 'text',
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
                        }
                    ]
                }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error de Claude:', errorData);
            return res.status(response.status).json(errorData);
        }

        const data = await response.json();
        const textoRespuesta = data.content[0].text;
        
        // Extraer JSON de la respuesta
        const jsonMatch = textoRespuesta.match(/\{[\s\S]*\}/);
        const resultado = JSON.parse(jsonMatch ? jsonMatch[0] : textoRespuesta);

        return res.status(200).json(resultado);

    } catch (error) {
        console.error('Error en serverless function:', error);
        return res.status(500).json({ 
            error: 'Error interno del servidor',
            message: error.message 
        });
    }
}