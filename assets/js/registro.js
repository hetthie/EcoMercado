// ========== LÓGICA DE PÁGINA DE REGISTRO ==========

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
        return;
    }
    
    listaContainer.style.display = 'block';
    emptyState.style.display = 'none';
    
    // Ordenar por fecha (más recientes primero)
    productos.sort((a, b) => new Date(b.fechaRegistro) - new Date(a.fechaRegistro));
    
    // Generar HTML
    listaContainer.innerHTML = productos.map(producto => crearTarjetaProducto(producto)).join('');
}

// Crear tarjeta de producto
function crearTarjetaProducto(producto) {
    const diasRestantes = calcularDiasRestantes(producto);
    const diasTranscurridos = calcularDiasTranscurridos(producto.fechaRegistro);
    const alerta = requiereAlerta(producto);
    
    // Determinar clase de alerta
    let alertaClass = '';
    let alertaHTML = '';
    
    if (alerta) {
        alertaClass = alerta.nivel === 'critico' ? 'producto-critico' : 'producto-advertencia';
        alertaHTML = `<div class="alerta-badge ${alerta.nivel}">${alerta.mensaje}</div>`;
    }
    
    // Formatear fecha
    const fecha = new Date(producto.fechaRegistro);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
    });
    
    return `
        <div class="producto-card ${alertaClass}">
            ${alertaHTML}
            
            <div class="producto-header">
                <h3>${producto.producto}</h3>
                <button class="btn-eliminar" onclick="confirmarEliminar(${producto.id})" title="Eliminar">
                    🗑️
                </button>
            </div>
            
            <div class="producto-info">
                <div class="info-row">
                    <span class="info-label">Estado:</span>
                    <span class="info-value">${producto.estado}</span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">Registrado:</span>
                    <span class="info-value">${fechaFormateada}</span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">Días transcurridos:</span>
                    <span class="info-value">${diasTranscurridos} días</span>
                </div>
                
                <div class="info-row destacado">
                    <span class="info-label">⏱️ Días restantes:</span>
                    <span class="info-value dias-restantes">${diasRestantes} días</span>
                </div>
            </div>
            
            <div class="producto-footer">
                <span class="confianza-badge">${producto.confianza}% confianza</span>
            </div>
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