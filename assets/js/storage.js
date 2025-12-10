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
    
    // Resetear alertas porque hay cambios en inventario
    if (typeof resetearAlertasVistas === 'function') {
        resetearAlertasVistas();
    }
    
    return nuevoProducto;
}

// Actualizar producto existente
function actualizarProducto(id, datosActualizados) {
    let productos = obtenerProductos();
    const index = productos.findIndex(p => p.id === id);
    
    if (index !== -1) {
        productos[index] = {
            ...productos[index],
            ...datosActualizados
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
        
        // Resetear alertas porque hubo actualización
        if (typeof resetearAlertasVistas === 'function') {
            resetearAlertasVistas();
        }
        
        return productos[index];
    }
    
    return null;
}

// Eliminar producto por ID
function eliminarProducto(id) {
    let productos = obtenerProductos();
    productos = productos.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
    
    // Resetear alertas porque se eliminó un producto
    if (typeof resetearAlertasVistas === 'function') {
        resetearAlertasVistas();
    }
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

// Calcular días hasta el siguiente estado
function calcularDiasProximoEstado(producto) {
    const estadosOrden = ['Maduración baja', 'Maduración avanzada', 'Maduración muy avanzada'];
    const estadoActualIndex = estadosOrden.indexOf(producto.estado);
    
    // Si es el último estado o no se encuentra
    if (estadoActualIndex === -1 || estadoActualIndex === estadosOrden.length - 1) {
        return null;
    }
    
    // Obtener siguiente estado
    const siguienteEstado = estadosOrden[estadoActualIndex + 1];
    
    // Días restantes del estado actual = días hasta el siguiente estado
    const diasRestantes = calcularDiasRestantes(producto);
    
    return {
        siguienteEstado: siguienteEstado,
        diasHasta: diasRestantes
    };
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