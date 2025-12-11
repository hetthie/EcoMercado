// ========== GESTIÓN DE PERFIL DE USUARIO ==========

const PERFIL_STORAGE_KEY = 'ecomercado_usuario';

// Cargar datos del perfil al iniciar
document.addEventListener('DOMContentLoaded', function() {
    cargarPerfil();
    configurarValidacionTiempoReal();
});

// Cargar perfil desde LocalStorage
function cargarPerfil() {
    const perfil = obtenerPerfil();
    
    if (perfil) {
        document.getElementById('nombre').value = perfil.nombre || '';
        document.getElementById('telefono').value = perfil.telefono || '';
        document.getElementById('intercambio').checked = perfil.intercambioHabilitado || false;
        
        // Mostrar aviso si el toggle está activado
        if (perfil.intercambioHabilitado) {
            document.getElementById('aviso-privacidad').style.display = 'block';
        }
    }
    
    // Validar estado inicial del toggle
    validarToggleIntercambio();
}

// Obtener perfil desde LocalStorage
function obtenerPerfil() {
    const perfil = localStorage.getItem(PERFIL_STORAGE_KEY);
    return perfil ? JSON.parse(perfil) : null;
}

// Configurar validación en tiempo real
function configurarValidacionTiempoReal() {
    document.getElementById('nombre').addEventListener('input', validarToggleIntercambio);
    document.getElementById('telefono').addEventListener('input', validarToggleIntercambio);
}

// Validar si se puede activar el toggle de intercambio
function validarToggleIntercambio() {
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const toggleInput = document.getElementById('intercambio');
    const toggleSwitch = toggleInput.closest('.toggle-switch');
    const avisoPrivacidad = document.getElementById('aviso-privacidad');
    
    // Verificar si hay datos completos
    const datosCompletos = nombre !== '' && telefono !== '';
    
    if (!datosCompletos) {
        // Si no hay datos completos, deshabilitar y desmarcar el toggle
        if (toggleInput.checked) {
            toggleInput.checked = false;
            avisoPrivacidad.style.display = 'none';
            mostrarAdvertencia('⚠️ Completa tu nombre y teléfono antes de activar el servicio');
        }
        toggleSwitch.classList.add('disabled');
        toggleInput.disabled = true;
    } else {
        // Si hay datos completos, habilitar el toggle
        toggleSwitch.classList.remove('disabled');
        toggleInput.disabled = false;
        
        // Mostrar/ocultar aviso según el estado del toggle
        if (toggleInput.checked) {
            avisoPrivacidad.style.display = 'block';
        } else {
            avisoPrivacidad.style.display = 'none';
        }
    }
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
    
    // Validar formato de teléfono (opcional pero recomendado)
    if (!validarFormatoTelefono(telefono)) {
        mostrarError('Por favor ingresa un número de teléfono válido (ej: +593 99 999 9999)');
        document.getElementById('telefono').focus();
        return;
    }
    
    // Si intenta activar intercambio sin datos completos (por si acaso)
    if (intercambioHabilitado && (!nombre || !telefono)) {
        mostrarError('Debes completar todos los campos para activar el servicio de intercambio');
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
    
    // Mensaje personalizado según el estado del servicio
    let mensaje = '✅ Perfil guardado correctamente';
    if (intercambioHabilitado) {
        mensaje = '✅ Perfil guardado. Servicio de intercambio activado';
    }
    
    // Mostrar mensaje de éxito
    mostrarExito(mensaje);
    
    // Opcional: redirigir después de 1.5 segundos
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Validar formato de teléfono (básico)
function validarFormatoTelefono(telefono) {
    // Permitir números con o sin +, espacios, guiones
    // Debe tener al menos 9 dígitos
    const numerosSolo = telefono.replace(/[\s\-\+\(\)]/g, '');
    return numerosSolo.length >= 9 && /^\d+$/.test(numerosSolo);
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
    }, 2500);
}

// Mostrar mensaje de error
function mostrarError(mensaje) {
    alert('⚠️ ' + mensaje);
}

// Mostrar advertencia temporal
function mostrarAdvertencia(mensaje) {
    const toast = document.createElement('div');
    toast.className = 'toast-perfil';
    toast.style.background = 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)';
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// Volver atrás
function volverAtras() {
    window.history.back();
}
