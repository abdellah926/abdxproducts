
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.cat-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Initial setup
    images[currentIndex].classList.add('active');
    setInterval(showNextImage, 2000); // Change image every 2 seconds
