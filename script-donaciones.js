document.querySelector('.donate-button').addEventListener('click', function () {
    window.location.href = 'https://your-donation-page-url.com';
});

document.querySelector('.donation-link').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'https://example.com';
});

document.querySelector('.donate-now').addEventListener('click', function () {
    window.location.href = 'https://your-donation-page-url.com';
});