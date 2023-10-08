var cityInputEl = document.querySelector("#cityInput");
var searchBtn = document.querySelector("#search-btn");
var APIKey = "64c9a35de2c16fb58dacd57d4783c3f5";
var city;
// var queryURL =
//   "https://api.openweathermap.org/data/2.5/weather?q=" +
//   city +
//   "&appid=" +
//   APIKey;

//JS Injection example
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q= 
  ${city}
  &appid=
  ${APIKey}`;

function getAPI() {
  city = cityInputEl.value;
  console.log(city);
  // fetch(queryURL)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //   });
}

console.log(getAPI());

console.log(queryURL);

searchBtn.addEventListener("click", getAPI);
