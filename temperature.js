//HOMEWORK WEEK 4
//Actuall HOUR
let now = new Date();

let currentTime = document.querySelector("p.time");

let hours = now.getHours();
let minutes = now.getMinutes();

currentTime.innerHTML = `${hours}:${minutes}`;

//Actuall DAY

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let currentDay = document.querySelector("p.today");
let day = days[now.getDay()];

currentDay.innerHTML = `${day}`;

let date = now.getDate();
let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
let currrentMonth = months[now.getMonth()];
let year = now.getFullYear();

let currentDate = document.querySelector("p.date");
currentDate.innerHTML = `${date} ${currrentMonth} ${year}`;


//HOMEWORK 6


//CITY/TOWN/ETC
function displayWeatherCondition(response) {
  document.querySelector(".localization").innerHTML = response.data.name;
  document.querySelector("#actuallTemp").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#actuallHumidity").innerHTML = response.data.main.humidity;
}

function clickLupa(event) {
  event.preventDefault();
  let apiKey = "af7eeef60a1b879ba0783c7aa018fc95";
  let city = document.querySelector("#currentCity").value;
  //  localizationElement.innerHTML = city.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);

}

let searchForCity = document.querySelector("#search-form");
searchForCity.addEventListener("submit", clickLupa);


//let searchForCity = document.querySelector("#search-form");
//searchForCity.addEventListener("submit", clickLupa);

//function showWeather(response) {
//  let h1 = document.querySelector("h1");
//  let temperature = Math.round(response.data.main.temp);
//  h1.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
//}

//function retrievePosition(position) {
//
//  let lat = position.coords.latitude;
//  let lon = position.coords.longitude;
//  let url = `https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//  axios.get(url).then(showWeather);
//}
//
//navigator.geolocation.getCurrentPosition(retrievePosition);
