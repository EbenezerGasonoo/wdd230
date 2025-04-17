document.addEventListener("DOMContentLoaded", function () {
    // Set year and last modified date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    // Toggle Menu
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show");
        menuToggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });

    // Toggle Dark Mode
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const main = document.querySelector("main");

    // Load saved preference
    if (localStorage.getItem("darkMode") === "enabled") {
        main.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Light Mode";
    }

    darkModeToggle.addEventListener("click", function () {
        main.classList.toggle("dark-mode");

        if (main.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });
});
