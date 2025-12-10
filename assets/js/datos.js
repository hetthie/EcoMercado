// ========== DATOS DEL SISTEMA ==========

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

const GUIAS = {
    "Plátano": {
        "Maduración baja": "El plátano aún no está listo para consumir. Espera unos días más hasta que la cáscara tome un color amarillo.\n\nRecomendaciones:\n• Guárdalo a temperatura ambiente\n• No lo refrigeres mientras esté verde\n• Espera entre 3-5 días para consumo óptimo",
        
        "Maduración avanzada": `¡MOMENTO PERFECTO PARA MAXIMIZAR VENTAS!
El plátano está en su punto ideal de consumo. Aprovecha estos 2 días para obtener el mejor precio.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 ESTRATEGIAS DE VENTA INMEDIATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 UBICACIÓN ESTRATÉGICA:
• Colócalos al frente del puesto (máxima visibilidad)
• Agrúpalos en canastas atractivas con señalización
• Destaca: "¡Maduros HOY - Dulzura perfecta!"
• Separa de los verdes para evitar confusión

💵 TÁCTICAS DE PRECIO INTELIGENTES:
• Mantén precio normal (están en su mejor momento)
• Combo energético: "5 plátanos + avena = $2.50"
• Descuento volumen: "Lleva 10, paga 8"
• Para juguerías: "Docena a $X (especial comercios)"

👥 CLIENTES OBJETIVO PRIORITARIOS:
• Gimnasios y nutricionistas (snack post-ejercicio)
• Juguerías y cafeterías (batidos/smoothies)
• Panaderías (pan de plátano, tortas)
• Familias con niños (lonchera saludable)
• Deportistas (energía natural pre-entrenamiento)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍳 RECETAS Y USOS CULINARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PREPARACIONES DULCES:
• Pan de plátano tradicional (húmedo y aromático)
• Panqueques energéticos con avena
• Muffins de plátano con chips de chocolate
• Torta de plátano maduro al horno
• Galletas saludables sin azúcar añadida

BEBIDAS NUTRITIVAS:
• Batido verde: plátano + espinaca + miel
• Smoothie bowl con granola y fresas
• Licuado proteico: plátano + leche + mantequilla de maní
• Batido recuperador post-ejercicio
• Jugo energético matutino con avena

PREPARACIONES SALADAS:
• Patacones (tostones) con queso y guacamole
• Plátano maduro frito como acompañamiento
• Bolones de verde y maduro (desayuno ecuatoriano)
• Plátano asado con canela

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 CONSERVACIÓN INTELIGENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXTENDER VIDA ÚTIL (+2-3 días):
• Refrigerar separado de otras frutas
• Envolver el tallo con papel aluminio
• Guardar en bolsa perforada (reduce etileno)
• Separar plátanos individuales (maduran más lento)

CONGELACIÓN EFECTIVA:
• Pelar y cortar en rodajas (congelar en bandeja)
• Duración: hasta 3 meses en congelador
• Ideal para batidos y nice cream instantáneo
• Hacer puré y congelar en cubos para hornear

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 CONTACTOS ÚTILES RECOMENDADOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Juguerías (compran volumen, pago inmediato)
• Gimnasios con cafetería (cliente recurrente)
• Escuelas/colegios (loncheras saludables)
• Panaderías artesanales (ingrediente premium)
• Mercados orgánicos (valor agregado)`,
        
        "Maduración muy avanzada": `⚠️ ACCIÓN URGENTE - VENDER O PROCESAR HOY
El plátano está sobremaduro. No lo descartes, es tu oportunidad de transformarlo en valor.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 ESTRATEGIAS DE LIQUIDACIÓN RÁPIDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 VENTA DE EMERGENCIA (Próximas 4 horas):
• Descuento agresivo: 40-50% del precio normal
• Combo imbatible: "10 plátanos muy maduros = $1.50"
• Cartel visible: "¡ÚLTIMA OPORTUNIDAD - Para cocinar HOY!"
• Ofrecer junto con productos premium (venta cruzada)

📞 CONTACTOS DE RESCATE (Llamar AHORA):
• Juguerías: "Lote especial para batidos - Entrega inmediata"
• Vendedores de comida callejera (bolones, empanadas)
• Comedores populares (donación con beneficio tributario)
• Productores de compost (venta por kilo)
• Vecinos conocidos (aviso por WhatsApp grupal)

🎁 TÉCNICAS PSICOLÓGICAS DE VENTA:
• "Perfecto para hornear - Extra dulce sin azúcar"
• "El secreto del mejor pan de plátano"
• "Promoción relámpago - Solo hasta mediodía"
• Dar 1 de regalo por cada 5 comprados (genera confianza)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍳 RECETAS DE RESCATE INMEDIATO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PREPARACIONES RÁPIDAS (menos de 30 min):
• Pan de plátano exprés en microondas (8 minutos)
• Torticas fritas de plátano maduro (snack dulce)
• Batido denso tipo smoothie bowl (sin licuar mucho)
• Puré instantáneo para bebés (mercado nicho)
• Muffins de emergencia (hornear y vender mañana)

PRODUCTOS CON VALOR AGREGADO:
• Nice cream casero (helado saludable sin crema)
• Chips de plátano deshidratado (requiere deshidratador)
• Mermelada/dulce de plátano (conserva 1 mes)
• Pan de plátano para venta (producto terminado)
• Base para queque o brownies

BEBIDAS ENERGÉTICAS:
• Batido verde detox (plátano + espinaca + jengibre)
• Licuado recuperador (plátano + avena + canela + miel)
• Smoothie proteico (plátano + yogurt + nueces)
• Agua de plátano fermentada (probiótico natural)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 CONSERVACIÓN DE EMERGENCIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONGELACIÓN INMEDIATA (Gana 3 meses):
• Pelar completamente y cortar en rodajas
• Separar con papel encerado (evita que se peguen)
• Congelar en bolsas herméticas etiquetadas
• Usar directo del congelador para batidos
• Hacer puré y congelar en cubos (porciones exactas)

DESHIDRATACIÓN (Requiere equipo):
• Cortar fino y deshidratar 6-8 horas a 60°C
• Resultado: chips crujientes, duran 6 meses
• Vender como snack saludable premium
• Valor agregado: 300% más que fruta fresca

PROCESAMIENTO COMERCIAL:
• Hacer dulce/mermelada en cantidad
• Hornear panes y vender al día siguiente
• Ofrecer servicio de "plátano listo para hornear" (puré en bolsa)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 USOS NO ALIMENTICIOS CREATIVOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COSMÉTICA NATURAL:
• Mascarilla facial hidratante (plátano + miel + yogurt)
• Tratamiento capilar nutritivo (plátano + aceite de coco)
• Exfoliante corporal (plátano + azúcar + limón)
• Crema para pies resecos (plátano + aguacate)

USOS DOMÉSTICOS:
• Abono orgánico para plantas (cáscara rica en potasio)
• Pulir cuero de zapatos y muebles (interior cáscara)
• Fertilizante líquido (cáscara fermentada en agua)
• Compost acelerado (alto contenido orgánico)

ALIMENTACIÓN ANIMAL:
• Alimento para cerdos (triturado con otros vegetales)
• Complemento para gallinas (mezclar con granos)
• Vender a granjas cercanas (precio por kilo)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 CÁLCULO DE PÉRDIDA VS RESCATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ESCENARIO DE PÉRDIDA TOTAL:
10 plátanos × $0.25 = $2.50 a la basura

ESCENARIOS DE RESCATE:
✅ Venta 50% descuento: $1.25 recuperado (50% salvado)
✅ Venta a juguería: $1.00 (40% salvado + cliente recurrente)
✅ Procesamiento casero: $3.50 (140% ganancia - pan/tortas)
✅ Donación estratégica: $0 + beneficio social + publicidad

💡 MEJOR OPCIÓN: Procesar para venta con valor agregado
⚠️ EVITAR: Descarte sin intentar alternativas`
    },
    
    "Tomate": {
        "Maduración baja": "El tomate aún está verde y no ha madurado completamente.\n\nRecomendaciones:\n• Déjalo madurar a temperatura ambiente\n• NO lo refrigeres (pierde sabor y textura)\n• Colócalo en una ventana con luz indirecta\n• Espera 3-5 días hasta que tome color rojo",
        
        "Maduración avanzada": `¡PUNTO ÓPTIMO DE SABOR Y JUGOSIDAD!
El tomate está perfecto para consumo fresco y cocina. Maximiza tus ventas en estos 4 días.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 ESTRATEGIAS DE VENTA EFECTIVAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 PRESENTACIÓN PREMIUM:
• Exhibir en canastas bajas (fácil inspección)
• Limpiar suavemente para brillo natural
• Agrupar por tamaño y color uniforme
• Cartel: "Tomates maduros - Ideal ensaladas"
• Muestra cortada (demuestra jugosidad interior)

💵 ESTRATEGIAS DE PRECIO:
• Precio estándar (máxima calidad)
• Combo ensalada: "Tomate + lechuga + cebolla = $X"
• Descuento familiar: "5 libras = 10% descuento"
• Ofertas para restaurantes (volumen semanal)

👥 MERCADO OBJETIVO:
• Restaurantes y comedores (insumo diario)
• Vendedores de comida rápida (hamburguesas, hot dogs)
• Cocinerías y fondas (guisos, sopas)
• Familias (consumo semanal)
• Salseras caseras (producción artesanal)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍳 USOS CULINARIOS VERSÁTILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONSUMO FRESCO:
• Ensalada caprese (tomate + mozzarella + albahaca)
• Ensalada mixta tradicional
• Pico de gallo fresco
• Rodajas para hamburguesas y sánduches
• Tomate relleno (atún, pollo, quinoa)

PREPARACIONES COCIDAS:
• Salsa de tomate casera (conserva 1 semana)
• Tomate frito para pasta
• Sofrito base para guisos
• Sopa de tomate cremosa
• Tomates asados al horno con hierbas

CONSERVAS Y PROCESADOS:
• Tomate triturado en conserva (esterilizado)
• Salsa picante artesanal
• Pasta de tomate concentrada
• Tomates secos al horno (snack gourmet)
• Jugo de tomate natural

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 CONSERVACIÓN ADECUADA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEMPERATURA AMBIENTE (+2-3 días):
• Guardar con tallo hacia arriba
• En lugar fresco y ventilado
• Separado de otras frutas (etileno)
• Envolver individualmente en papel periódico

REFRIGERACIÓN TÁCTICA:
• Solo si hay exceso y no se venden
• Sacar 30 min antes de servir (recupera sabor)
• Duración: hasta 1 semana en cajón de verduras

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 CONTACTOS COMERCIALES CLAVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Restaurantes familiares (pedido semanal fijo)
• Puestos de hamburguesas/hot dogs
• Productoras de salsa artesanal
• Cocinerías y fondas populares
• Mercados de comida preparada`,
        
        "Maduración muy avanzada": `⚠️ ACCIÓN INMEDIATA - PROCESAR EN 24 HORAS
El tomate está sobremaduro pero aún aprovechable para cocción. Actúa rápido para evitar pérdida total.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 TÁCTICAS DE RESCATE URGENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 LIQUIDACIÓN INMEDIATA (Hoy):
• Descuento 50-60%: "Tomates para cocinar - $X kilo"
• Cartel claro: "Perfectos para SALSA y GUISOS"
• Venta por lote: "Todo el cajón a mitad de precio"
• Ofrecer como "tomate de cocina premium"

📞 CONTACTOS DE EMERGENCIA:
• Restaurantes económicos (salsas, guisos)
• Vendedores de comida callejera
• Productoras caseras de salsa (llamar directamente)
• Comedores comunitarios (donación estratégica)
• Vecinos que cocinen en cantidad

🎯 TRANSFORMACIÓN RÁPIDA:
• Hacer salsa hoy y vender mañana
• Triturar y congelar (base para sopas)
• Ofrecer "kit para salsa" (tomate + especias)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍳 RECETAS DE APROVECHAMIENTO TOTAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SALSAS Y BASES (Alto valor):
• Salsa de tomate casera concentrada
• Tomate frito tradicional (conserva 2 semanas)
• Sofrito preparado (base universal)
• Salsa boloñesa lista para pasta
• Salsa picante artesanal embotellada

SOPAS Y CREMAS:
• Sopa de tomate cremosa (venta por porción)
• Gazpacho frío (bebida refrescante)
• Crema de tomate con albahaca
• Consomé de tomate clarificado

CONSERVAS CASERAS:
• Tomate triturado en frascos esterilizados
• Pasta de tomate concentrada
• Tomate en cubos en conserva
• Mermelada de tomate (dulce gourmet)

PROCESAMIENTO INMEDIATO:
• Tomates secos al horno bajo (8-10 horas)
• Polvo de tomate deshidratado (condimento)
• Jugo de tomate natural embotellado

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 CONSERVACIÓN DE RESCATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONGELACIÓN PROCESADA:
• Lavar, cortar y triturar completamente
• Congelar en bolsas planas (ahorra espacio)
• Porciones de 500g (raciones exactas)
• Duración: 6 meses congelado
• Usar directo para salsas y sopas

COCCIÓN Y CONSERVA:
• Hacer salsa en cantidad y envasar caliente
• Esterilizar frascos en agua hirviendo 20 min
• Etiqueta con fecha de elaboración
• Duración: 3-4 semanas refrigerada

DESHIDRATACIÓN:
• Cortar en mitades, salar ligeramente
• Deshidratar a 60°C por 10-12 horas
• Tomates secos: producto gourmet premium
• Vender en bolsitas como aperitivo
• Precio: 5x más que tomate fresco

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 USOS ALTERNATIVOS RENTABLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COSMÉTICA NATURAL:
• Mascarilla aclaradora (tomate + miel)
• Tónico facial natural (jugo de tomate)
• Tratamiento anti-acné (acidez natural)
• Exfoliante facial (pulpa + azúcar)

USOS DOMÉSTICOS:
• Quitar manchas de plástico (acidez)
• Pulir metales opacos
• Desodorante de manos (quita olor a pescado/ajo)
• Abono líquido para tomateras (cáscaras fermentadas)

ALIMENTACIÓN ANIMAL:
• Complemento para gallinas (triturado)
• Mezcla para alimento de cerdos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 ANÁLISIS ECONÓMICO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PÉRDIDA TOTAL:
5kg tomates × $1.00/kg = $5.00 perdidos

OPCIONES DE RESCATE:
✅ Venta descuento 50%: $2.50 (50% recuperado)
✅ Salsa casera: $8.00 (160% ganancia)
✅ Tomates secos: $15.00 (300% ganancia - requiere equipo)
✅ Venta a comedor: $3.00 (60% + cliente recurrente)

💡 MEJOR OPCIÓN: Salsa casera embotellada
⏰ TIEMPO LÍMITE: 24 horas máximo`
    },
    
    "Aguacate": {
        "Maduración baja": "El aguacate está muy duro y necesita madurar.\n\nRecomendaciones:\n• Guárdalo a temperatura ambiente (3-5 días)\n• Para acelerar: mételo en bolsa de papel con manzana\n• NO lo refrigeres mientras esté duro\n• Sabrás que está listo cuando ceda ligeramente al presionar",
        
        "Maduración avanzada": `¡MOMENTO IDEAL - TEXTURA CREMOSA PERFECTA!
El aguacate está en su punto óptimo. Aprovecha estos 2 días para máxima rentabilidad.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 ESTRATEGIAS DE VENTA PREMIUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 PRESENTACIÓN DESTACADA:
• Exhibir en canasta visible (producto premium)
• Permitir tocar suavemente (demuestra madurez)
• Carteles llamativos: "Aguacates CREMOSOS hoy"
• Mostrar uno partido (interior perfecto atrae)
• Separar por tamaño (precio diferenciado)

💵 ESTRATEGIAS DE PRECIO INTELIGENTE:
• Precio premium justificado (producto delicado)
• Combo saludable: "Aguacate + tomate + limón = $X"
• Descuento par: "Lleva 2, segundo a mitad precio"
• Venta a restaurantes: Precio especial mayorista

👥 CLIENTES OBJETIVO RENTABLES:
• Restaurantes de comida saludable (guacamole)
• Veganos y vegetarianos (sustituto proteína)
• Gimnasios con cafetería (bowl nutritivo)
• Oficinas (snack saludable empleados)
• Madres con bebés (papilla nutritiva)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍳 PREPARACIONES GASTRONÓMICAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PREPARACIONES CLÁSICAS:
• Guacamole tradicional (limón, cebolla, tomate, cilantro)
• Tostadas con aguacate (avocado toast)
• Ensalada verde con aguacate en cubos
• Aguacate relleno (camarones, pollo, atún)
• Rebanadas para tacos y burritos

PLATOS GOURMET:
• Sushi rolls con aguacate (vegetariano)
• Pasta cremosa con salsa de aguacate
• Ensalada caprese con aguacate
• Ceviche verde con aguacate
• Wrap de aguacate con vegetales asados

BEBIDAS Y POSTRES:
• Smoothie verde detox (aguacate + espinaca + piña)
• Batido cremoso (aguacate + cacao + leche)
• Helado vegano de aguacate
• Mousse de aguacate con chocolate
• Licuado nutritivo energético

COCINA BEBÉ:
• Puré puro de aguacate (primera comida)
• Papilla aguacate + banana
• Crema nutritiva para bebés 6+ meses

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 CONSERVACIÓN EXPERT A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXTENDER VIDA (+1-2 días):
• Refrigerar solo cuando esté en punto
• Con hueso (la mitad sobrante)
• Rociar con limón (evita oxidación)
• Envolver herméticamente en film transparente
• Guardar con cebolla (retarda oxidación)

TRUCO PARA MITAD SOBRANTE:
• Dejar el hueso puesto
• Rociar generosamente con limón/lima
• Papel film directo sobre la pulpa (sin aire)
• Refrigerar inmediatamente

CONGELACIÓN (Emergencia):
• Hacer puré con limón
• Congelar en bolsas herméticas
• Duración: 4-6 meses
• Usar para smoothies y salsas

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 NETWORK COMERCIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Restaurantes de comida mexicana (guacamole diario)
• Locales de comida saludable (bowls, tostadas)
• Bares y cantinas (guacamole con totopos)
• Cafeterías hipster (avocado toast)
• Catering de eventos (ensaladas premium)`,
        
        "Maduración muy avanzada": `⚠️ URGENTE - USAR O PROCESAR HOY MISMO
El aguacate está sobremaduro pero aún rescatable. Actúa en las próximas horas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 TÁCTICAS DE RESCATE INMEDIATO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 VENTA URGENTE (Próximas 4 horas):
• Descuento 40-50%: "Aguacates muy maduros - COCINAR HOY"
• Dirigir a: "Perfectos para guacamole inmediato"
• Combo económico: "3 aguacates + limón = $X"
• Venta directa a restaurantes (llamar ahora)

📞 CONTACTOS CRÍTICOS:
• Restaurantes mexicanos (guacamole diario)
• Veganos conocidos (WhatsApp directo)
• Cafeterías de comida rápida
• Comedores y fondas (crema de aguacate)
• Productores de cosméticos naturales

🎯 PROCESAMIENTO INMEDIATO:
• Hacer guacamole y vender en porciones
• Ofrecer "aguacate procesado listo"
• Vender a precio de liquidación pero ya limpio

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍳 RECETAS DE RESCATE RÁPIDO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PREPARACIONES INMEDIATAS (10-15 min):
• Guacamole en cantidad (vender porciones)
• Crema de aguacate para ensaladas
• Aderezo cremoso para tacos
• Salsa verde con aguacate
• Dip de aguacate picante

PLATOS COCINADOS:
• Sopa fría de aguacate (gazpacho verde)
• Pasta con salsa cremosa de aguacate
• Hamburguesas con crema de aguacate
• Tacos con guacamole casero
• Quesadillas rellenas

BEBIDAS NUTRITIVAS:
• Batido verde ultra cremoso
• Smoothie detox (aguacate + espinaca + piña)
• Licuado proteico post-ejercicio
• Batido recuperador con cacao

CONSERVACIÓN PROCESADA:
• Puré con limón congelado (cubos)
• Guacamole en porciones refrigeradas
• Salsa embotellada (dura 2-3 días)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 TÉCNICAS DE CONSERVACIÓN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONGELACIÓN DE EMERGENCIA:
• Hacer puré con jugo de limón inmediatamente
• Proporción: 1 aguacate + 1 cucharada limón
• Congelar en bolsas herméticas (sacar aire)
• Porciones de 200g (medida estándar)
• Duración: 4-6 meses congelado
• Uso: Smoothies, salsas, aderezos

REFRIGERACIÓN CORTA:
• Puré con limón en frasco hermético
• Capa de aceite encima (sella)
• Duración: 24-48 horas máximo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 USOS COSMÉTICOS NATURALES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TRATAMIENTOS CAPILARES:
• Mascarilla capilar ultra hidratante
• Mezcla: aguacate + aceite coco + miel
• Aplicar 30 min antes lavar
• Resultados visibles primera aplicación
• Vender como "tratamiento natural premium"

CUIDADO FACIAL:
• Mascarilla facial antiarrugas
• Crema hidratante natural (aguacate + aloe)
• Exfoliante suave (aguacate + avena)
• Bálsamo labial nutritivo

CUIDADO CORPORAL:
• Hidratante corporal intensivo
• Crema para manos resecas
• Tratamiento para pies agrietados
• Aceite de aguacate casero (macerado)

VENTA DE PRODUCTOS:
• Embotellar cremas en frasquitos
• Etiquetar como "cosmética natural"
• Vender en mercados orgánicos
• Precio: 3-4x valor del aguacate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌱 USOS AGRÍCOLAS Y DOMÉSTICOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HUERTO CASERO:
• Germinar hueso (planta ornamental)
• Abono orgánico (cáscara + pulpa)
• Compost acelerado (alto en nutrientes)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 ANÁLISIS FINANCIERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PÉRDIDA TOTAL:
3 aguacates × $0.50 = $1.50 perdidos

ESCENARIOS DE RESCATE:
✅ Venta 50% descuento: $0.75 (50% salvado)
✅ Guacamole preparado: $3.50 (230% ganancia)
✅ Crema cosmética: $5.00 (330% ganancia)
✅ Venta a restaurante: $1.00 (65% + cliente fijo)

💡 MEJOR OPCIÓN: Guacamole en porciones
⏰ VENTANA: 6 horas máximo`
    },
    
    "Manzana": {
        "Maduración baja": "Manzana fresca y crujiente en su mejor momento.\n\nIdeal para:\n• Consumo fresco y natural\n• Ensaladas de frutas\n• Snack saludable\n• Rebanadas con mantequilla de maní\n• Ensaladas verdes\n\nTip: Guárdala en el refrigerador para que dure más tiempo",
        
        "Maduración avanzada": `MOMENTO IDEAL PARA PROCESAR Y AGREGAR VALOR
La manzana empieza a perder firmeza pero mantiene todo su sabor. Aprovecha estos 8 días estratégicamente.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 ESTRATEGIAS DE VENTA Y PROCESAMIENTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 REPOSICIONAMIENTO DE PRODUCTO:
• No vender como "manzana fresca premium"
• Promocionar: "Perfectas para hornear y cocinar"
• Cartel: "Manzanas dulces para pay y postres"
• Muestras de compota casera (genera interés)
• Agrupar con canela y azúcar (kit para postre)

💵 TÁCTICAS COMERCIALES:
• Descuento moderado: 20-30% (no drastico)
• Combo repostería: "Manzanas + canela + azúcar"
• Venta por kilo: Más atractivo que por unidad
• Ofrecer a panaderías y pastelerías

👥 NICHOS DE MERCADO:
• Panaderías artesanales (pays, tartas)
• Productoras de mermeladas caseras
• Madres con bebés (papillas y compotas)
• Escuelas (colaciones saludables procesadas)
• Restaurantes (postres, guarniciones)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍳 RECETAS Y TRANSFORMACIÓN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REPOSTERÍA TRADICIONAL:
• Pay de manzana clásico
• Tarta de manzana con crumble
• Muffins de manzana y canela
• Strudel de manzana (pastelería europea)
• Panqueques con manzana caramelizada
• Galletas con trozos de manzana

POSTRES Y DULCES:
• Manzanas horneadas rellenas (nueces, pasas)
• Compota de manzana casera
• Puré de manzana (sin azúcar agregada)
• Manzanas caramelizadas (dulce de feria)
• Chips de manzana horneados (snack crujiente)

BEBIDAS Y JUGOS:
• Jugo natural de manzana
• Sidra de manzana casera (fermentada)
• Té de manzana con canela
• Smoothie de manzana verde
• Agua de manzana con especias

CONSERVAS Y PROCESADOS:
• Mermelada de manzana
• Jalea de manzana (más refinada)
• Manzana en almíbar (conserva 6 meses)
• Vinagre de manzana casero (probiótico)
• Deshidratada en rodajas (snack premium)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 MÉTODOS DE CONSERVACIÓN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REFRIGERACIÓN ADECUADA (+2-3 semanas):
• Lavar y secar completamente
• Guardar en cajón de verduras
• Envolver en papel periódico individual
• Separar manzanas golpeadas

COCCIÓN Y CONSERVA:
• Hacer compota y envasar caliente
• Esterilizar frascos en agua hirviendo
• Duración: 3-4 meses en frasco cerrado
• Una vez abierto: 2 semanas refrigerado

CONGELACIÓN:
• Pelar, quitar corazón, cortar en cubos
• Rociar con limón (evita oxidación)
• Congelar en bolsas herméticas
• Duración: 10-12 meses
• Usar directo para pays y compotas

DESHIDRATACIÓN:
• Cortar en rodajas finas (3-4mm)
• Deshidratar 6-8 horas a 60°C
• Chips crujientes, duran 6 meses
• Producto gourmet: Precio 4-5x superior

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 CONTACTOS COMERCIALES ÚTILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Panaderías (ingrediente para repostería)
• Guarderías/escuelas (colaciones procesadas)
• Productoras artesanales (mermeladas, conservas)
• Mercados orgánicos (productos transformados)
• Cafeterías (postres caseros del día)`,
        
        "Maduración muy avanzada": `⚠️ TRANSFORMAR O PROCESAR INMEDIATAMENTE
La manzana está blanda pero aún útil para cocción. Actúa en las próximas 48 horas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 ESTRATEGIAS DE APROVECHAMIENTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 VENTA ECONÓMICA DIRIGIDA:
• Descuento 50%: "Manzanas para cocinar - HOY"
• Venta por lote: "Todo el cajón $X"
• Dirigir a productores: "Especial para mermelada"
• Cartel honesto: "Perfectas para compota y jugos"

📞 CONTACTOS INMEDIATOS:
• Productoras de mermeladas y conservas
• Panaderías industriales (volumen)
• Comedores escolares (compotas, postres)
• Granjas (alimentación animal si necesario)
• Productores de vinagre artesanal

🎯 AUTO-PROCESAMIENTO:
• Hacer compota hoy, vender mañana
• Mermelada casera (producto premium)
• Jugo natural embotellado
• Vinagre de manzana (proceso largo pero rentable)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍳 RECETAS DE RESCATE TOTAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROCESAMIENTO RÁPIDO (1-2 horas):
• Compota de manzana en olla exprés (30 min)
• Puré de manzana para bebés (mercado nicho)
• Salsa de manzana para carnes (gourmet)
• Jugo de manzana natural (extractor)
• Manzana cocida para rellenos

REPOSTERÍA DE APROVECHAMIENTO:
• Pay de manzana (hornear hoy, vender mañana)
• Muffins en cantidad (venta por docena)
• Queque húmedo de manzana
• Budín de pan con manzana
• Galletas rellenas de compota

CONSERVAS DURADERAS:
• Mermelada de manzana con canela
• Jalea clarificada (producto gourmet)
• Manzana en almíbar (conserva 6+ meses)
• Chutney de manzana (acompañamiento exótico)

FERMENTACIÓN:
• Vinagre de manzana madre (8 semanas)
• Sidra fermentada casera
• Tepache de manzana (bebida probiótica)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 CONSERVACIÓN DE EMERGENCIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COCCIÓN INMEDIATA:
• Hacer compota en cantidad grande
• Envasar caliente en frascos esterilizados
• Llenar hasta el borde (sacar burbujas aire)
• Sellar herméticamente mientras está caliente
• Duración: 3-4 meses cerrado, 2 semanas abierto

CONGELACIÓN PROCESADA:
• Pelar todo, quitar partes muy blandas
• Cocinar ligeramente con limón y canela
• Enfriar completamente
• Congelar en porciones de 500g
• Duración: 12 meses congelado

DESHIDRATACIÓN TOTAL:
• Cortar en rodajas finas
• Remojar en agua con limón (anti-oxidante)
• Deshidratar 8-10 horas
• Resultado: Chips crujientes premium
• Precio de venta: 5-6x costo manzana fresca

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 USOS ALTERNATIVOS CREATIVOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COSMÉTICA Y CUIDADO PERSONAL:
• Mascarilla facial rejuvenecedora
• Tónico astringente (jugo de manzana)
• Exfoliante corporal (puré + azúcar)
• Vinagre capilar (brillo y suavidad)

LIMPIEZA DOMÉSTICA:
• Vinagre de manzana (limpiador multiusos)
• Ambientador natural (cáscara + canela)
• Pulidor de vidrios (vinagre diluido)

USOS AGRÍCOLAS:
• Compost de alta calidad (rico en nutrientes)
• Alimento para ganado menor (cerdos, cabras)
• Fertilizante líquido (macerado en agua)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 EVALUACIÓN ECONÓMICA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PÉRDIDA TOTAL:
10kg manzanas × $2.00/kg = $20.00 perdidos

ALTERNATIVAS DE RESCATE:
✅ Venta 50% descuento: $10.00 (50% recuperado)
✅ Compota casera: $35.00 (175% ganancia)
✅ Mermelada premium: $45.00 (225% ganancia)
✅ Chips deshidratados: $60.00 (300% ganancia - requiere equipo)
✅ Vinagre artesanal: $40.00 (200% - proceso 8 semanas)

💡 MEJOR OPCIÓN INMEDIATA: Compota/mermelada
⏰ TIEMPO CRÍTICO: 48 horas máximo`
    },
    
    "Lechuga": {
        "Maduración baja": "Lechuga fresca y crujiente, perfecta para ensaladas.\n\nIdeal para:\n• Ensalada verde clásica\n• Base para tacos o wraps\n• Acompañamiento de hamburguesas\n• Ensalada César\n• Rollitos frescos\n\nTip: Guárdala en el refrigerador envuelta en papel húmedo",
        
        "Maduración avanzada": `CONSUMIR HOY - TRANSFORMAR ANTES QUE SE MARCHITE
La lechuga empieza a perder frescura pero aún es aprovechable. Actúa en estas 3 horas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 ESTRATEGIAS DE VENTA INMEDIATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 TÁCTICAS DE EXHIBICIÓN:
• Rociar ligeramente con agua (recupera frescura)
• Quitar hojas externas marchitas (presentación)
• Exhibir en lugares frescos y sombra
• Cartel: "Lechuga fresca para COCINAR hoy"
• No apilar demasiado (se aplasta)

💵 LIQUIDACIÓN RÁPIDA:
• Descuento 30-40%: Precio atractivo inmediato
• Combo: "Lechuga + tomate + cebolla = $X"
• Venta urgente a restaurantes (llamar)
• Ofrecer a vecinos conocidos (WhatsApp grupal)

👥 CLIENTES DE EMERGENCIA:
• Restaurantes de comida rápida (hamburguesas)
• Fondas y comedores (ensaladas)
• Taquerías (guarnición)
• Vendedores de sánduches
• Juguerías (batidos verdes)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍳 USOS CULINARIOS INMEDIATOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONSUMO FRESCO (Hojas firmes):
• Ensalada verde simple (usar hojas internas)
• Wraps vegetales (las hojas más grandes)
• Guarnición para tacos
• Acompañamiento hamburguesas/sánduches

PREPARACIONES COCIDAS:
• Lechuga salteada con ajo (estilo asiático)
• Sopa de verduras verdes
• Crema de lechuga (sopa caliente)
• Lechuga braseada (guarnición gourmet)

BEBIDAS VERDES:
• Batido verde detox (lechuga + frutas)
• Jugo verde energético
• Smoothie depurativo
• Agua de lechuga (relajante natural)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 CONSERVACIÓN TÁCTICA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REVITALIZACIÓN (Gana 6-12 horas):
• Sumergir en agua fría 10-15 minutos
• Secar completamente con papel absorbente
• Envolver en toalla húmeda
• Refrigerar inmediatamente

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 CONTACTOS URGENTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Taquerías y comida rápida (compran diario)
• Juguerías (batidos verdes)
• Restaurantes económicos
• Comedores comunitarios`,
        
        "Maduración muy avanzada": `⚠️ ÚLTIMA OPORTUNIDAD - PROCESAR AHORA
La lechuga está muy marchita. Solo sirve para procesamiento inmediato o descarte responsable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 OPCIONES FINALES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 INTENTOS DE VENTA (1 hora):
• Descuento extremo: 70-80%
• "Lechuga para cocinar - $0.25"
• Ofrecer gratis con otra compra
• Última llamada a restaurantes

📞 CONTACTOS DE RESCATE:
• Comedores populares (donación)
• Granjas cercanas (alimentación animal)
• Composteras comunitarias
• Vecinos con gallinas/conejos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍳 PROCESAMIENTO DE EMERGENCIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COCCIÓN INMEDIATA:
• Sopa de verduras (licuada)
• Crema verde (lechuga + papa + caldo)
• Batido verde (licuada no se nota textura)
• Caldo de vegetales (base de cocina)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 USOS ALTERNATIVOS FINALES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPOST DE CALIDAD:
• Picar y mezclar con tierra
• Excelente para huertos (verde rico en nitrógeno)
• Compost listo en 3-4 semanas
• Vender como abono orgánico

ALIMENTACIÓN ANIMAL:
• Alimento para conejos (muy nutritivo)
• Complemento para gallinas (picada)
• Cabras y ovejas (alimento fresco)
• Vender a granjeros locales

IMPORTANTE: Descarta si tiene mal olor o moho

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 REALIDAD ECONÓMICA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PÉRDIDA TOTAL:
5 lechugas × $0.50 = $2.50 perdidos

RESCATE POSIBLE:
✅ Venta extrema: $0.50 (20% recuperado)
✅ Donación: $0 + beneficio comunitario
✅ Compost: $1.00 (venta como abono)
✅ Alimentación animal: $0.75 (30% recuperado)

⚠️ ACEPTAR: Pérdida inevitable si no hay demanda
💡 APRENDER: Comprar menos lechuga, rota más rápido`
    }
};