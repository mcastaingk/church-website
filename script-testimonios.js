document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.testimonies-carousel');
    const carouselItems = document.querySelectorAll('.testimonies-carousel-item');
    const videoPlayer = document.getElementById('video-player');
    const youtubeVideoPlayer = document.getElementById('youtube-video-player');
    const blurredBackground = document.querySelector('.blurred-background');

    let currentIndex = 0;

    // Update carousel position
    function updateCarousel() {
        const offset = -currentIndex * 160;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // Handle carousel navigation
    document.getElementById('carousel-prev').addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    });

    document.getElementById('carousel-next').addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, carouselItems.length - 1);
        updateCarousel();
    });

    // Handle video selection
    carouselItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            carouselItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');

            const videoSrc = item.getAttribute('data-video');
            if (videoSrc.includes('.mp4')) {
                videoPlayer.querySelector('source').src = `assets/${videoSrc}`;
                videoPlayer.style.removeProperty('display');
                youtubeVideoPlayer.style.display = `none`;
            } else {
                youtubeVideoPlayer.src = `${videoSrc}`;
                youtubeVideoPlayer.style.removeProperty('display');
                videoPlayer.style.display = `none`;
            }
            videoPlayer.load();

            const thumbnail = item.src;
            blurredBackground.style.backgroundImage = `url(${thumbnail})`;
        });
    });

    // Set initial video
    carouselItems[0].classList.add('selected');
    blurredBackground.style.backgroundImage = `url(${carouselItems[0].src})`;
    videoPlayer.style.display = `none`;
});