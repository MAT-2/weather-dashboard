var cityInputEl = document.querySelector("#cityInput");
var searchBtn = document.querySelector("#search-btn");
var APIKey = "64c9a35de2c16fb58dacd57d4783c3f5";
var city;
var tempEl = document.querySelector("#temp");
// var queryURL =
//   "https://api.openweathermap.org/data/2.5/weather?q=" +
//   city +
//   "&appid=" +
//   APIKey;

//JS Injection example

function getAPI() {
  city = cityInputEl.value;
  console.log(city);

  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data) {
        console.log(data);
        tempEl.textContent = data.main.temp + "F";
      }
    });
}

searchBtn.addEventListener("click", getAPI);
