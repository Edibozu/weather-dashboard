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








var queryURl = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey
$.ajax({
    url: queryURL,
    method: "GET",
  })