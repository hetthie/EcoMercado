// ========== VARIABLES DE CÁMARA ==========
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const startBtn = document.getElementById('startBtn');
const switchBtn = document.getElementById('switchBtn');
const captureBtn = document.getElementById('captureBtn');
const message = document.getElementById('message');

let stream = null;
let currentFacingMode = 'environment'; // Empezar con cámara trasera

// ========== FUNCIONES DE CÁMARA ==========
async function startCamera(facingMode = 'environment') {
    try {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }

        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: facingMode },
            audio: false
        });

        video.srcObject = stream;
        video.classList.add('active');
        message.style.display = 'none';
        startBtn.textContent = 'Detener Cámara';
        captureBtn.style.display = 'block';
        
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        
        if (videoDevices.length > 1) {
            switchBtn.style.display = 'block';
        }

    } catch (err) {
        console.error('Error al acceder a la cámara:', err);
        message.innerHTML = `<div class="error">
            <p><strong>No se pudo acceder a la cámara</strong></p>
            <p>Por favor, asegúrate de dar permisos a la cámara.</p>
        </div>`;
        message.style.display = 'block';
    }
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        video.classList.remove('active');
        stream = null;
        startBtn.textContent = 'Iniciar Cámara';
        switchBtn.style.display = 'none';
        captureBtn.style.display = 'none';
        message.innerHTML = '<p>Presiona "Iniciar Cámara" para comenzar</p>';
        message.style.display = 'block';
    }
}

function capturePhoto() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const imagenCapturada = canvas.toDataURL('image/jpeg');
    
    // Pasar la imagen a la pantalla de análisis
    mostrarPantallaAnalisis(imagenCapturada);
}

// ========== EVENT LISTENERS ==========
startBtn.addEventListener('click', () => {
    if (stream) {
        stopCamera();
    } else {
        startCamera(currentFacingMode);
    }
});

switchBtn.addEventListener('click', () => {
    currentFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
    startCamera(currentFacingMode);
});

captureBtn.addEventListener('click', capturePhoto);