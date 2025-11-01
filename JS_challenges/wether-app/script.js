import clear from './images/clear.png';
import clouds from './images/clouds.png';
import drizzle from './images/drizzle.png';
import haze from './images/haze.png';
import humidity from './images/humidity.png';
import mist from './images/mist.png';
import rain from './images/rain.png';
import snow from './images/snow.png';
import wind from './images/wind.png';

const weatherIconsMap = new Map([
  ['clear', clear],
  ['clouds', clouds][('drizzle', drizzle)],
  ['haze', haze],
  ['humidity', humidity],
  ['humidity', humidity],
  ['mist', mist],
  ['rain', rain],
  ['snow', snow],
  ['wind', wind],
]);

const weatherInformation = document.getElementsByClassName('weather');

const searchBtn = document.getElementsByClassName('search-btn');

searchBtn.addEventListener();

// API TO BE USED FOR THE WEATHER DETAILS
const apiKey = '46d47581a51a79782741111953e700af';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    var data = await response.json();
    document.querySelector('#city-name').innerHTML = data.name;
    document.querySelector('#temperature-value').innerHTML =
      Math.round(data.main.temp) + '°C';
    document.querySelector('#pressure-value').innerHTML =
      data.main.humidity + '%';
    document.querySelector('#wind-value').innerHTML = data.wind.speed + 'km/h';

    weather;
  }
}
