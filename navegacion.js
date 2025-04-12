document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sucursal')?.addEventListener('click', () => {
        cargarpag('sucursales.hbs');
    });

    document.getElementById('personalizados')?.addEventListener('click', () => {
        cargarpag('pastelespersonalizados.hbs');
    });

    document.getElementById('otros')?.addEventListener('click', () => {
        cargarpag('otros.hbs');
    });

    document.getElementById('pasteleshelados')?.addEventListener('click', () => {
        cargarpag('pasteleshelados.hbs');
    });

    document.getElementById('reseñas')?.addEventListener('click', () => {
        cargarpag('reseñas.hbs');
    });

    document.getElementById('sobrenosotros')?.addEventListener('click', () => {
        cargarpag('sobrenosotros.hbs');
    });

    document.getElementById('pastelesnormales')?.addEventListener('click', () => {
        cargarpag('pastelesnormales.hbs');
    });

    document.getElementById('faq')?.addEventListener('click', () => {
        cargarpag('faq.hbs');
    });

    document.getElementById('portafolio')?.addEventListener('click', () => {
        cargarpag('portafolio.hbs');
    });
});

// Función para cargar la página .hbs
async function cargarpag(page) {
    try {
        const response = await fetch(`pages/${page}`);
        if (!response.ok) throw new Error(`No se pudo cargar ${page}`);
        
        const templateText = await response.text();
        const template = Handlebars.compile(templateText);
        const hbs = template({});

        // Cargar el contenido en el contenedor
        document.getElementById('content').innerHTML = hbs;

        // Agregar dinámicamente el archivo .css correspondiente
        agregarEstilos(page);

        // Re-inicializa funciones dinámicas después de cargar contenido
        iniciarcarrucel();
        iniciartarjetas();
    } catch (error) {
        console.error('Error cargando la página:', error);
    }
}

// Función para agregar los estilos correspondientes a cada página cargada
function agregarEstilos(page) {
    const head = document.querySelector('head');
    const styleLink = document.createElement('link');
    
    let styleHref = '';
    if (page === 'sucursales.hbs') {
        styleHref = 'public/css/sucursales.less'; // Asegúrate de compilar LESS a CSS
    } else if (page === 'pastelespersonalizados.hbs') {
        styleHref = 'public/css/pastelespersonalizados.less';
    } else if (page === 'otros.hbs') {
        styleHref = 'public/css/otros.less';
    } else if (page === 'pasteleshelados.hbs') {
        styleHref = 'public/css/pasteleshelados.less';
    } else if (page === 'reseñas.hbs') {
        styleHref = 'public/css/reseñas.less';
    } else if (page === 'sobrenosotros.hbs') {
        styleHref = 'public/css/sobrenosotros.less';
    } else if (page === 'pastelesnormales.hbs') {
        styleHref = 'public/css/pastelesnormales.less';
    } else if (page === 'faq.hbs') {
        styleHref = 'public/css/faq.less';
    } else if (page === 'portafolio.hbs') {
        styleHref = 'public/css/portafolio.less';
    } // Añadir más condiciones según sea necesario

    // Si existe el archivo CSS, lo agregamos al <head>
    if (styleHref) {
        styleLink.rel = 'stylesheet';
        styleLink.href = styleHref;
        head.appendChild(styleLink);
    }
}

// Carrusel
function iniciarcarrucel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return; // Previene error si no hay carrusel
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.right');
    const prevButton = document.querySelector('.carousel-button.left');

    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextButton?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevButton?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });
}

// Tarjetas interactivas
function iniciartarjetas() {
    const tarjetasBorde = document.querySelectorAll('.tarjeta-borde');
    const tarjetas = document.querySelectorAll('.tarjeta');
    const textos = document.querySelectorAll('.tarjeta h3');

    tarjetasBorde.forEach((tarjetaBorde, index) => {
        const tarjeta = tarjetas[index];
        const texto = textos[index];
        let isActive = false;

        if (texto) texto.style.display = 'none';

        tarjetaBorde.addEventListener('click', () => {
            if (!tarjeta || !texto) return;

            if (isActive) {
                tarjeta.style.height = '30px';
                texto.style.fontSize = '2px';
                tarjeta.style.opacity = '0';
                texto.style.display = 'none';
                tarjetaBorde.style.opacity = '1';
            } else {
                tarjeta.style.height = '300px';
                tarjeta.style.zIndex = '150';
                texto.style.fontSize = '16px';
                tarjeta.style.opacity = '1';
                texto.style.display = 'block';
                tarjetaBorde.style.opacity = '1';
            }

            isActive = !isActive;
        });
    });
}
