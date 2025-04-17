// Add this to your getDates.js OR in a new JS file
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const timestampField = document.getElementById("timestamp");

  if (timestampField) {
    const now = new Date();
    const formatted = now.toLocaleString(); // e.g., "4/17/2025, 7:30:15 PM"
    timestampField.value = formatted;
  }

  // Optional: Update footer lastModified
  const lastModSpan = document.getElementById("lastModified");
  if (lastModSpan) {
    lastModSpan.textContent = document.lastModified;
  }
});
