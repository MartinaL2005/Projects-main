// This script handles the image slideshow
const rectangles = document.querySelectorAll('.rectangle');
let currentImageIndex = 0;

function showNextImage() {
    rectangles.forEach(rectangle => {
        rectangle.style.display = 'none';
    });

    currentImageIndex = (currentImageIndex + 1) % rectangles.length;
    rectangles[currentImageIndex].style.display = 'block';

    // You can customize the interval duration (in milliseconds)
    setTimeout(showNextImage, 3000); // Change image every 3 seconds
}

window.onload = showNextImage;