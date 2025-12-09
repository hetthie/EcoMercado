// ========== LÓGICA DE PÁGINA DE REGISTRO ==========

// Emojis por producto
const EMOJIS_PRODUCTOS = {
    'Plátano': '🍌',
    'Tomate': '🍅',
    'Aguacate': '🥑',
    'Manzana': '🍎',
    'Lechuga': '🥬'
};

// Inicializar página de registro
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
});

// Cargar y mostrar productos
function cargarProductos() {
    const productos = obtenerProductos();
    const listaContainer = document.getElementById('productos-lista');
    const emptyState = document.getElementById('empty-state');
    
    if (productos.length === 0) {
        listaContainer.style.display = 'none';
        emptyState.style.display = 'block';
        actualizarContadores(0, 0, 0);
        return;
    }
    
    listaContainer.style.display = 'block';
    emptyState.style.display = 'none';
    
    // Ordenar por fecha (más recientes primero)
    productos.sort((a, b) => new Date(b.fechaRegistro) - new Date(a.fechaRegistro));
    
    // Calcular estadísticas
    const stats = calcularEstadisticas(productos);
    actualizarContadores(stats.aptos, stats.maduracion, stats.fuera);
    
    // Generar HTML
    listaContainer.innerHTML = productos.map(producto => crearTarjetaProducto(producto)).join('');
}

// Calcular estadísticas de productos
function calcularEstadisticas(productos) {
    let aptos = 0;
    let maduracion = 0;
    let fuera = 0;
    
    productos.forEach(producto => {
        const diasRestantes = calcularDiasRestantes(producto);
        
        if (diasRestantes === 0) {
            fuera++;
        } else if (diasRestantes <= 2) {
            maduracion++;
        } else {
            aptos++;
        }
    });
    
    return { aptos, maduracion, fuera };
}

// Actualizar contadores
function actualizarContadores(aptos, maduracion, fuera) {
    document.getElementById('count-aptos').textContent = aptos;
    document.getElementById('count-maduracion').textContent = maduracion;
    document.getElementById('count-fuera').textContent = fuera;
}

// Crear tarjeta de producto con nuevo diseño
function crearTarjetaProducto(producto) {
    const diasRestantes = calcularDiasRestantes(producto);
    const emoji = EMOJIS_PRODUCTOS[producto.producto] || '🍎';
    
    // Determinar estado y clase
    let estadoTexto, estadoClass;
    
    if (diasRestantes === 0) {
        estadoTexto = 'Fuera del rango de venta';
        estadoClass = 'status-fuera';
    } else if (diasRestantes <= 2) {
        estadoTexto = 'Maduración avanzada';
        estadoClass = 'status-maduracion-badge';
    } else {
        estadoTexto = 'Aptos para la venta';
        estadoClass = 'status-aptos';
    }
    
    // Formatear fecha
    const fecha = new Date(producto.fechaRegistro);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
    });
    
    return `
        <div class="producto-card-nuevo">
            <div class="producto-header-flex">
                <span class="producto-emoji-icon">${emoji}</span>
                <div class="producto-info-box">
                    <div class="producto-name-styled">${producto.producto}</div>
                    <div class="producto-date-styled">${fechaFormateada}</div>
                </div>
                <button class="btn-eliminar-nuevo" onclick="confirmarEliminar(${producto.id})" title="Eliminar">
                    🗑️
                </button>
            </div>
            <span class="status-badge-nuevo ${estadoClass}">
                <span class="status-indicator-dot"></span>
                ${estadoTexto}
            </span>
        </div>
    `;
}

// Confirmar eliminación
function confirmarEliminar(id) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
        eliminarProducto(id);
        cargarProductos();
    }
}