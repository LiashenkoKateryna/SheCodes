let now = new Date();
let hours = String(now.getHours()).padStart(2, "0");
let minutes = String(now.getMinutes()).padStart(2, "0");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let currentDate = document.querySelector("#current_date");
currentDate.innerHTML = `${day}, ${hours}:${minutes}`;

function currentCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search");
  let currentLocation = document.querySelector("#city");
  currentLocation.innerHTML = input.value;
}
let city = document.querySelector("#search_form");
city.addEventListener("submit", currentCity);

function changeTemperature(event) {
  event.preventDefault();
  let celsius = document.querySelector("#celsius");
  let fahrenheit = document.querySelector("#fahrenheit");
  celsius.innerHTML = `27`;
  fahrenheit.innerHTML = `80`;
}
let displayTemperature = document.querySelector(".temperature");
displayTemperature.addEventListener("click", changeTemperature);
