var cityInputEl = document.querySelector("#cityInput");
var searchBtn = document.querySelector("#search-btn");
var APIKey = "64c9a35de2c16fb58dacd57d4783c3f5";
var city;
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var cityEl = document.querySelector("#city-name");

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
      }
    });
}

searchBtn.addEventListener("click", getAPI);
