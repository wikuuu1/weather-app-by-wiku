// FOR HAVING AN LAST UPDATED TIME 
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return ` ${day} ${hours}:${minutes}`;

}
// ADDING A TODAY DAY 
function formatToday(timestamp) {
  let date = new Date(timestamp);
  
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return ` ${day} `;

}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  return days[day + 1];


}


// ADDING FORECAST
function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");



  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {

    if (index < 6) {

      forecastHTML = forecastHTML +
        `   
            <div class="col-2">
              <div class="nextDays">
                <div class="forecast-day">${formatDay(forecastDay.dt)}</div>
                <div class="nextDays-temperatures">
                  <span class="weather-forecast-temp-max">${Math.round(forecastDay.temp.max)}</span>° |
                  <span class="weather-forecast-temp-min">${Math.round(forecastDay.temp.min)}</span>°
                </div>
                <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="" id="icons" width="70"></span>
              </div>
            </div> `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  console.log(coordinates);

  let apiKey = "af7eeef60a1b879ba0783c7aa018fc95";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);
}

function displayWeather(response) {

  let cityElement = document.querySelector("#localization");
  let humidityElement = document.querySelector("#actuallHumidity");
  let windElement = document.querySelector("#windSpeed");
  let temperatureObject = document.querySelector("#temperature");
  let timeElement = document.querySelector("#time");
  let iconElement = document.querySelector("#icon");
  let descriptionElement = document.querySelector(".description");
  let todayElement = document.querySelector(".today");


  celsiusTemperature = response.data.main.temp;
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  temperatureObject.innerHTML = Math.round(celsiusTemperature);
  timeElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute("src", `
  http: //openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt", response.data.weather[0].description);
  descriptionElement.innerHTML = response.data.weather[0].description;
  todayElement.innerHTML = formatToday(response.data.dt * 1000);


  getForecast(response.data.coord);
}
// SEARCH ENGINE
function search(city) {
  let apiKey = "af7eeef60a1b879ba0783c7aa018fc95";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&`;
  console.log(apiUrl);

  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#currentCity");
  search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  // remove the active class the celsius link
  celsiusLink.classList.remove("active");
  // add the active class to fahrenheit link
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);

}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  // remove the active class from fahrenheit link
  fahrenheitLink.classList.remove("active");
  // add the active class to  celsius link
  celsiusLink.classList.add("active");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
// FOR SUBMITING AFTER CLICKING THE BUTTON SEARCH
let celsiusTemperature = null;


let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);


// DATA 
let now = new Date();
let date = now.getDate();
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
let currrentMonth = months[now.getMonth()];
let year = now.getFullYear();

let currentDate = document.querySelector("#date");
currentDate.innerHTML = `${date} ${currrentMonth} ${year}`;