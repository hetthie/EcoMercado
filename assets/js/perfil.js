// ========== GESTIÓN DE PERFIL DE USUARIO ==========

const PERFIL_STORAGE_KEY = 'ecomercado_usuario';

// Cargar datos del perfil al iniciar
document.addEventListener('DOMContentLoaded', function() {
    cargarPerfil();
});

// Cargar perfil desde LocalStorage
function cargarPerfil() {
    const perfil = obtenerPerfil();
    
    if (perfil) {
        document.getElementById('nombre').value = perfil.nombre || '';
        document.getElementById('telefono').value = perfil.telefono || '';
        document.getElementById('intercambio').checked = perfil.intercambioHabilitado || false;
    }
}

// Obtener perfil desde LocalStorage
function obtenerPerfil() {
    const perfil = localStorage.getItem(PERFIL_STORAGE_KEY);
    return perfil ? JSON.parse(perfil) : null;
}

// Guardar perfil
function guardarPerfil() {
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const intercambioHabilitado = document.getElementById('intercambio').checked;
    
    // Validaciones
    if (!nombre) {
        mostrarError('Por favor ingresa tu nombre');
        document.getElementById('nombre').focus();
        return;
    }
    
    if (!telefono) {
        mostrarError('Por favor ingresa tu teléfono de contacto');
        document.getElementById('telefono').focus();
        return;
    }
    
    // Crear objeto de perfil
    const perfil = {
        nombre: nombre,
        email: 'usuario@gmail.com', // Email quemado
        telefono: telefono,
        intercambioHabilitado: intercambioHabilitado,
        fechaActualizacion: new Date().toISOString()
    };
    
    // Guardar en LocalStorage
    localStorage.setItem(PERFIL_STORAGE_KEY, JSON.stringify(perfil));
    
    // Mostrar mensaje de éxito
    mostrarExito('✅ Perfil guardado correctamente');
    
    // Opcional: redirigir después de 1.5 segundos
    setTimeout(() => {
        window.location.href = '/index.html';
    }, 1500);
}

// Mostrar mensaje de éxito
function mostrarExito(mensaje) {
    const toast = document.createElement('div');
    toast.className = 'toast-perfil';
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2000);
}

// Mostrar mensaje de error
function mostrarError(mensaje) {
    alert('⚠️ ' + mensaje);
}

// Volver atrás
function volverAtras() {
    window.history.back();
}

// Función para ir al perfil (llamada desde index.html)
function irAPerfil() {
    window.location.href = '/perfil.html';
}