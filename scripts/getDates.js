// Set the current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Set the last modified date dynamically
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show");

        // Toggle button text between ☰ and ✖
        menuToggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });
});
