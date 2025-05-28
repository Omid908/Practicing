const apiKey = "7cbb88acf19e4419b6710646252805";

const form = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const cityDisplay = document.querySelector(".cityDisplay");
const tempDisplay = document.querySelector(".tempDisplay");
const humidityDisplay = document.querySelector(".humidityDisplay");
const descDisplay = document.querySelector(".descDisp");
const weatherEmoji = document.querySelector(".weatherEmoji");
const errorDisplay = document.querySelector(".errorDisplay");
const card = document.querySelector(".card");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();

  if (!city) {
    showError("Please enter a city");
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
        city
      )}&aqi=no`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    updateWeatherUI(data);
    clearError();
  } catch (error) {
    showError(error.message);
  }
});

function updateWeatherUI(data) {
  cityDisplay.textContent = data.location.name;
  tempDisplay.textContent = `${Math.round(data.current.temp_f)}°F`;
  humidityDisplay.textContent = `Humidity: ${data.current.humidity}%`;
  descDisplay.textContent = capitalizeFirstLetter(data.current.condition.text);
  weatherEmoji.textContent = getWeatherEmoji(data.current.condition.code);
  card.classList.remove("show-error");
}

function showError(message) {
  errorDisplay.textContent = message;
  card.classList.add("show-error");
}

function clearError() {
  errorDisplay.textContent = "";
  card.classList.remove("show-error");
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getWeatherEmoji(conditionCode) {
  if ([1000].includes(conditionCode)) return "☀️";
  if ([1003].includes(conditionCode)) return "🌤️";
  if ([1006, 1009].includes(conditionCode)) return "☁️";
  if ([1030, 1135, 1147].includes(conditionCode)) return "🌫️";
  Mist / Fog;
  if ([1063, 1150, 1153, 1180, 1183, 1240].includes(conditionCode)) return "🌦️";
  if ([1186, 1189, 1192, 1195, 1243, 1246].includes(conditionCode)) return "🌧️";
  if ([1066, 1210, 1213, 1216, 1219, 1222, 1225].includes(conditionCode))
    return "❄️";
  if ([1273, 1276].includes(conditionCode)) return "⛈️";
  return "❓";
}
