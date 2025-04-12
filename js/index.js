
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

export const getPageContext = (pagePath) => {
  let pageData = {};
  switch (pagePath) {
      case  '/index.html':
          break;
      case '/contactus.html':
          break;
      default:
          break;
  }
  return {
      ...commonData,
      ...pageData
    }
}

