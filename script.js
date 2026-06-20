const images = [
    "https://picsum.photos/800/600?1",
    "https://picsum.photos/800/600?2",
    "https://picsum.photos/800/600?3",
    "https://picsum.photos/800/600?4",
    "https://picsum.photos/800/600?5",
    "https://picsum.photos/800/600?6",
    "https://picsum.photos/800/600?7",
    "https://picsum.photos/800/600?8",
    "https://picsum.photos/800/600?9",
    "https://picsum.photos/800/600?10",
    "https://picsum.photos/800/600?11",
    "https://picsum.photos/800/600?12"
];

let currentIndex = 0;

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(index) {
    currentIndex = index;

    lightbox.classList.add("show");
    lightboxImg.src = images[currentIndex];
}

function closeLightbox() {
    lightbox.classList.remove("show");
}

function nextImage() {
    lightboxImg.style.transform = "scale(0.6)";
    lightboxImg.style.opacity = "0";

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];

        lightboxImg.style.transform = "scale(1)";
        lightboxImg.style.opacity = "1";
    }, 150);
}

function prevImage() {
    lightboxImg.style.transform = "scale(0.6)";
    lightboxImg.style.opacity = "0";

    setTimeout(() => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];

        lightboxImg.style.transform = "scale(1)";
        lightboxImg.style.opacity = "1";
    }, 150);
}

/* Keyboard support */
document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("show")) return;

    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeLightbox();
});