// ========== LÓGICA DE PÁGINA DE REGISTRO ==========

// Emojis por producto
const EMOJIS_PRODUCTOS = {
    'Plátano': '🍌',
    'Tomate': '🍅',
    'Aguacate': '🥑',
    'Manzana': '🍎',
    'Lechuga': '🥬'
};

// Variable global para el producto en edición
let productoEnEdicion = null;

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
    const proximoEstado = calcularDiasProximoEstado(producto);
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
    
    // HTML para próximo estado
    let proximoEstadoHTML = '';
    if (proximoEstado) {
        proximoEstadoHTML = `
            <div class="proximo-estado-info">
                <div class="dias-proximo">⏱️ Quedan ${proximoEstado.diasHasta} días</div>
                <div class="siguiente-estado">→ Próximo estado: ${proximoEstado.siguienteEstado}</div>
            </div>
        `;
    } else {
        proximoEstadoHTML = `
            <div class="proximo-estado-info estado-final">
                <div class="dias-proximo critico">⏱️ ¡Consumir hoy!</div>
                <div class="siguiente-estado">→ Estado final: -----</div>
            </div>
        `;
    }
    
    return `
        <div class="producto-card-nuevo">
            <div class="producto-header-flex">
                <span class="producto-emoji-icon">${emoji}</span>
                <div class="producto-info-box">
                    <div class="producto-name-styled">${producto.producto}</div>
                    <div class="producto-date-styled">${fechaFormateada}</div>
                </div>
                <div class="producto-actions">
                    <button class="btn-editar-nuevo" onclick="abrirEdicion(${producto.id})" title="Editar">
                        ✏️
                    </button>
                    <button class="btn-eliminar-nuevo" onclick="confirmarEliminar(${producto.id})" title="Eliminar">
                        🗑️
                    </button>
                </div>
            </div>
            
            <span class="status-badge-nuevo ${estadoClass}">
                <span class="status-indicator-dot"></span>
                ${estadoTexto}
            </span>
            
            ${proximoEstadoHTML}
            
            <button class="btn-ver-guia" onclick="verGuiaProducto('${producto.producto}', '${producto.estado}')">
                📖 Ver Guía de Tratamiento
            </button>
        </div>
    `;
}

// Abrir modal de edición
function abrirEdicion(id) {
    const productos = obtenerProductos();
    const producto = productos.find(p => p.id === id);
    
    if (!producto) return;
    
    productoEnEdicion = producto;
    
    // Crear modal de edición
    const modalHTML = `
        <div class="modal-overlay" id="modal-edicion" onclick="cerrarEdicion(event)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <h3>Editar Producto</h3>
                
                <div class="form-group">
                    <label>Producto:</label>
                    <select id="edit-producto">
                        <option value="Plátano" ${producto.producto === 'Plátano' ? 'selected' : ''}>🍌 Plátano</option>
                        <option value="Tomate" ${producto.producto === 'Tomate' ? 'selected' : ''}>🍅 Tomate</option>
                        <option value="Aguacate" ${producto.producto === 'Aguacate' ? 'selected' : ''}>🥑 Aguacate</option>
                        <option value="Manzana" ${producto.producto === 'Manzana' ? 'selected' : ''}>🍎 Manzana</option>
                        <option value="Lechuga" ${producto.producto === 'Lechuga' ? 'selected' : ''}>🥬 Lechuga</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Estado:</label>
                    <select id="edit-estado">
                        <option value="Maduración baja" ${producto.estado === 'Maduración baja' ? 'selected' : ''}>Maduración baja</option>
                        <option value="Maduración avanzada" ${producto.estado === 'Maduración avanzada' ? 'selected' : ''}>Maduración avanzada</option>
                        <option value="Maduración muy avanzada" ${producto.estado === 'Maduración muy avanzada' ? 'selected' : ''}>Maduración muy avanzada</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Fecha de registro:</label>
                    <input type="date" id="edit-fecha" value="${producto.fechaRegistro.split('T')[0]}">
                </div>
                
                <div class="modal-buttons">
                    <button class="btn-guardar" onclick="guardarEdicion()">💾 Guardar</button>
                    <button class="btn-cancelar" onclick="cerrarEdicion()">❌ Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Guardar edición
function guardarEdicion() {
    if (!productoEnEdicion) return;
    
    const nuevoProducto = document.getElementById('edit-producto').value;
    const nuevoEstado = document.getElementById('edit-estado').value;
    const nuevaFecha = document.getElementById('edit-fecha').value;
    
    // Calcular nuevos días estimados
    const nuevosDiasEstimados = DIAS_PRODUCTO[nuevoProducto]?.[nuevoEstado] || 0;
    
    // Actualizar producto
    actualizarProducto(productoEnEdicion.id, {
        producto: nuevoProducto,
        estado: nuevoEstado,
        fechaRegistro: new Date(nuevaFecha).toISOString(),
        diasEstimados: nuevosDiasEstimados
    });
    
    cerrarEdicion();
    cargarProductos();
}

// Cerrar modal de edición
function cerrarEdicion(event) {
    if (event && event.target.className !== 'modal-overlay') return;
    
    const modal = document.getElementById('modal-edicion');
    if (modal) {
        modal.remove();
    }
    productoEnEdicion = null;
}

// Ver guía del producto
function verGuiaProducto(producto, estado) {
    const guiaTexto = GUIAS[producto]?.[estado] || 'Guía no disponible';
    
    const modalHTML = `
        <div class="modal-overlay" id="modal-guia" onclick="cerrarGuia(event)">
            <div class="modal-content modal-guia" onclick="event.stopPropagation()">
                <div class="guia-header-modal">
                    <h3>📖 Guía de Tratamiento</h3>
                    <h4>${producto} - ${estado}</h4>
                </div>
                <div class="guia-contenido-modal">
                    ${guiaTexto.split('\n\n').map(parrafo => `<p>${parrafo}</p>`).join('')}
                </div>
                <button class="btn-cerrar-guia" onclick="cerrarGuia()">Cerrar</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Cerrar modal de guía
function cerrarGuia(event) {
    if (event && event.target.className !== 'modal-overlay') return;
    
    const modal = document.getElementById('modal-guia');
    if (modal) {
        modal.remove();
    }
}

// Confirmar eliminación
function confirmarEliminar(id) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
        eliminarProducto(id);
        cargarProductos();
    }
}