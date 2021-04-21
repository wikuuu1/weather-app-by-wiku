function displayWeather(response) {

  let cityElement = document.querySelector("#localization");
  cityElement.innerHTML = response.data.name;


}


let apiKey = "af7eeef60a1b879ba0783c7aa018fc95";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayWeather);