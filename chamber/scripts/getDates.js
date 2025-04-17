document.addEventListener('DOMContentLoaded', () => {
  // Navigation toggle (hamburger menu)
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-menu');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });
  }

  // Set timestamp if element exists
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    const now = new Date();
    timestampField.value = now.toLocaleString();
  }

  // Set lastModified in footer if element exists
  const lastModSpan = document.getElementById("lastModified");
  if (lastModSpan) {
    lastModSpan.textContent = document.lastModified;
  }

  // Member directory logic
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
      membersContainer.innerHTML = '';
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

// Weather API logic
const currentTemp = document.querySelector('#weather-temp');
const weatherDesc = document.querySelector('#weather-desc');
const forecast = document.querySelector('#forecast');

if (currentTemp && weatherDesc && forecast) {
  const apiKey = '3f05813278c93c4afa09969dad0f6fdb';
  const lat = 5.669;
  const lon = -0.017;

  async function getWeather() {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const [weatherRes, forecastRes] = await Promise.all([
      fetch(weatherURL),
      fetch(forecastURL)
    ]);

    const weatherData = await weatherRes.json();
    const forecastData = await forecastRes.json();

    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(1)}°C`;
    weatherDesc.textContent = weatherData.weather[0].description;

    const daily = forecastData.list.filter(item => item.dt_txt.includes('12:00:00'));
    forecast.innerHTML = daily.slice(0, 3).map(item => {
      const day = new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short' });
      return `<div><strong>${day}:</strong> ${item.main.temp.toFixed(1)}°C</div>`;
    }).join('');
  }

  getWeather();
}

