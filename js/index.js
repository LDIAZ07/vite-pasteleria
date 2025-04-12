// import { galeria } from "../pages/portafolio.hbs";
// import { faqs } from "../pages/faq.hbs";

// export const getPageContext = (pagePath) => {
//     console.log("Page to Load Context:", pagePath);

//     const commonVariables = {
//         galeria: galeria,
//         faqs: faqs
//     };

//     let pageVariables = {};
//     console.log("Page been loaded:", pagePath);
//     switch (pagePath) {
//         case '../index.html':
//             pageVariables = { galeria };
//             break;
//         case 'pages/portafolio.html':
//             pageVariables = { galeria };
//             break;
//         case 'pages/faq.html':
//             pageVariables = { faqs }; // 👈 Añadido para la página de preguntas frecuentes
//             break;
//     }

//     const finalContext = {
//         ...commonVariables,
//         ...pageVariables
//     };

//     console.log("Context: ", JSON.stringify(finalContext, null, 2));
//     return finalContext;
    
// };

document.addEventListener("DOMContentLoaded", function () {
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
});

