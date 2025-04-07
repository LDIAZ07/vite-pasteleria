document.addEventListener("DOMContentLoaded", function () {

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
        tarjetaBorde.addEventListener('click', () => {
            if (isActive) {
                // Si está activo, restaura los valores originales
                tarjeta.style.height = '30px';
                texto.style.fontSize = '2px';
                tarjeta.style.opacity = '0';
                tarjetaBorde.style.opacity = '1';
            } else {
                // Si no está activo, expande la tarjeta y cambia el texto
                tarjeta.style.height = '300px';
                tarjeta.style.zIndex = '150'; // Cambio de z-index para ponerlo encima
                texto.style.fontSize = '16px';
                tarjeta.style.opacity = '1';
                tarjetaBorde.style.opacity = '1';
            }
            isActive = !isActive; // Cambia el estado
        });
    });
});
