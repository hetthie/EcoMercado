# 🍎 Analizador de Alimentos con IA

Aplicación web que usa Gemini AI para analizar el estado de maduración de frutas y verduras.

## 📋 Características

- ✅ Captura de fotos con cámara del dispositivo
- ✅ Análisis de productos con Gemini 2.5 Pro
- ✅ Detección de estado de maduración
- ✅ Diseño responsive (móvil first)
- ✅ API key segura en backend serverless

## 🚀 Instalación Local

### 1. Clonar repositorio
```bash
git clone https://github.com/tu-usuario/proyecto-analisis-alimentos.git
cd proyecto-analisis-alimentos
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar API key
Edita el archivo `.env.local` y reemplaza:
```
GEMINI_API_KEY=TU_API_KEY_AQUI
```

### 4. Ejecutar en desarrollo
```bash
npm run dev
```

Abre: http://localhost:3000

## 📦 Deploy en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. **Sube tu proyecto a GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Conecta con Vercel**
- Ve a https://vercel.com
- Click en "Add New Project"
- Importa tu repositorio de GitHub
- Vercel detectará automáticamente la configuración

3. **Configura la variable de entorno**
- En Vercel, ve a tu proyecto
- Settings → Environment Variables
- Agrega:
  - Name: `GEMINI_API_KEY`
  - Value: Tu API key de Gemini
  - Environments: Production, Preview, Development

4. **Deploy**
- Click en "Deploy"
- ¡Listo! Tu app estará en: `https://tu-proyecto.vercel.app`

### Opción 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variable de entorno
vercel env add GEMINI_API_KEY
```

## 🔧 Estructura del Proyecto

```
proyecto-analisis-alimentos/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos
│   └── js/
│       ├── camera.js       # Lógica de cámara
│       ├── api.js          # Cliente API
│       └── ui.js           # Interfaz de usuario
├── api/
│   └── analyze.js          # Serverless function
├── .env.local              # Variables de entorno (NO subir)
├── .gitignore              # Archivos a ignorar
├── vercel.json             # Configuración de Vercel
└── package.json            # Dependencias
```

## 🔒 Seguridad

- ⚠️ **NUNCA** subas el archivo `.env.local` a Git
- ⚠️ **NUNCA** pongas tu API key directamente en el código
- ✅ Usa variables de entorno en Vercel para producción

## 📱 Productos Soportados

1. Plátano
2. Tomate
3. Aguacate
4. Manzana
5. Lechuga

## 🐛 Troubleshooting

### Error 403 - API Key filtrada
- Genera una nueva API key
- Configúrala en Vercel como variable de entorno
- NO la pongas en el código

### Error 429 - Límite excedido
- Espera 1 minuto antes de hacer otra petición
- Límite: 2 requests/minuto, 50 requests/día

### La cámara no funciona
- Asegúrate de dar permisos a la cámara
- Verifica que estés usando HTTPS (requerido para cámara)

## 📄 Licencia

MIT