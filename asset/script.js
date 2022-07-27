var searchInput = document.querySelector("#search-input");
var searchbtn = document.getElementsByClassName("is-success");
var displayHere = document.getElementsByClassName("displayHere");
var aiq = document.getElementsByClassName("aiq");
console.log(aiq);

var apiKeyAirPol = "f2c131fc5bc12a5320fc9c5062b3a515";
var apiKeyrapid = "4921114ff5msh13999a2c0ea91c9p1de491jsn6f33084fa126";

var handleFormSubmit = function (event) {
  console.log("button clicked");
  event.preventDefault();
  var city = searchInput.value.trim();
  if (city) {
    getCitySearch(city);
    //need to change this to module
    if (!city) {
      alert("Please enter a City name");
    }
  }
};
function getCitySearch(search) {
  var urlLocation = `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?rapidapi-key=${apiKeyrapid}&query=${search}&lang=en_US&units=mi`;
  fetch(urlLocation)
    //provided by rapid
    .then((response) => response.json())

    .then(function (data) {
      console.log(data);
      var restaurant = data.data.Typeahead_autocomplete.results[8];
      console.log(restaurant);
      var restaurantdetails =
        data.data.Typeahead_autocomplete.results[8].route.nonCanonicalUrl;
      console.log(restaurantdetails);
      // display item:
      //ref: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe
      // var imgElCurrent = document.createElement("iframe"); //use random dynamic html
      var displayRestaurant = `https://www.tripadvisor.com${restaurantdetails}`;
      console.log(displayRestaurant);
      imgElCurrent.setAttribute("src", displayRestaurant);
      imgElCurrent.setAttribute(
        "style",
        "display: block; max-width: 700px; min-width: 620px; width: 100%; height: 700px; border: 0px;"
      );
      displayHere[0].appendChild(imgElCurrent);
      var latitude =
        data.data.Typeahead_autocomplete.results[0].detailsV2.geocode.latitude;
      console.log(latitude);
      var longitude =
        data.data.Typeahead_autocomplete.results[0].detailsV2.geocode.longitude;
      var urlAirPollution = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKeyAirPol}`;
      console.log(urlAirPollution);
      fetch(urlAirPollution)
        .then((response) => response.json())

        .then(function (data) {
          console.log(data);
          // var div = document.createElement("div");
          // div.classList.add("media-content");
          var pairQ = document.createElement("p");
          var airQ = data.list[0].main;
          var displayairQ = JSON.stringify(airQ);
          pairQ.textContent = displayairQ;
          // console.log(displayairQ);
          // div.appendChild(displayairQ);
          aiq[0].appendChild(displayairQ);
        });
    });
}

searchbtn[0].addEventListener("click", handleFormSubmit);
