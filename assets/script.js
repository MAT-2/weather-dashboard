var cityInputEl = document.querySelector("#cityInput");
var searchBtn = document.querySelector("#search-btn");
var APIKey = "64c9a35de2c16fb58dacd57d4783c3f5";
var city;
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var cityEl = document.querySelector("#city-name");
var longitude;
var latitude;

function getAPI() {
  city = cityInputEl.value;
  console.log(city);

  //JS Injection example shown here, concatenating strings in JS.

  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;

  //Need to fetch the data from queryURL. THEN return it as JS. THEN return data to be used.
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data) {
        console.log(data);
        tempEl.textContent = data.main.temp + "F";
        windEl.textContent = data.wind.speed + "MPH";
        humidityEl.textContent = data.main.humidity + "%";
        cityEl.textContent = data.name;
        latitude = data.coord.lat;
        longitude = data.coord.lon;
        console.log(latitude);
        console.log(longitude);
      }
    });
}

//This Function retrieves the latitude and longitude for whichever city the user inputs.
function forecast() {
  city = cityInputEl.value;
  console.log(city);

  var forecastURL = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKey}
  `;

  fetch(forecastURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      latitude = data.lat;
      console.log(latitude);
    });
}

searchBtn.addEventListener("click", getAPI);
searchBtn.addEventListener("click", forecast);
