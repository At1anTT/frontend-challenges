const clear = './images/clear.png';
const clouds = './images/clouds.png';
const drizzle = './images/drizzle.png';
const haze = './images/haze.png';
const humidity = './images/humidity.png';
const mist = './images/mist.png';
const rain = './images/rain.png';
const snow = './images/snow.png';
const wind = './images/wind.png';

const weatherIconsMap = new Map([
  ['clear', clear],
  ['clouds', clouds],
  ['drizzle', drizzle],
  ['haze', haze],
  ['humidity', humidity],
  ['humidity', humidity],
  ['mist', mist],
  ['rain', rain],
  ['snow', snow],
  ['wind', wind],
]);

const searchBox = document.querySelector('.input-wrapper input');

const searchBtn = document.querySelector('.search-btn');
const weatherIcon = document.querySelector('#wether-indicator');

// API TO BE USED FOR THE WEATHER DETAILS
const apiKey = '46d47581a51a79782741111953e700af';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.weather').hidden = true;
    document.querySelector('.error').hidden = false;
  } else {
    var data = await response.json();
    document.querySelector('#city-name').innerHTML = data.name;
    document.querySelector('#temperature-value').innerHTML =
      Math.round(data.main.temp) + '°C';
    document.querySelector('#pressure-value').innerHTML =
      data.main.humidity + '%';
    document.querySelector('#wind-value').innerHTML = data.wind.speed + 'km/h';

    weatherIcon.src = weatherIconsMap.get(data.weather[0]?.main?.toLowerCase());
    document.querySelector('.weather').hidden = false;
    document.querySelector('.error').hidden = true;
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  checkWeather(searchBox.value);
});
