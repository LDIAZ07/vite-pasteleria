document.addEventListener("DOMContentLoaded", function () {


const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');

//Menu desplegable

const menuButton = document.getElementById("menuButton");
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");

        // Mostrar/ocultar la barra lateral
        menuButton.addEventListener("click", function () {
            sidebar.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        // Cerrar la barra lateral al hacer clic fuera
        overlay.addEventListener("click", function () {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Botón siguiente
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Cicla hacia adelante
  updateCarousel();
});

// Botón anterior
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Cicla hacia atrás
  updateCarousel();
});

});