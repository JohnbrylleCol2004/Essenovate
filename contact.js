const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
let index = 0;

function updateSlide() {
    const imageWidth = images[0].clientWidth; // Get actual image width
    carousel.style.transform = `translateX(-${index * imageWidth}px)`;
}

function prevSlide() {
    index = (index > 0) ? index - 1 : images.length - 1;
    updateSlide();
}

function nextSlide() {
    index = (index < images.length - 1) ? index + 1 : 0;
    updateSlide();
}

window.addEventListener('load', () => {
    carousel.style.width = `${images.length * images[0].clientWidth}px`;
});
