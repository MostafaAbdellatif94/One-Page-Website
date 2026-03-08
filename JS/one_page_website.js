document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("caption");
    const closeBtn = document.getElementById("closeBtn");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            lightbox.style.display = "block";
            lightboxImg.src = image.getAttribute("data-full");
            lightboxImg.alt = image.alt;
            caption.textContent = image.alt;
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }
    });
});
