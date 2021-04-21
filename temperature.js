function displayWeather(response) {

  let cityElement = document.querySelector("#localization");
  let humidityElement = document.querySelector("#actuallHumidity");


  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;

}

function search(city) {
  let apiKey = "af7eeef60a1b879ba0783c7aa018fc95";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#currentCity");
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);