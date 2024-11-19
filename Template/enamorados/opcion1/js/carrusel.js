document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('photoCarousel');
    const progressBar = carousel.querySelector('.progress-bar');
    let carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 5000
    });

    function resetProgressBar() {
        progressBar.style.width = '0%';
    }

    function startProgressBar() {
        resetProgressBar();
        let width = 0;
        const interval = 50;
        const incrementWidth = 100 / (5000 / interval);

        const progress = setInterval(() => {
            width += incrementWidth;
            progressBar.style.width = width + '%';

            if (width >= 100) {
                clearInterval(progress);
            }
        }, interval);
    }

    carousel.addEventListener('slide.bs.carousel', function () {
        resetProgressBar();
    });

    carousel.addEventListener('slid.bs.carousel', function () {
        startProgressBar();
    });

    startProgressBar();

    // Pause carousel on hover
    carousel.addEventListener('mouseenter', function () {
        carouselInstance.pause();
    });

    carousel.addEventListener('mouseleave', function () {
        carouselInstance.cycle();
        startProgressBar();
    });

    // Add Ken Burns effect
    const images = carousel.querySelectorAll('.carousel-item img');
    images.forEach(img => {
        img.addEventListener('load', function () {
            this.style.animation = 'kenBurns 20s ease-in-out infinite alternate';
        });
    });

    // Add Ken Burns animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes kenBurns {
            0% {
                transform: scale(1) translate(0, 0);
            }
            100% {
                transform: scale(1.1) translate(-2%, -2%);
            }
        }
    `;
    document.head.appendChild(style);
});