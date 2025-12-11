// ========== BASE DE DATOS: DÍAS ESTIMADOS POR ESTADO ==========
const DIAS_PRODUCTO = {
    "Plátano": {
        "Maduración baja": 6,
        "Maduración avanzada": 2,
        "Maduración muy avanzada": 1
    },
    "Tomate": {
        "Maduración baja": 8,
        "Maduración avanzada": 4,
        "Maduración muy avanzada": 1
    },
    "Aguacate": {
        "Maduración baja": 6,
        "Maduración avanzada": 2,
        "Maduración muy avanzada": 1
    },
    "Manzana": {
        "Maduración baja": 18,
        "Maduración avanzada": 8,
        "Maduración muy avanzada": 4
    },
    "Lechuga": {
        "Maduración baja": 6,
        "Maduración avanzada": 3,
        "Maduración muy avanzada": 1
    }
};

// ========== GUÍAS COMERCIALES - VERSIÓN MÍNIMA OPTIMIZADA ==========
const GUIAS = {
    "Plátano": {
        "Maduración baja": `Estado ideal para venta estándar. Los plátanos verdes o levemente amarillos tienen 6 días de vida útil. Perfectos para clientes que compran para toda la semana.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 ESTRATEGIA DE DIFERENCIACIÓN
Segmenta tu inventario por grado de madurez y ofrece diferentes precios. Los plátanos verdes atraen compradores que buscan durabilidad, mientras que los pintones (amarillo-verde) son ideales para consumo inmediato.
• Crea "paquetes de maduración": verdes para la semana ($X), pintones para 2-3 días ($X+10%), maduros para hoy ($X+20%)
• Coloca carteles educativos: "Verde = 6 días", "Pinton = 3 días", "Maduro = consumo inmediato"
• Ofrece degustaciones de plátano maduro para demostrar dulzura natural sin azúcar añadida

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONSERVACIÓN PROFESIONAL
Método de atmósfera controlada para extender vida útil hasta 10 días:
• Separar racimos: corta en grupos de 3-5 plátanos (reduce propagación de etileno)
• Envuelve los tallos con film transparente o papel aluminio (bloquea 50% del etileno)
• Almacena a 13-15°C si tienes refrigerador comercial (nunca menos de 12°C o se ennegrecen)
• Mantén separado de: manzanas, peras, aguacates (producen etileno acelerador)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 RED COMERCIAL ESTRATÉGICA
Construye relaciones B2B para venta mayorista constante:
• Gimnasios y centros deportivos: contacta nutricionistas deportivos
• Guarderías y colegios: el Ministerio de Educación promueve meriendas saludables
• Restaurantes de comida saludable: busca aquellos con menú de bowls y smoothies
• Panaderías artesanales: pagan más por plátanos verdes para hacer harina de plátano

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍳 RECETA COMERCIAL: Chips de Plátano Verde
Producto de valor agregado. Costo: $2 | Venta: $3-4 por bolsa de 100g | Margen: 200%
INGREDIENTES:
• 4 plátanos verdes
• 2 cucharadas de aceite vegetal
• 1 cucharadita de sal
• Condimentos opcionales: ají en polvo, comino
PREPARACIÓN:
1. Pelar plátanos y cortar en rodajas finas (2mm) con mandolina
2. Remojar en agua con sal por 15 minutos
3. Secar completamente con papel absorbente
4. Freír en aceite a 170°C por 3-4 minutos hasta dorado
5. Escurrir y salar inmediatamente
6. Empacar en bolsas herméticas
TIEMPO: 45 min | RENDIMIENTO: 4 bolsas de 100g`,

        "Maduración avanzada": `Ventana de oportunidad de 2 días. Los plátanos amarillos con motas marrones están en su punto máximo de dulzura natural (18-20% de azúcar). Momento perfecto para venta premium o transformación.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 ESTRATEGIA DE PRECIO DINÁMICO
No rebajes el precio - reposiciona el producto:
• Marketing de "Plátano de Repostería Premium": resalta el nivel de dulzura óptimo para hornear
• Precio estratégico: mantén precio base + ofrece "Combo Panadero" (6 plátanos + receta impresa = +30% valor)
• Target correcto: panaderos caseros, madres que hornean, personas fitness
• Empaqueta en bolsas de papel con etiqueta "Perfecto para Pan de Plátano - Listos Hoy"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍳 RECETA ESTRELLA: Pan de Plátano Húmedo
El producto horneado más vendido en cafeterías. Costo: $3 | Venta: $12-15 por pan completo
INGREDIENTES:
• 4 plátanos maduros bien machacados (450g)
• 2 tazas de harina de trigo (240g)
• ¾ taza de azúcar morena (150g)
• ½ taza de aceite vegetal (120ml)
• 2 huevos grandes
• 1 cucharadita de bicarbonato de sodio
• 1 cucharadita de polvo de hornear
• ½ cucharadita de sal
• 1 cucharadita de vainilla
• Opcional: ½ taza de nueces o chispas de chocolate
PREPARACIÓN:
1. Precalentar horno a 175°C. Engrasar molde rectangular de 23x13cm
2. Mezclar plátanos machacados con azúcar hasta integrar
3. Agregar huevos uno por uno, luego aceite y vainilla
4. Cernir ingredientes secos e incorporar suavemente
5. Agregar nueces si deseas
6. Hornear 55-65 minutos (probar con palillo)
7. Enfriar 10 minutos antes de desmoldar
TIEMPO: 1h 30min | RENDIMIENTO: 1 pan de 12 porciones

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONSERVACIÓN DE EMERGENCIA
Técnicas para extender 2-3 días adicionales:
• Refrigeración controlada: envuelve individualmente en papel periódico
• Congelación estratégica: pela, corta en trozos, congela en bandeja (dura 3 meses)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 CONTACTOS DE EMERGENCIA
• Juice bars y cafeterías: pagan más por plátanos maduros
• Grupos de Facebook: "Repostería Casera Ecuador", "Emprendedores Panaderos"
• Mercados comunitarios: Bioferia (Guayaquil, sábados)`,

        "Maduración muy avanzada": `SITUACIÓN CRÍTICA: Solo 1 día de vida útil. Los plátanos completamente marrones tienen cero valor de venta directo pero 100% valor nutricional. ACCIÓN INMEDIATA requerida.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 ESTRATEGIA DE LIQUIDACIÓN INTELIGENTE
Evita pérdida total con estas tácticas:
• NO regales - transforma hoy mismo en productos horneados (ROI 200-300%)
• Contacta INMEDIATAMENTE a compradores de emergencia
• Congela para uso futuro si no tienes tiempo
• Última opción: vende como "ingrediente de repostería" a 50% del costo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍳 RECETA DE RESCATE: Pancakes de Plátano (2 ingredientes)
La receta viral más fácil. Venta: $5-7 por porción
INGREDIENTES:
• 2 plátanos muy maduros (mientras más oscuros, mejor)
• 2 huevos grandes
• Opcional: canela, vainilla
PREPARACIÓN:
1. Machacar plátanos hasta puré suave
2. Batir huevos hasta espumosos
3. Mezclar ambos hasta integrar
4. Cocinar en sartén a fuego medio 2-3 minutos por lado
5. Servir con miel o frutas
TIEMPO: 15 min | PORCIONES: 8 pancakes pequeños

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONGELACIÓN DE RESCATE
Salvamento total del inventario:
• Pelar, cortar en rodajas, pre-congelar en bandeja separados
• Guardar en bolsas Ziploc hasta 6 meses
• Uso: smoothies (directo congelado), repostería (descongelar 30 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 RED DE EMERGENCIA
• Panaderías caseras: busca en grupos de Facebook
• Juice bars: compran diario para smoothies
• Aplicación "Too Good To Go": vende productos cerca del vencimiento
• Mercado de Trueque Guayaquil: domingos en Parque Samanes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 ANÁLISIS ECONÓMICO: PÉRDIDA VS RESCATE
ESCENARIO 1 - Pérdida Total: 10 plátanos = -$3 (100%)
ESCENARIO 2 - Venta Liquidación: +$1.50 (50% recuperación)
ESCENARIO 3 - Pan de Plátano: Costo $5.50 → Venta $12-15 = ROI 118-172%
ESCENARIO 4 - Congelación: 100% preservación para uso futuro

RECOMENDACIÓN: Si tienes tiempo (1-2 horas) → transforma. Si no → congela.`,
    },

    "Tomate": {
        "Maduración baja": `Estado perfecto para venta estándar y almacenamiento. Tomates firmes con color verde-naranja tienen 8 días de vida útil. Ideales para clientes que cocinan durante la semana.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 ESTRATEGIA DE SEGMENTACIÓN POR USO
Educa a tus clientes sobre los usos según el nivel de madurez:
• "Tomates de Ensalada" (verde-firme): para corte, hamburguesas, sandwiches - vende a +$0.20/lb
• "Tomates de Cocina" (semi-maduros): para salsas, guisos - precio estándar
• "Tomates Premium" (rojos firmes): perfectos para bruschetta - precio premium +30%
• Display visual: separa en 3 canastas con carteles y usos sugeridos
• Crea combos: "Kit Pasta Italiana" (tomates + albahaca + ajo)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONSERVACIÓN CIENTÍFICA
Técnicas para extender vida útil hasta 12 días:
• NUNCA refrigerar tomates verdes o semi-maduros (detiene maduración y arruina sabor)
• Almacenamiento óptimo: 18-21°C con ventilación
• Método: coloca con tallo hacia abajo (reduce pérdida de humedad)
• Sistema de cajas ventiladas: una sola capa por caja
• Aislamiento: separa de bananos, aguacates, manzanas (producen etileno acelerador)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 CANALES B2B RENTABLES
• Restaurantes de comida rápida: pizzerías, hamburgueserías - necesitan tomate firme
• Empresas de catering: bodas, eventos corporativos
• Cocinas industriales: hospitales, universidades, fábricas
• Servicios de meal prep: necesitan ingredientes frescos 2-3 veces/semana
• Mercados campesinos y ferias orgánicas

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍳 RECETA DE VALOR AGREGADO: Tomates Deshidratados en Aceite
Producto gourmet con margen de 400%. Costo: $4 | Venta: $18-22 por frasco 250ml
INGREDIENTES:
• 15 tomates medianos firmes
• 2 tazas de aceite de oliva (500ml)
• 6 dientes de ajo en láminas
• 2 cucharadas de orégano seco
• 1 cucharada de sal marina
PREPARACIÓN:
1. Cortar tomates en mitades, remover semillas
2. Colocar en bandeja, salar y espolvorear orégano
3. Deshidratar a 90°C por 6-8 horas (o al sol 2-3 días)
4. Esterilizar frascos de vidrio
5. Capas: tomates secos + ajo + aceite hasta cubrir
6. Reposar 1 semana antes de vender
TIEMPO: 8-10 horas | VIDA ÚTIL: 6 meses sellado`,

        "Maduración avanzada": `Ventana de 4 días. Tomates rojos con piel brillante están en punto perfecto de sabor. Alta concentración de licopeno y dulzura natural máxima. Momento ideal para productos premium.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 ESTRATEGIA DE REPOSICIONAMIENTO PREMIUM
Convierte la madurez en ventaja:
• NO uses "maduro" - usa "Tomate de Vid", "Selección del Chef"
• Precio: SUBE 15-20%. Justificación: "Sabor concentrado ideal para salsas artesanales"
• Empaque premium: bolsas de papel kraft con ventana, etiqueta con tips
• Marketing: vende a cocineros caseros, food bloggers
• Demostraciones: degustaciones de salsa fresca vs comercial

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍳 RECETA ESTRELLA: Salsa Pomodoro Tradicional
Base de pasta italiana. Costo: $6-7 | Venta: $10-12 por frasco 500ml | Margen: 300%
INGREDIENTES:
• 2 kg tomates maduros rojos (12-14 tomates)
• ¼ taza aceite de oliva (60ml)
• 6 dientes ajo picados
• 1 cebolla blanca picada
• 2 cucharadas pasta de tomate
• 1 cucharada azúcar
• 2 cucharaditas sal
• 10-12 hojas albahaca fresca
• 1 cucharadita orégano
PREPARACIÓN:
1. Hacer corte X en base de tomates, blanquear 30 seg
2. Pelar tomates, cortar en cuartos, remover semillas
3. Sofreír cebolla 5 min, agregar ajo 1 min
4. Añadir tomates, pasta de tomate, especias
5. Cocinar 10 min sin tapa, luego 30-40 min a fuego bajo
6. Triturar con batidora hasta consistencia deseada
7. Agregar albahaca últimos 5 min
8. Esterilizar frascos y envasar
TIEMPO: 1h 30min | RENDIMIENTO: 4-5 frascos 500ml

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONSERVACIÓN ESTRATÉGICA
• Refrigeración: SOLO maduros completamente, parte menos fría
• Congelación: picar, colocar en bolsas, aplanar, congelar para salsas
• Conservas: hacer salsa y enlatar (mejor opción para grandes cantidades)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 CANALES DE VENTA RÁPIDA
• Restaurantes italianos: necesitan para salsas frescas
• Servicios de comida a domicilio: meal prep, viandas saludables
• Pizzerías artesanales: pizza napolitana requiere tomates muy maduros`,

        "Maduración muy avanzada": `ALERTA ROJA: 1 día útil. Tomates muy blandos con manchas oscuras. Venta directa pierde 80% valor, pero 100% del valor nutricional permanece. TRANSFORMACIÓN URGENTE única vía rentable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 PROTOCOLO DE RESCATE INMEDIATO
Triaje en las primeras 6 horas:
• SEPARACIÓN: inspecciona CADA tomate
  - Blandos sin grietas: para salsa cocida (procesar HOY)
  - Con grietas pequeñas: para puré o pasta (cocinar inmediato)
  - Con moho: desechar (contamina)
• NO intentes vender directos
• Cálculo: 5 kg tomates muy maduros ($4) → salsa envasada ($24-30) = 500% ROI

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍳 RECETA DE EMERGENCIA: Pasta de Tomate Concentrada
Alta demanda para restaurants. Costo: $3 | Venta: $12-15 por frasco 250ml
INGREDIENTES:
• 3 kg tomates muy maduros
• 2 cucharadas aceite de oliva
• 1 cucharada sal marina
• 1 cucharadita azúcar (opcional)
PREPARACIÓN:
1. Lavar, cortar en cuartos (no pelar ni quitar semillas)
2. Cocinar en olla grande 15 min hasta deshacerse
3. Pasar por colador fino (eliminar piel y semillas) - CRÍTICO
4. Devolver líquido a olla limpia
5. Cocinar a fuego medio-bajo SIN TAPA 2-3 horas (reducir 70-80%)
6. Revolver cada 15-20 min
7. Lista cuando tiene consistencia de mermelada
8. Esterilizar frascos, llenar, procesar en baño maría 30 min
TIEMPO: 3-4 horas | RENDIMIENTO: 6-7 frascos 250ml
VIDA ÚTIL: 18 meses sellado

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONGELACIÓN INMEDIATA
• Opción 1: Tomates enteros - lavar, secar, congelar. Piel se pela sola al descongelar
• Opción 2: Puré crudo - licuar completos, verter en bolsas, aplanar
• Opción 3: Cubos concentrado - cocinar 30 min, congelar en cubiteras
• Duración: 6 meses a -18°C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 COMPRADORES DE EMERGENCIA
• Restaurantes de comida típica: hacen salsa diaria
• Fábricas de salsas artesanales: procesan grandes volúmenes
• Food trucks: hamburguesas, hot dogs, alitas
• Aplicación "Fenicio": productos cerca al vencimiento

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 ANÁLISIS ECONÓMICO
ESCENARIO 1 - Pérdida Total: 5 kg = -$4 (100%)
ESCENARIO 2 - Venta Pánico: $2 (50% recuperación)
ESCENARIO 3 - Congelación: $4 preservados para futuro
ESCENARIO 4 - Salsa Pomodoro: Costo $9 → Venta $40-48 = ROI 344-433%

RECOMENDACIÓN: Si tienes una tarde → salsa envasada (máxima rentabilidad). Si 1 hora → salsa simple para restaurants. Si no tienes tiempo → congela como puré.`,
    },
    "Aguacate": {
        "Maduración baja": `Estado óptimo para distribución. Aguacates verdes firmes tienen 6 días de vida útil. Perfectos para venta mayorista y almacenamiento controlado.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 ESTRATEGIA DE MADURACIÓN BAJO DEMANDA
Control del proceso para ventas escalonadas:
• Sistema 3 zonas: "Listos hoy" (maduros), "2-3 días" (pintones), "Para la semana" (verdes)
• Acelera: envuelve con 1-2 manzanas en papel (2 días)
• Frena: refrigera los que empiezan a ceder (3-4 días más)
• Premium pricing: +20% por "listos hoy"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONSERVACIÓN CIENTÍFICA
• Temperatura: 12-13°C ideal
• Ventilación: cajas con agujeros, nunca plástico sellado
• Aislamiento: NUNCA cerca de plátanos, manzanas, tomates
• Maduración emergencia: bolsa papel + plátano = 24-48h

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 CANALES B2B
• Restaurantes mexicanos: tacos, burritos, guacamole - volumen constante
• Cafeterías hipster: avocado toast es plato estrella
• Meal prep: entregas 3 veces/semana
• Sushi restaurants: necesitan firmes para corte

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 RECETA: Aceite de Aguacate Artesanal
Producto ultra-premium. Costo: $15 | Venta: $60-80 por 250ml | Margen: 400%
Requiere aguacates maduros. Proceso: deshidratar pulpa 8-10h, moler, prensar, filtrar. Envasar en botellas oscuras. Mercado: tiendas gourmet, spa.`,

        "Maduración avanzada": `Ventana de 2 días. Aguacates que ceden a presión están en punto máximo de cremosidad. Alto contenido de grasas saludables. MOMENTO PERFECTO para productos premium.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 ESTRATEGIA PREMIUM - "READY TO EAT"
• Rebranding: "Listo para Consumir", "Perfect Ripeness"
• Precio: mantén o SUBE 15%
• Packaging: bolsa papel con ventana, etiqueta "Consumir en 48h"
• Target: oficinistas, personas que hacen avocado toast

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🥑 RECETA: Guacamole Artesanal (Venta a Restaurantes)
Costo: $4 | Venta: $10-12 por 500g | Margen: 250%
INGREDIENTES:
• 4 aguacates grandes (800g)
• 2 tomates en cubos
• ½ cebolla morada picada
• 2 limones (jugo)
• 3 cuch. cilantro
• 1 ají verde
• 1 cdta sal, ½ cdta comino
PREPARACIÓN:
1. Machacar aguacate hasta rústico
2. Agregar jugo limón inmediatamente
3. Mezclar resto ingredientes
4. Contenedor hermético, film directo en superficie
5. Refrigerar hasta venta (24h máximo)
VIDA ÚTIL: 24h refrigerado

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONSERVACIÓN
• Refrigeración: frena 48-72 horas
• Método cebolla: mitad cortada con ¼ cebolla en contenedor
• Congelación: puré con limón, porciones, solo para smoothies/salsas

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 VENTA INMEDIATA
• Cafeterías brunch: avocado toast diario
• Juice bars: smoothies, bowls
• Servicios meal prep saludable`,

        "Maduración muy avanzada": `CÓDIGO ROJO: <24 horas. Muy blandos con manchas oscuras. Venta directa imposible. Pulpa interior generalmente perfecta para transformación. ACCIÓN INMEDIATA.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 RESCATE EN 6 HORAS
• Corta cada aguacate, evalúa interior
• Pulpa verde-amarilla: APTA transformación
• Manchas marrones <10%: corta y usa el resto
• Interior marrón/mal olor: DESCARTAR
• Costo-beneficio: 6 aguacates ($4) → guacamole ($12-15) = 200% ROI

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🥑 RECETA FLASH: Guacamole para Venta Inmediata (20 min)
INGREDIENTES: 6 aguacates, 3 tomates, 1 cebolla, 3 limones, cilantro, ají, sal
PREPARACIÓN:
1. Desechar partes marrones oscuras
2. Machacar pulpa verde rústica
3. TODO el jugo de limón inmediatamente
4. Mezclar ingredientes rápido
5. Contenedores 250-500g, film directo
6. Llamar restaurantes AHORA - entrega inmediata 20% descuento
TIEMPO: 20 min | VIDA: 18-24h | VENTA: $2.50-3/250g

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONGELACIÓN DE RESCATE
• Método: machacar con limón, bolsas Ziploc planas
• Porciones: cubiteras para smoothies
• Duración: 4-6 meses
• NO sirve para: avocado toast, ensaladas

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 EMERGENCIA
• Taquerías y restaurantes mexicanos
• Juice bars: smoothies verdes
• Food trucks comida saludable
• App "Too Good To Go"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 ANÁLISIS
P�rdida: -$6 | Congelación: $6 preservado | Guacamole: Costo $8 → Venta $12-15 (ROI 56-87%)`,
    },

    "Manzana": {
        "Maduración baja": `Estado óptimo para almacenamiento. Manzanas firmes y crujientes tienen hasta 18 días en condiciones controladas. Perfectas para distribución mayorista.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 CLASIFICACIÓN POR CALIDAD
• "Premium" (sin marcas): +30% precio - oficinas, hoteles, gift boxes
• "Estándar" (marcas pequeñas): precio normal - mayoristas
• "Cocina" (golpes leves): -20% - panaderos, jugos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONSERVACIÓN PROFESIONAL
• Temperatura: 0-4°C ideal
• Humedad: 85-90% (bandeja agua si es necesario)
• CRÍTICO - Aislamiento: producen MUCHO etileno, separar de otras frutas
• Almacenamiento: una capa por caja, papel entre manzanas
• Rotación FIFO: vende las antiguas primero

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 CANALES B2B
• Colegios: programa Merienda Saludable MINEDUC
• Empresas con fruterías corporativas: bancos, fábricas
• Hoteles 3+ estrellas: desayunos y lobby
• Hospitales y clínicas: cafeterías y dietas

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍎 RECETA: Chips de Manzana Deshidratados
Costo: $2 | Venta: $10-12 por 100g | Margen: 400%
INGREDIENTES: 6 manzanas, limón, canela, azúcar opcional
PREPARACIÓN:
1. Cortar rodajas 2-3mm uniformes
2. Remojar en agua con limón 5 min
3. Deshidratador 60°C 6-8h O Horno 100°C 2-3h
4. Empacar con silica gel
VIDA ÚTIL: 3 meses sellado`,

        "Maduración avanzada": `Ventana de 8 días. Pérdida parcial de firmeza pero sabor dulce concentrado. Ideales para cocina y repostería. Momento para valor agregado.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 REPOSICIONAMIENTO CULINARIO
• Rebranding: "Manzanas de Repostería", "Extra Dulces"
• Precio: mantén o +10% por dulzura
• Empaque: bolsas con recetas impresas
• Target: panaderos caseros, madres

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍎 RECETA: Compota de Manzana Casera
Costo: $3 | Venta: $9-12 por 500ml | Margen: 250%
INGREDIENTES:
• 2 kg manzanas (10-12 unidades)
• ½ taza azúcar
• ½ taza agua
• 2 cdtas canela
• Jugo 1 limón
• 1 cdta vainilla
PREPARACIÓN:
1. Pelar, cortar cubos 2cm
2. Cocinar con agua, azúcar, canela, limón 10 min tapado
3. Reducir fuego, 20-25 min más destapado
4. Machacar o dejar rústico
5. Vainilla últimos 2 min
6. Esterilizar frascos, llenar, baño maría 20 min
TIEMPO: 1h | RENDIMIENTO: 4 frascos 500ml | VIDA: 12 meses

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONSERVACIÓN
• Refrigeración: 0-4°C ralentiza proceso
• Papel: envuelve individualmente, refrigera
• Congelación: pela, cubos, congela en bandeja (10-12 meses)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 VENTA RÁPIDA
• Panaderías artesanales: pay, strudel, muffins
• Cafeterías con repostería propia
• Centros infantiles: compota saludable`,

        "Maduración muy avanzada": `ALERTA: 4 días máximo. Muy blandas con manchas oscuras. Venta directa imposible. Perfectas para procesamiento inmediato. Sabor dulce máximo.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 ACCIÓN INMEDIATA (8 HORAS)
• Inspección total: blandas sin moho = APTAS cocción
• Manchas <30%: corta y usa resto
• Moho/mal olor: DESCARTAR
• Decisión por volumen: 5-10 = compota express | 10-20 = pay | 20+ = vinagre
• Cálculo: 15 manzanas ($3) → 3 frascos compota ($27) = 800% ROI

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍎 RECETA EMERGENCIA: Compota Express (30 min)
INGREDIENTES: 2 kg manzanas, ½ taza azúcar, ¼ taza agua, canela, limón
PREPARACIÓN:
1. Pelar rápido, trozos grandes
2. Cocinar TODO junto fuego alto
3. Revolver constantemente 10 min
4. Fuego medio 15 min más
5. Machacar o rústico
6. Contenedores limpios
7. Llamar restaurantes/cafeterías YA - entrega 1h
TIEMPO: 30 min | VENTA: $2-3 por 500g

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONGELACIÓN PREVENTIVA
• Rodajas: pela, corta, remoja limón, seca, congela
• Puré crudo: licúa con limón, congela porciones
• Compota lista: cocina, enfría, congela 500ml
• Duración: 10-12 meses

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 ÚLTIMA HORA
• Panaderías comerciales: compran muy maduras
• Fabricantes jugos naturales
• Comedores comunitarios
• App "Fenicio"/"Too Good To Go"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 ANÁLISIS
P�rdida: -$3 | Congelación: $3 preservado 10-12 meses | Compota: Costo $4 → Venta $9 (ROI 125%)`,
    },

    "Lechuga": {
        "Maduración baja": `Estado óptimo para venta. Lechugas frescas, crujientes, verde brillante tienen 6 días de vida útil. Ideal para distribución inmediata.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 DIFERENCIACIÓN VISUAL
• Rehidratación: agua helada 30 min antes de exhibir
• Display hielo: sobre cama de hielo picado
• Spray agua cada 2 horas
• Iluminación: LED blancos fríos resaltan verde
• Separación por tipo: romanas, crespas, mantequilla

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONSERVACIÓN CIENTÍFICA
• Temperatura: 0-2°C ideal (toleran frío extremo)
• Humedad: 95-98% - envuelve en toallas húmedas
• NUNCA lavar antes de almacenar
• Bolsas ventiladas: papel o plástico perforado
• NO cerca de: frutas productoras etileno

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 CANALES B2B
• Comida rápida: hamburgueserías, sandwicherías - entregas diarias
• Buffets: hoteles, casinos - grandes volúmenes
• Meal prep: comidas saludables semanales
• Juice bars y veganos: ensaladas, wraps, bowls

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🥗 RECETA: Mezcla Ensaladas Pre-lavadas
Costo: $2 | Venta: $8-10 por 200g | Margen: 300%
PREPARACIÓN:
1. Lavar con vinagre, enjuagar varias veces
2. Centrifugar o secar muy bien
3. Rasgar (NO cortar) en trozos
4. Mezclar variedades (colores y texturas)
5. Bolsas herméticas + toalla seca
6. Etiquetar "Lista para Servir"
7. Refrigerar 2-4°C
TIEMPO: 45 min | RENDIMIENTO: 6-8 bolsas | VIDA: 4-5 días`,

        "Maduración avanzada": `Ventana de 3 días. Hojas externas marchitas pero corazón firme. Pérdida estética pero valor nutricional intacto. Momento para procesamiento o venta rápida.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 RECUPERACIÓN RÁPIDA
• Limpieza: retira hojas feas, lava, corazón = nuevo
• Venta procesada: "lechuga lista para usar"
• Descuento: 30-40% venta rápida mismo día
• Marketing: "Lechugas del día - Perfectas cocinar"
• Venta restaurants económicos: no importa estética

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🥗 RECETA: Ensaladas Preparadas (24h)
Costo: $1.50 | Venta: $4-5 | VIDA: 24h máximo
INGREDIENTES (por porción):
• 150g lechuga (solo corazón fresco)
• 50g tomate cubos
• 30g pepino rodajas
• 20g zanahoria rallada
• 10g cebolla morada
PREPARACIÓN:
1. Quitar hojas marchitas/amarillentas
2. Lavar corazón con vinagre
3. Secar completamente
4. Cortar trozos bocado
5. Mezclar vegetales
6. Porcionar contenedores transparentes
7. NO agregar aderezo (vende aparte)
8. Refrigerar 2-4°C
9. Vender mismo día o máximo siguiente
MERCADO: Oficinistas, estudiantes, poco tiempo cocinar

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 CONSERVACIÓN EMERGENCIA
• Shock térmico: agua helada 15 min, secar, refrigerar
• Envoltura hermética: papel húmedo + bolsa cerrada
• Último recurso: congelación para smoothies (blanquear 30 seg)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 EMERGENCIA
• Comedores económicos y fondas
• Juice bars: smoothies
• Food trucks: hamburguesas, tacos`,

        "Maduración muy avanzada": `CRÍTICA: 1 día o menos. Marchitas con hojas marrones, oxidadas, blandas. VENTA DIRECTA IMPOSIBLE. Solo corazón puede ser rescatable. ACCIÓN INMEDIATA.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 TRIAJE URGENTE (2 HORAS)
• INSPECCIÓN HOJA POR HOJA
  - Externas marrones/viscosas: DESCARTAR
  - Corazón firme verde: RESCATABLE procesamiento
  - Corazón marrón/viscoso: pérdida total
• NO vender - riesgo sanitario grave
• Cálculo: 10 lechugas = ~3 tazas rescatables = 6 smoothies ($18-24)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🥤 RECETA RESCATE: Smoothie Verde Intenso
INGREDIENTES:
• 3 tazas hojas RESCATABLES (lavar exhaustivo)
• 2 plátanos maduros
• 1 taza piña
• 1 manzana verde
• 2 tazas agua coco/simple
• 2 cuch. miel
• Jugo 1 limón
• 10-12 hielo
PREPARACIÓN:
1. Inspeccionar cada hoja, desechar malas
2. Lavar 3 veces
3. Licuar TODO 90-120 seg hasta suave
4. Fruta enmascara amargor
5. Servir inmediato
6. NO almacenar - vender 2h
TIEMPO: 10 min | RENDIMIENTO: 4 vasos (2L) | VENTA: $3-4/vaso

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌱 COMPOSTAJE PRODUCTIVO
Cuando rescate no viable:
• Compostaje casero: inicia compostera
• Lombricultura: humus alta calidad
• Venta abono: $5-8/kg jardineros
• Donación granjas: agricultores urbanos
• Alimentación animal: conejos, gallinas (consultar)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 ÚLTIMA OPCIÓN
• Juice bars: smoothies con 70-80% descuento
• Granjas animales: conejos, gallinas
• Composters comerciales
• Ollas comunes: sopas volumen

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 ANÁLISIS REALISTA
P�rdida: -$2 | Rescate smoothies: Costo $5 → Venta $12-18 (ROI 350-650%) | Compostaje: $10-24 en 3 meses

LECCIÓN: Lechugas = ciclo más corto. Compra solo para 3-4 días máximo. Rotación rápida crítica.`,
    }
};


// Función auxiliar para obtener información del producto
function obtenerInfoProducto(producto, estado) {
    return {
        dias: DIAS_PRODUCTO[producto]?.[estado] || 0,
        guia: GUIAS[producto]?.[estado] || "Guía no disponible"
    };
}

// Función para obtener el estado de maduración según días restantes
function obtenerEstadoPorDias(producto, diasRestantes) {
    const diasProducto = DIAS_PRODUCTO[producto];
    if (!diasProducto) return null;
    
    // Determinar estado según días restantes
    if (diasRestantes >= diasProducto["Maduración baja"]) {
        return "Maduración baja";
    } else if (diasRestantes >= diasProducto["Maduración avanzada"]) {
        return "Maduración avanzada";
    } else {
        return "Maduración muy avanzada";
    }
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DIAS_PRODUCTO, GUIAS, obtenerInfoProducto, obtenerEstadoPorDias };
}