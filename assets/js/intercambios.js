// ========== SISTEMA DE INTERCAMBIOS ========== 

// Emojis por producto
const EMOJIS_PRODUCTOS_INTERCAMBIO = {
    'Plátano': '🍌',
    'Tomate': '🍅',
    'Aguacate': '🥑',
    'Manzana': '🍎',
    'Lechuga': '🥬'
};

// Usuarios simulados con productos
const USUARIOS_SIMULADOS = [
    {
        id: 1,
        nombre: "Ana Martínez",
        telefono: "+593 99 234 5678",
        productos: [
            { nombre: "Plátano", estado: "Maduración avanzada", dias: 2 },
            { nombre: "Tomate", estado: "Maduración baja", dias: 7 },
            { nombre: "Manzana", estado: "Maduración avanzada", dias: 3 },
            { nombre: "Aguacate", estado: "Maduración muy avanzada", dias: 1 },
            { nombre: "Lechuga", estado: "Maduración avanzada", dias: 2 }
        ]
    },
    {
        id: 2,
        nombre: "Carlos Rodríguez",
        telefono: "+593 98 765 4321",
        productos: [
            { nombre: "Tomate", estado: "Maduración muy avanzada", dias: 1 },
            { nombre: "Aguacate", estado: "Maduración avanzada", dias: 2 },
            { nombre: "Plátano", estado: "Maduración baja", dias: 5 },
            { nombre: "Manzana", estado: "Maduración muy avanzada", dias: 2 },
            { nombre: "Lechuga", estado: "Maduración muy avanzada", dias: 1 }
        ]
    },
    {
        id: 3,
        nombre: "Patricia Flores",
        telefono: "+593 99 876 5432",
        productos: [
            { nombre: "Plátano", estado: "Maduración muy avanzada", dias: 1 },
            { nombre: "Tomate", estado: "Maduración avanzada", dias: 3 },
            { nombre: "Manzana", estado: "Maduración avanzada", dias: 4 },
            { nombre: "Aguacate", estado: "Maduración baja", dias: 6 },
            { nombre: "Lechuga", estado: "Maduración avanzada", dias: 3 }
        ]
    },
    {
        id: 4,
        nombre: "Miguel Torres",
        telefono: "+593 98 543 2109",
        productos: [
            { nombre: "Aguacate", estado: "Maduración avanzada", dias: 2 },
            { nombre: "Lechuga", estado: "Maduración muy avanzada", dias: 1 },
            { nombre: "Plátano", estado: "Maduración avanzada", dias: 3 },
            { nombre: "Tomate", estado: "Maduración baja", dias: 8 },
            { nombre: "Manzana", estado: "Maduración baja", dias: 6 }
        ]
    }
];

// Verificar si el servicio está habilitado
function verificarServicioHabilitado() {
    const perfil = localStorage.getItem('ecomercado_usuario');
    if (!perfil) return false;
    
    const perfilData = JSON.parse(perfil);
    return perfilData.intercambioHabilitado || false;
}

// Renderizar contenido principal
function renderizarContenido() {
    const contenedor = document.getElementById('contenido-intercambios');
    
    if (!verificarServicioHabilitado()) {
        contenedor.innerHTML = `
            <div class="servicio-deshabilitado">
                <div class="servicio-deshabilitado-icon">🔒</div>
                <h2>Servicio no habilitado</h2>
                <p>Para acceder a los intercambios, debes habilitar el servicio en tu perfil.</p>
                <button class="btn-habilitar-servicio" onclick="window.location.href='perfil.html'">
                    ⚙️ Ir a Mi Perfil
                </button>
            </div>
        `;
        return;
    }
    
    // Mostrar lista de usuarios
    renderizarListaUsuarios();
}

// Renderizar lista de usuarios
function renderizarListaUsuarios() {
    const contenedor = document.getElementById('contenido-intercambios');
    
    const usuariosHTML = USUARIOS_SIMULADOS.map(usuario => {
        const productosHTML = usuario.productos.map(producto => {
            const emoji = EMOJIS_PRODUCTOS_INTERCAMBIO[producto.nombre] || '🍎';
            const estadoClass = obtenerClaseEstado(producto.estado);
            
            return `
                <div class="producto-item">
                    <div class="producto-nombre-emoji">
                        <span class="producto-emoji">${emoji}</span>
                        <span class="producto-nombre-text">${producto.nombre}</span>
                    </div>
                    <div class="producto-estado-badge ${estadoClass}">
                        <span class="estado-punto"></span>
                        <span>${producto.dias}d</span>
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="usuario-card" onclick="abrirDetalleUsuario(${usuario.id})">
                <div class="usuario-header">
                    <div class="usuario-avatar">👤</div>
                    <div class="usuario-info">
                        <h3 class="usuario-nombre">${usuario.nombre}</h3>
                        <p class="usuario-productos-count">${usuario.productos.length} productos disponibles</p>
                    </div>
                </div>
                <div class="usuario-productos">
                    ${productosHTML}
                </div>
            </div>
        `;
    }).join('');
    
    contenedor.innerHTML = `
        <div class="usuarios-lista">
            ${usuariosHTML}
        </div>
    `;
}

// Obtener clase CSS según estado
function obtenerClaseEstado(estado) {
    if (estado === 'Maduración baja') return 'estado-baja-badge';
    if (estado === 'Maduración avanzada') return 'estado-avanzada-badge';
    if (estado === 'Maduración muy avanzada') return 'estado-muy-avanzada-badge';
    return 'estado-baja-badge';
}

// Abrir modal de detalle de usuario
function abrirDetalleUsuario(usuarioId) {
    const usuario = USUARIOS_SIMULADOS.find(u => u.id === usuarioId);
    if (!usuario) return;
    
    const productosHTML = usuario.productos.map(producto => {
        const emoji = EMOJIS_PRODUCTOS_INTERCAMBIO[producto.nombre] || '🍎';
        const estadoClass = obtenerClaseEstado(producto.estado);
        
        return `
            <div class="producto-item">
                <div class="producto-nombre-emoji">
                    <span class="producto-emoji">${emoji}</span>
                    <span class="producto-nombre-text">${producto.nombre}</span>
                </div>
                <div class="producto-estado-badge ${estadoClass}">
                    <span class="estado-punto"></span>
                    <span>${producto.estado}</span>
                </div>
            </div>
        `;
    }).join('');
    
    const modalHTML = `
        <div class="modal-usuario-content" onclick="event.stopPropagation()">
            <div class="modal-usuario-header">
                <div class="modal-usuario-avatar">👤</div>
                <h2 class="modal-usuario-nombre">${usuario.nombre}</h2>
            </div>
            
            <div class="modal-contacto-section">
                <div class="modal-contacto-label">📞 Contacto</div>
                <div class="modal-contacto-numero">
                    <span class="numero-texto">${usuario.telefono}</span>
                    <button class="btn-copiar-numero" onclick="copiarNumero('${usuario.telefono}')">
                        📋 Copiar
                    </button>
                </div>
            </div>
            
            <div class="modal-productos-section">
                <div class="modal-productos-title">
                    🍎 Productos disponibles
                </div>
                <div class="modal-productos-lista">
                    ${productosHTML}
                </div>
            </div>
            
            <div class="modal-buttons">
                <button class="btn-cerrar-modal" onclick="cerrarModal()">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    const modal = document.getElementById('modal-usuario');
    modal.innerHTML = modalHTML;
    modal.style.display = 'flex';
    modal.onclick = cerrarModal;
}

// Copiar número de teléfono
function copiarNumero(telefono) {
    navigator.clipboard.writeText(telefono).then(() => {
        mostrarToast('📋 Número copiado al portapapeles');
    }).catch(() => {
        // Fallback para navegadores que no soportan clipboard API
        const input = document.createElement('input');
        input.value = telefono;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        mostrarToast('📋 Número copiado al portapapeles');
    });
}

// Cerrar modal
function cerrarModal() {
    const modal = document.getElementById('modal-usuario');
    modal.style.display = 'none';
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
    }, 2500);
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', renderizarContenido);