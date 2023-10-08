var APIKey = "64c9a35de2c16fb58dacd57d4783c3f5";
var city = "Chicago";
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey;

fetch(queryURL);

console.log(queryURL);
