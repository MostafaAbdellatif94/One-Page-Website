document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    function showImage(index) {
        const image = images[index];
        const fullImage = image.getAttribute("data-full") || image.src;

        lightbox.style.display = "block";
        lightboxImg.src = fullImage;
        lightboxImg.alt = image.alt;
        caption.textContent = image.alt;
        currentIndex = index;
    }

    images.forEach((image, index) => {
        image.addEventListener("click", function () {
            showImage(index);
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    prevBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (lightbox.style.display === "block") {
            if (event.key === "Escape") {
                lightbox.style.display = "none";
            } else if (event.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            } else if (event.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }
        }
    });
});
