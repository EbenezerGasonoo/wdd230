// Navigation toggle (hamburger menu)
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Set timestamp if element exists
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    const now = new Date();
    timestampField.value = now.toLocaleString(); // "4/17/2025, 7:30:15 PM"
  }

  // Set lastModified in footer if element exists
  const lastModSpan = document.getElementById("lastModified");
  if (lastModSpan) {
    lastModSpan.textContent = document.lastModified;
  }

  // Only run member directory logic if on the directory page
  const membersContainer = document.querySelector('#members');
  const gridBtn = document.getElementById('grid-btn');
  const listBtn = document.getElementById('list-btn');

  if (membersContainer && gridBtn && listBtn) {
    async function getMembers() {
      const response = await fetch('data/members.json');
      const data = await response.json();
      displayMembers(data.members);
    }

    function displayMembers(members) {
      membersContainer.innerHTML = ''; // Clear before appending
      members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        card.innerHTML = `
          <img src="images/${member.image}" alt="${member.name} Logo">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
          <p class="level">${member.membership} Member</p>
        `;

        membersContainer.appendChild(card);
      });
    }

    gridBtn.addEventListener('click', () => {
      membersContainer.classList.add('grid-view');
      membersContainer.classList.remove('list-view');
    });

    listBtn.addEventListener('click', () => {
      membersContainer.classList.add('list-view');
      membersContainer.classList.remove('grid-view');
    });

    getMembers();
  }
});
