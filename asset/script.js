var searchInput = document.querySelector("#search-input");
var searchbtn = document.getElementsByClassName("btn-info");

var apiKeyAirPol = "f2c131fc5bc12a5320fc9c5062b3a515";

var handleFormSubmit = function (event) {
  event.preventDefault();
  var city = searchInput.value.trim();
  if (city) {
    getCitySearch(city);

    if (!cityname) {
      alert("Please enter a City name");
    }
  }
};

searchbtn[0].addEventListener("click", handleFormSubmit);
