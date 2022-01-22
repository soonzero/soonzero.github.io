const API_KEY = "74a1050665b50a1d7e6e94c9cb6854db";
const weather = document.querySelector("#weather span");

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const coords = {
    lat,
    lon,
  };
  localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coords);
}

function getWeather(coords) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const weatherDetail = data.weather[0].main;
      weather.innerText = `${Math.floor(temperature)}\°
      ${weatherDetail} `;
    });
}

function onGeoError() {
  weather.innerText = `Get weather`;
}

function loadWeather() {
  const currentCoords = localStorage.getItem("coords");
  if (currentCoords !== null) {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords);
    return;
  } else {
    navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
  }
}

loadWeather();
