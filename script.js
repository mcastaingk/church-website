const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.custom-carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0; // Initial slide position
const itemsToShow = 3; // Number of images visible at once
const totalItems = items.length;

document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll('.navbar-menu a');
    const currentPath = window.location.pathname;

    menuItems.forEach((item) => {
        if (item.getAttribute('href') === currentPath.split('/').pop()) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// Adjust the width of the carousel and each item dynamically
items.forEach(item => {
    item.style.flex = `0 0 ${100 / itemsToShow}%`; // Width of each item
});

function updateCarousel() {
    const offset = -currentIndex * (100 / itemsToShow); // Calculate offset percentage
    carousel.style.transform = `translateX(${offset}%)`; // Apply the translation
}

// Previous button click handler
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - itemsToShow;
    updateCarousel();
});

// Next button click handler
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - itemsToShow) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Update on window resize
window.addEventListener('resize', updateCarousel);

// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Back-to-Top Button
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            // Logic to cycle focus within modal
        }
    });
});