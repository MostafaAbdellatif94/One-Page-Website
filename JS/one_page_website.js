const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach(function(image){
image.addEventListener("click", function(){
lightbox.style.display = "block";
lightboxImg.src = image.getAttribute("data-full");
});
});

closeBtn.onclick = function(){
lightbox.style.display = "none";
};

lightbox.onclick = function(e){
if(e.target !== lightboxImg){
lightbox.style.display = "none";
}
};
