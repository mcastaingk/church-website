document.querySelector('.donate-button').addEventListener('click', function () {
    window.location.href = 'https://www.paypal.com/donate/?hosted_button_id=ZPVKKAUHAVPSL';
});

document.querySelector('.donation-link').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'https://www.paypal.com/donate/?hosted_button_id=ZPVKKAUHAVPSL';
});

document.querySelector('.donate-now').addEventListener('click', function () {
    window.location.href = 'https://www.paypal.com/donate/?hosted_button_id=ZPVKKAUHAVPSL';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.transferencia-image').addEventListener('click', () => {
    alert('Gracias por apoyar con su donación de acciones.');
});