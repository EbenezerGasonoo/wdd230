document.addEventListener("DOMContentLoaded", function () {
    // === Year & Last Modified ===
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent =
      "Last Modified: " + document.lastModified;
  
    // === Menu Toggle ===
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".nav-menu");
  
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("show");
      menuToggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });
  
    // === Dark Mode Toggle ===
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
  
    // === Visit Message ===
    const visitMsg = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("last-visit");
    const now = Date.now();
  
    if (!lastVisit) {
      visitMsg.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const diffTime = now - Number(lastVisit);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
      if (diffDays < 1) {
        visitMsg.textContent = "Back so soon! Awesome!";
      } else {
        visitMsg.textContent = `You last visited ${diffDays} ${diffDays === 1 ? "day" : "days"} ago.`;
      }
    }
  
    localStorage.setItem("last-visit", now);
  });
  