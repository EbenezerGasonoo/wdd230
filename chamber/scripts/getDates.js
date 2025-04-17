document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lastModified").textContent = document.lastModified;
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});
