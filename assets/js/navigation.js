// ========== NAVEGACIÓN ENTRE PÁGINAS ==========

// Ir a la página de cámara
function irACamara() {
    window.location.href = '/index.html';
}

// Ir a la página de registro
function irARegistro() {
    window.location.href = '/registro.html';
}

// Guardar producto y redirigir a registro
function guardarYRedirigir(producto) {
    guardarProducto(producto);
    irARegistro();
}

// Guardar datos temporales para pasar entre páginas (si es necesario)
function guardarDatosTemporales(key, datos) {
    sessionStorage.setItem(key, JSON.stringify(datos));
}

// Obtener datos temporales
function obtenerDatosTemporales(key) {
    const datos = sessionStorage.getItem(key);
    return datos ? JSON.parse(datos) : null;
}

// Limpiar datos temporales
function limpiarDatosTemporales(key) {
    sessionStorage.removeItem(key);
}