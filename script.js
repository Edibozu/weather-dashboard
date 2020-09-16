// Assign global variables that will be used throughout the file.

var apiKey = "3ef0d51604e6d21b745a6fbf9c9d0dd2";
var searchBtn = $("#search-btn");
var searchCity = $("#search-city");
var clearBtn = $("#search-btn");
var savedSearch = $("#saved-search");
var forecastDisplay = $(".forecastDisplay");
var cityDisplay = $("#city-display");
var currentDate = moment().format('MMM Do');
var temp = $(".temp");
var humidity = $(".humidity");
var windSpeed = $(".widnSpeed");
var uvIndex = $(".uvIndex");

searchBtn.on("click", function(event){
    event.preventDefault();
    var city = searchCity.val();
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
$.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
      console.log(response);



  });
});