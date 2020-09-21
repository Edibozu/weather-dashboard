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
var windSpeed = $(".windSpeed");
var uvIndex = $(".uvIndex");

// on click event when you search for a city that will return temp stats.
searchBtn.on("click", function(event){
    event.preventDefault();
    var city = searchCity.val().trim();
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
$.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
      console.log(response);
      var cityLat = response.coord.lat;
      var cityLon = response.coord.lon;
      var cityCoords = "lat=" + cityLat + "&lon=" + cityLon + "&";
      var foreCastURL = "https://api.openweathermap.org/data/2.5/onecall?" + cityCoords + "exclude=hourly,minutely&units=imperial&appid=" + apiKey;
      cityDisplay.html("<h1>Today in " + response.name + ":</h1>");
      temp.text("Current Temperature: " + response.main.temp + " °F");
      humidity.text("Humidity: " + response.main.humidity + "%");
      windSpeed.text("Wind Speed: " + response.wind.speed +  " mph");

      



  });
});