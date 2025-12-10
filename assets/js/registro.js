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
    
    // Auto-eliminar productos vencidos hace más de 2 días
    const productosValidos = productos.filter(producto => {
        const diasRestantes = calcularDiasRestantes(producto);
        const diasVencido = Math.abs(diasRestantes);
        
        // Si está vencido hace más de 2 días, eliminar
        if (diasRestantes < 0 && diasVencido > 2) {
            eliminarProducto(producto.id);
            return false; // No incluir en lista
        }
        return true; // Mantener
    });
    
    if (productosValidos.length === 0) {
        listaContainer.style.display = 'none';
        emptyState.style.display = 'block';
        actualizarContadores(0, 0, 0);
        return;
    }
    
    listaContainer.style.display = 'block';
    emptyState.style.display = 'none';
    
    // Ordenar por fecha (más recientes primero)
    productosValidos.sort((a, b) => new Date(b.fechaRegistro) - new Date(a.fechaRegistro));
    
    // Calcular estadísticas
    const stats = calcularEstadisticas(productosValidos);
    actualizarContadores(stats.aptos, stats.maduracion, stats.fuera);
    
    // Generar HTML
    listaContainer.innerHTML = productosValidos.map(producto => crearTarjetaProducto(producto)).join('');
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
    
    // Verificar si está vencido
    const estaVencido = diasRestantes < 0;
    const diasVencido = Math.abs(diasRestantes);
    
    if (estaVencido) {
        // Producto vencido
        const diasParaEliminacion = 2 - diasVencido;
        estadoTexto = diasParaEliminacion > 0 
            ? `Vencido - Se eliminará en ${diasParaEliminacion} día${diasParaEliminacion > 1 ? 's' : ''}`
            : 'Vencido - Eliminación inminente';
        estadoClass = 'status-vencido';
    } else if (diasRestantes === 0) {
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
    
    // HTML para próximo estado o alerta de vencimiento
    let proximoEstadoHTML = '';
    if (estaVencido) {
        // Alerta de eliminación próxima
        const diasParaEliminacion = 2 - diasVencido;
        proximoEstadoHTML = `
            <div class="alerta-eliminacion">
                <div class="alerta-eliminacion-icon">⚠️</div>
                <div class="alerta-eliminacion-texto">
                    <strong>Producto vencido</strong>
                    <span>Se eliminará automáticamente ${diasParaEliminacion > 0 ? `en ${diasParaEliminacion} día${diasParaEliminacion > 1 ? 's' : ''}` : 'pronto'}</span>
                </div>
            </div>
        `;
    } else if (proximoEstado) {
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
        <div class="producto-card-nuevo ${estaVencido ? 'producto-vencido' : ''}">
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
            
            ${!estaVencido ? `
                <button class="btn-ver-guia" onclick="verGuiaProducto('${producto.producto}', '${producto.estado}')">
                    📖 Ver Guía de Tratamiento
                </button>
            ` : ''}
        </div>
    `;
}

// Abrir modal de edición
function abrirEdicion(id) {
    const productos = obtenerProductos();
    const producto = productos.find(p => p.id === id);
    
    if (!producto) return;
    
    productoEnEdicion = producto;
    
    // Calcular días transcurridos
    const diasTranscurridos = calcularDiasTranscurridos(producto.fechaRegistro);
    
    // Crear modal de edición
    const modalHTML = `
        <div class="modal-overlay" id="modal-edicion" onclick="cerrarEdicion(event)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <h3>Editar Producto</h3>
                
                <div class="info-readonly">
                    <div class="info-row">
                        <span class="info-label">Producto:</span>
                        <span class="info-value">${producto.producto}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Estado:</span>
                        <span class="info-value">${producto.estado}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Fecha de registro:</span>
                        <span class="info-value">${new Date(producto.fechaRegistro).toLocaleDateString('es-ES')}</span>
                    </div>
                </div>
                
                <div class="edit-separator"></div>
                
                <div class="form-group">
                    <label>Estimación (días totales):</label>
                    <div class="input-container-simple">
                        <input 
                            type="number" 
                            id="edit-dias-estimados" 
                            min="1" 
                            max="30" 
                            value="${producto.diasEstimados}"
                            class="input-dias-simple"
                        >
                        <span class="dias-suffix">días</span>
                    </div>
                </div>
                
                <div class="resultado-preview" id="preview-resultado">
                    <div class="preview-title">📊 Resultado:</div>
                    <div class="preview-item">
                        <span>• Días transcurridos:</span>
                        <strong>${diasTranscurridos} días</strong>
                    </div>
                    <div class="preview-item">
                        <span>• Días restantes:</span>
                        <strong id="preview-restantes">${Math.max(0, producto.diasEstimados - diasTranscurridos)} días</strong>
                    </div>
                    <div class="preview-item">
                        <span>• Madurará aproximadamente:</span>
                        <strong id="preview-fecha">${calcularFechaFutura(producto.fechaRegistro, producto.diasEstimados)}</strong>
                    </div>
                </div>
                
                <div class="modal-buttons">
                    <button class="btn-guardar" onclick="guardarEdicion()">💾 Guardar</button>
                    <button class="btn-cancelar" onclick="cerrarEdicion()">❌ Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Agregar listener para actualizar preview en tiempo real
    document.getElementById('edit-dias-estimados').addEventListener('input', actualizarPreview);
}

// Actualizar preview en tiempo real
function actualizarPreview() {
    if (!productoEnEdicion) return;
    
    const nuevosDiasEstimados = parseInt(document.getElementById('edit-dias-estimados').value) || 0;
    const diasTranscurridos = calcularDiasTranscurridos(productoEnEdicion.fechaRegistro);
    const diasRestantes = Math.max(0, nuevosDiasEstimados - diasTranscurridos);
    
    document.getElementById('preview-restantes').textContent = `${diasRestantes} días`;
    document.getElementById('preview-fecha').textContent = calcularFechaFutura(productoEnEdicion.fechaRegistro, nuevosDiasEstimados);
}

// Calcular fecha futura
function calcularFechaFutura(fechaRegistro, diasEstimados) {
    const fecha = new Date(fechaRegistro);
    fecha.setDate(fecha.getDate() + diasEstimados);
    return fecha.toLocaleDateString('es-ES', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
    });
}

// Guardar edición
function guardarEdicion() {
    if (!productoEnEdicion) return;
    
    const nuevosDiasEstimados = parseInt(document.getElementById('edit-dias-estimados').value);
    
    if (!nuevosDiasEstimados || nuevosDiasEstimados < 1) {
        alert('Por favor ingresa un número válido de días (mínimo 1)');
        return;
    }
    
    // Actualizar producto con nuevos días estimados
    actualizarProducto(productoEnEdicion.id, {
        diasEstimados: nuevosDiasEstimados
    });
    
    cerrarEdicion();
    cargarProductos();
    
    // Mostrar mensaje de confirmación
    mostrarMensajeExito('✅ Estimación actualizada correctamente');
}

// Mostrar mensaje de éxito
function mostrarMensajeExito(mensaje) {
    const toast = document.createElement('div');
    toast.className = 'toast-success';
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
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