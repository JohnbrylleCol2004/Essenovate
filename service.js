const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const serviceCards = document.querySelectorAll('.card'); 
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');



let currentIndex = 0;


function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }, 3000);
}

// Function to slide only the images
function showSlide(newIndex, direction) {
    const currentImage = images[currentIndex];
    const nextImage = images[newIndex];

    // Ensure only the current image is visible
    images.forEach((img, i) => img.style.display = i === newIndex ? 'block' : 'none');

    // Apply transition animation for images
    nextImage.style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';

    setTimeout(() => {
        currentImage.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s';
        nextImage.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s';

        currentImage.style.transform = direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
        nextImage.style.transform = 'translateX(0)';
    }, 10);

    currentIndex = newIndex;

    // Instantly switch service card (no transition)
    showCard(newIndex);
}

// Function to instantly switch service cards
function showCard(index) {
    serviceCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none'; // Instant switch, no transition
    });
}

// Next and Previous Slide Functions
function nextSlide() {
    let newIndex = (currentIndex + 1) % images.length;
    showSlide(newIndex, 'left');
}

function prevSlide() {
    let newIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(newIndex, 'right');
}

// Event Listeners for Arrows
leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

// Ensure only the first image and service card are visible on page load
images.forEach((img, i) => img.style.display = i === 0 ? 'block' : 'none');
showCard(0);
