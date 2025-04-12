document.addEventListener("DOMContentLoaded", function () {


    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.right');
    const prevButton = document.querySelector('.carousel-button.left');
    
    //Menu desplegable
    
    // document.addEventListener("DOMContentLoaded", function () {
    
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
      // });
    
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
    





    // Selecciona todos los elementos con la clase .tarjeta-borde, .tarjeta y .tarjeta h3
    const tarjetasBorde = document.querySelectorAll('.tarjeta-borde');
    const tarjetas = document.querySelectorAll('.tarjeta');
    const textos = document.querySelectorAll('.tarjeta h3');
    
    // Itera sobre cada tarjeta-borde y su correspondiente tarjeta y texto
    tarjetasBorde.forEach((tarjetaBorde, index) => {
        const tarjeta = tarjetas[index];  // Selecciona la tarjeta correspondiente
        const texto = textos[index];  // Selecciona el texto correspondiente
        let isActive = false; // Estado inicial

        // Agrega el evento de clic a cada tarjeta-borde
        texto.style.display = 'none';
        tarjetaBorde.addEventListener('click', () => {
            if (isActive) {
                // Si está activo, restaura los valores originales
                tarjeta.style.height = '30px';
                texto.style.fontSize = '2px';
                tarjeta.style.opacity = '0';
                texto.style.display = 'none';
                tarjetaBorde.style.opacity = '1';
            } else {
                // Si no está activo, expande la tarjeta y cambia el texto
                tarjeta.style.height = '300px';
                tarjeta.style.zIndex = '150'; // Cambio de z-index para ponerlo encima
                texto.style.fontSize = '16px';
                tarjeta.style.opacity = '1';
                texto.style.display = 'block';
                tarjetaBorde.style.opacity = '1';
            }
            isActive = !isActive; // Cambia el estado
        });
    });




    });