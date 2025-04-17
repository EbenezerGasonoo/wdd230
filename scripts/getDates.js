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

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const main = document.querySelector("main");

    // Apply saved dark mode preference to <main>
    if (localStorage.getItem("darkMode") === "enabled") {
        main.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Light Mode";
    }

    darkModeToggle.addEventListener("click", function () {
        main.classList.toggle("dark-mode");

        // Save preference to localStorage
        if (main.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });
});
