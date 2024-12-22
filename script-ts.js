document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".banner-video");
    video.play().catch((error) => {
        console.error("Video playback failed:", error);
    });
});