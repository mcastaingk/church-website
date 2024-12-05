// Toggle menu for small screens
const toggleButton = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Team photo hover animation (optional)
const teamPhoto = document.querySelector('.team-photo');

teamPhoto.addEventListener('mouseenter', () => {
    teamPhoto.style.transform = 'scale(1.05)';
    teamPhoto.style.transition = 'transform 0.3s ease-in-out';
});

teamPhoto.addEventListener('mouseleave', () => {
    teamPhoto.style.transform = 'scale(1)';
});

function openModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    document.getElementById(`modal-${id}`).focus();
}

function closeModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}

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