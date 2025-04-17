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

    // visits.js

    // Get the element where visits will be displayed
    const visitsDisplay = document.getElementById("visits");

    // Get the stored number of visits from localStorage
    let numVisits = Number(localStorage.getItem("numVisits")) || 0;

    // Increment the visit count
    numVisits++;

    // Save the updated count back to localStorage
    localStorage.setItem("numVisits", numVisits);

    // Display the number of visits
    if (visitsDisplay) {
    visitsDisplay.textContent = numVisits;
    }


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
