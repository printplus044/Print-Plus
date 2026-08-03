// =========================
// PRINT-PLUS
// Script principal
// =========================

// Le code s'exécute lorsque la page est chargée
document.addEventListener("DOMContentLoaded", function () {

    console.log("Bienvenue sur le site de Print-Plus !");

});window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(12,12,15,0.95)";

    } else {

        header.style.background = "rgba(12,12,15,0.75)";

    }

});const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});// =========================
// Apparition au défilement
// =========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((element) => {

    observer.observe(element);

});// =========================
// LIGHTBOX
// =========================

const galleryImages = document.querySelectorAll(".portfolio-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

galleryImages.forEach((image)=>{

    image.addEventListener("click", ()=>{

        lightbox.style.display="flex";

        lightboxImg.src=image.src;

    });

});

closeBtn.addEventListener("click", ()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});