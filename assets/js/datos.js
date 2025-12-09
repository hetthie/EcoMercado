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
        
        "Maduración avanzada": "¡Momento perfecto para consumir! El plátano está en su punto ideal.\n\nSi no lo usarás pronto, puedes:\n• Hacer pan de plátano casero\n• Congelarlo en rodajas para batidos\n• Preparar plátanos maduros fritos\n• Agregarlo a panqueques o avena\n• Hacer nice cream (helado saludable)",
        
        "Maduración muy avanzada": "Úsalo HOY. Está sobremaduro pero perfecto para recetas.\n\nIdeal para:\n• Pan de plátano (será más dulce)\n• Batido con leche y canela\n• Puré para panqueques o waffles\n• Muffins de plátano\n• Congelarlo para uso posterior"
    },
    
    "Tomate": {
        "Maduración baja": "El tomate aún está verde y no ha madurado completamente.\n\nRecomendaciones:\n• Déjalo madurar a temperatura ambiente\n• NO lo refrigeres (pierde sabor y textura)\n• Colócalo en una ventana con luz indirecta\n• Espera 3-5 días hasta que tome color rojo",
        
        "Maduración avanzada": "¡Momento ideal para ensaladas y consumo fresco!\n\nSi te sobra, puedes:\n• Preparar salsa de tomate casera\n• Hacer tomate frito para conservar\n• Preparar gazpacho o sopa fría\n• Tomates asados al horno\n• Bruschetta italiana",
        
        "Maduración muy avanzada": "Úsalo inmediatamente antes que se eche a perder.\n\nMejor para cocinar:\n• Salsa para pasta (concentra el sabor)\n• Tomate triturado en conserva\n• Sopa de tomate casera\n• Sofrito para guisos\n• Jugo de tomate"
    },
    
    "Aguacate": {
        "Maduración baja": "El aguacate está muy duro y necesita madurar.\n\nRecomendaciones:\n• Guárdalo a temperatura ambiente (3-5 días)\n• Para acelerar: mételo en bolsa de papel con manzana\n• NO lo refrigeres mientras esté duro\n• Sabrás que está listo cuando ceda ligeramente al presionar",
        
        "Maduración avanzada": "¡Perfecto! Momento ideal para consumir.\n\nPuedes preparar:\n• Guacamole clásico\n• Tostadas con aguacate\n• Ensaladas frescas\n• Smoothie verde\n• Relleno para tacos o burritos\n\nTip: Si solo usas la mitad, deja el hueso en la otra mitad y cúbrela con film transparente",
        
        "Maduración muy avanzada": "Úsalo HOY antes que se oxide completamente.\n\nOpciones:\n• Batido verde (licuado no se nota el color)\n• Crema de aguacate para pasta\n• Aderezo cremoso para ensaladas\n• Mascarilla facial hidratante (uso alternativo)\n• Congelarlo en puré con limón"
    },
    
    "Manzana": {
        "Maduración baja": "Manzana fresca y crujiente en su mejor momento.\n\nIdeal para:\n• Consumo fresco y natural\n• Ensaladas de frutas\n• Snack saludable\n• Rebanadas con mantequilla de maní\n• Ensaladas verdes\n\nTip: Guárdala en el refrigerador para que dure más tiempo",
        
        "Maduración avanzada": "Aún es comestible pero empieza a perder firmeza.\n\nConsidera preparar:\n• Compota de manzana casera\n• Jugo natural de manzana\n• Manzana horneada con canela\n• Pay o tarta de manzana\n• Puré de manzana para bebés",
        
        "Maduración muy avanzada": "Cocínala pronto o procésala.\n\nMejor para:\n• Puré de manzana (dulce natural)\n• Relleno para pasteles o crepas\n• Jugo fermentado (sidra casera)\n• Vinagre de manzana casero\n• Chips de manzana deshidratada"
    },
    
    "Lechuga": {
        "Maduración baja": "Lechuga fresca y crujiente, perfecta para ensaladas.\n\nIdeal para:\n• Ensalada verde clásica\n• Base para tacos o wraps\n• Acompañamiento de hamburguesas\n• Ensalada César\n• Rollitos frescos\n\nTip: Guárdala en el refrigerador envuelta en papel húmedo",
        
        "Maduración avanzada": "Consúmela hoy, está empezando a marchitarse.\n\nOpciones:\n• Ensalada verde (usar hojas más firmes)\n• Wraps vegetales\n• Batido verde detox\n• Salteada rápidamente\n• Sopa de verduras",
        
        "Maduración muy avanzada": "Última oportunidad de uso.\n\nSolo sirve para:\n• Batido verde (licuada no se nota la textura)\n• Sopa de verduras cocida\n• Caldo de vegetales\n• Compost (si está muy deteriorada)\n\nImportante: Descarta si tiene mal olor o moho"
    }
};