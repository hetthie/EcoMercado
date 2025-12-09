// ========== GESTIÓN DE LOCALSTORAGE ==========

const STORAGE_KEY = 'ecomercado_productos';

// Obtener todos los productos
function obtenerProductos() {
    const productos = localStorage.getItem(STORAGE_KEY);
    return productos ? JSON.parse(productos) : [];
}

// Guardar producto
function guardarProducto(producto) {
    const productos = obtenerProductos();
    
    // Agregar ID único y fecha actual
    const nuevoProducto = {
        id: Date.now(),
        ...producto,
        fechaRegistro: new Date().toISOString()
    };
    
    productos.push(nuevoProducto);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
    
    return nuevoProducto;
}

// Eliminar producto por ID
function eliminarProducto(id) {
    let productos = obtenerProductos();
    productos = productos.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
}

// Calcular días transcurridos desde el registro
function calcularDiasTranscurridos(fechaRegistro) {
    const ahora = new Date();
    const fecha = new Date(fechaRegistro);
    const diferencia = ahora - fecha;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24));
}

// Calcular días restantes
function calcularDiasRestantes(producto) {
    const diasEstimados = producto.diasEstimados || 0;
    const diasTranscurridos = calcularDiasTranscurridos(producto.fechaRegistro);
    const diasRestantes = diasEstimados - diasTranscurridos;
    return Math.max(0, diasRestantes);
}

// Verificar si producto requiere alerta
function requiereAlerta(producto) {
    const diasRestantes = calcularDiasRestantes(producto);
    
    if (diasRestantes === 0) {
        return { nivel: 'critico', mensaje: '¡Último día!' };
    } else if (diasRestantes <= 2) {
        return { nivel: 'advertencia', mensaje: `¡Quedan ${diasRestantes} días!` };
    }
    
    return null;
}