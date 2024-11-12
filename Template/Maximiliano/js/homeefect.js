      // Selecciona todas las imágenes con la clase 'slide-image'
const images = document.querySelectorAll('.slide-image');
let currentIndex = 0;
let previousIndex = images.length - 1;

// Función para mostrar la imagen actual con efecto de desvanecimiento
function showImage(index) {
    // Oculta la imagen anterior
    images[previousIndex].classList.remove('show');
    
    // Muestra la imagen actual
    images[index].classList.add('show');
    
    // Actualiza los índices
    previousIndex = index;
}

// Inicia el ciclo de imágenes con efecto de transición
function startImageSlider() {
    showImage(currentIndex);

    // Cambia la imagen cada 2 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3200);
}

// Inicia el slider al cargar la página
document.addEventListener('DOMContentLoaded', startImageSlider);