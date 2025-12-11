// ========== MIS INTERCAMBIOS ========== 

const STORAGE_KEY_PRODUCTOS = 'ecomercado_productos';
const STORAGE_KEY_MIS_INTERCAMBIOS = 'ecomercado_mis_intercambios';

// Emojis por producto
const EMOJIS = {
    'Plátano': '🍌',
    'Tomate': '🍅',
    'Aguacate': '🥑',
    'Manzana': '🍎',
    'Lechuga': '🥬'
};

// Productos seleccionados para intercambio
let productosSeleccionados = new Set();

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', function() {
    cargarIntercambiosGuardados(); // PRIMERO cargar guardados
    cargarProductosDisponibles();  // LUEGO renderizar
});

// Obtener productos desde LocalStorage
function obtenerProductos() {
    const productos = localStorage.getItem(STORAGE_KEY_PRODUCTOS);
    return productos ? JSON.parse(productos) : [];
}

// Obtener intercambios guardados
function obtenerIntercambiosGuardados() {
    const intercambios = localStorage.getItem(STORAGE_KEY_MIS_INTERCAMBIOS);
    if (!intercambios) {
        return { productosOfrecidos: [] };
    }
    
    try {
        return JSON.parse(intercambios);
    } catch (e) {
        console.error('Error al parsear intercambios:', e);
        return { productosOfrecidos: [] };
    }
}

// Cargar intercambios guardados y marcar checkboxes
function cargarIntercambiosGuardados() {
    const intercambios = obtenerIntercambiosGuardados();
    productosSeleccionados.clear();
    
    // Agregar todos los IDs guardados al Set
    intercambios.productosOfrecidos.forEach(productoId => {
        productosSeleccionados.add(Number(productoId)); // Asegurar que sea número
    });
    
    console.log('Productos cargados desde LocalStorage:', Array.from(productosSeleccionados));
}

// Cargar productos disponibles
function cargarProductosDisponibles() {
    const productos = obtenerProductos();
    const listaContainer = document.getElementById('productos-disponibles');
    const emptyState = document.getElementById('empty-state-mis-intercambios');
    
    if (productos.length === 0) {
        listaContainer.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    listaContainer.style.display = 'flex';
    emptyState.style.display = 'none';
    
    // Ordenar por fecha (más recientes primero)
    productos.sort((a, b) => new Date(b.fechaRegistro) - new Date(a.fechaRegistro));
    
    // Generar HTML
    listaContainer.innerHTML = productos.map(producto => crearItemProducto(producto)).join('');
}

// Crear item de producto
function crearItemProducto(producto) {
    const emoji = EMOJIS[producto.producto] || '🍎';
    const isSeleccionado = productosSeleccionados.has(producto.id);
    const diasRestantes = calcularDiasRestantes(producto);
    
    console.log(`Producto ${producto.id} (${producto.producto}): seleccionado=${isSeleccionado}`);
    
    return `
        <div class="producto-intercambio-item ${isSeleccionado ? 'seleccionado' : ''}" id="producto-${producto.id}">
            <div class="producto-checkbox-header" onclick="toggleProducto(${producto.id})">
                <div class="custom-checkbox ${isSeleccionado ? 'checked' : ''}" id="checkbox-${producto.id}"></div>
                <div class="producto-checkbox-info">
                    <div class="producto-checkbox-nombre">
                        <span>${emoji}</span>
                        <span>${producto.producto}</span>
                    </div>
                    <div class="producto-checkbox-estado">
                        ${producto.estado} • ${diasRestantes > 0 ? `${diasRestantes} días restantes` : 'Vencido'}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Calcular días restantes
function calcularDiasRestantes(producto) {
    const ahora = new Date();
    const fecha = new Date(producto.fechaRegistro);
    const diferencia = ahora - fecha;
    const diasTranscurridos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return Math.max(0, (producto.diasEstimados || 0) - diasTranscurridos);
}

// Toggle selección de producto
function toggleProducto(productoId) {
    const checkbox = document.getElementById(`checkbox-${productoId}`);
    const item = document.getElementById(`producto-${productoId}`);
    
    if (productosSeleccionados.has(productoId)) {
        productosSeleccionados.delete(productoId);
        checkbox.classList.remove('checked');
        item.classList.remove('seleccionado');
        console.log(`Producto ${productoId} DESMARCADO`);
    } else {
        productosSeleccionados.add(productoId);
        checkbox.classList.add('checked');
        item.classList.add('seleccionado');
        console.log(`Producto ${productoId} MARCADO`);
    }
    
    console.log('Estado actual:', Array.from(productosSeleccionados));
}

// Guardar intercambios
function guardarIntercambios() {
    const intercambios = {
        productosOfrecidos: Array.from(productosSeleccionados),
        fechaActualizacion: new Date().toISOString()
    };
    
    localStorage.setItem(STORAGE_KEY_MIS_INTERCAMBIOS, JSON.stringify(intercambios));
    
    console.log('Guardado en LocalStorage:', intercambios);
    
    mostrarToast('✅ Intercambios actualizados correctamente');
    
    setTimeout(() => {
        window.location.href = 'intercambios.html';
    }, 1500);
}

// Mostrar toast
function mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.className = 'toast-intercambio';
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2000);
}