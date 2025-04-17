// ==== Year and Last Modified ====
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
    // === Menu Toggle ===
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show");
        menuToggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });

    // === Dark Mode ===
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const main = document.querySelector("main");

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

    // === Visit Counter ===
    const visitsDisplay = document.getElementById("visits");
    let numVisits = Number(localStorage.getItem("visit-count")) || 0;
    visitsDisplay.textContent = numVisits;
    numVisits++;
    localStorage.setItem("visit-count", numVisits);
});
