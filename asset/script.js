var searchInput = document.querySelector("#search-input");
var searchBtn = document.getElementsByClassName("is-success");
var saveBtn = document.getElementsByClassName("saveBtn");
var displayHere = document.getElementsByClassName("displayHere");
var aiq = document.getElementsByClassName("aiq");
var signUpButton = document.querySelector("#sign-up");
var emailInput = document.querySelector("#email"); // needs modal class/id
console.log(aiq);

var apiKeyAirPol = "f2c131fc5bc12a5320fc9c5062b3a515";
var apiKeyrapid = "4921114ff5msh13999a2c0ea91c9p1de491jsn6f33084fa126";

function userInput() {
  var email = localStorage.getItem("email");

  emailInput.textContent = email;
}

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("email", email);
  userInput();
});

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
  searchInput.value = " ";
  displayHere[0].textContent = " ";
  aiq.textContent = " ";
  var urlLocation = `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?rapidapi-key=${apiKeyrapid}&query=${search}&lang=en_US&units=mi`;
  fetch(urlLocation)
    //provided by rapid
    .then((response) => response.json())

    .then(function (data) {
      console.log(data);
      var restaurant =
        data.data.Typeahead_autocomplete.results[0].image.photo.photoSizes[7]
          .url;
      console.log(restaurant);

      var div = document.createElement("div");
      div.classList.add("card-image");
      var figure = document.createElement("figure");
      div.classList.add("image");
      var img = document.createElement("img");
      img.setAttribute("src", restaurant);
      figure.appendChild(img);
      div.appendChild(figure);

      displayHere[0].appendChild(div);
      // display item:
      //ref: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe
      // var imgElCurrent = document.createElement("iframe"); dont use this //use random dynamic html
      // var displayRestaurant = `https://www.tripadvisor.com${restaurantdetails}`;
      // console.log(displayRestaurant);
      // imgElCurrent.setAttribute("src", displayRestaurant);
      // imgElCurrent.setAttribute(
      //   "style",
      //   "display: block; max-width: 700px; min-width: 620px; width: 100%; height: 700px; border: 0px;"
      // );
      // displayHere[0].appendChild(imgElCurrent);
      var latitude =
        data.data.Typeahead_autocomplete.results[0].detailsV2.geocode.latitude;
      console.log(latitude);
      var longitude =
        data.data.Typeahead_autocomplete.results[0].detailsV2.geocode.longitude;

      // https://rapidapi.com/apidojo/api/travel-advisor/
      var urlRestaurant = `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?rapidapi-key=${apiKeyrapid}&latitude=${latitude}&longitude=${longitude}&limit=30&currency=USD&distance=2&open_now=false&lunit=mi&lang=en_US`;
      console.log(urlRestaurant);
      fetch(urlRestaurant)
        .then((response) => response.json())

        .then(function (results) {
          console.log(results);
          for (var i = 0; i < results.data.length; i++) {
            var divInfo = document.createElement("div");
            divInfo.classList.add("card");
            var divInfo1 = document.createElement("div");
            divInfo1.classList.add("card-content");
            var divInfo2 = document.createElement("div");
            divInfo2.classList.add("media");
            var divInfo3 = document.createElement("div");
            divInfo3.classList.add("media-content");
            var pInfo = document.createElement("p");
            pInfo.classList.add("title");
            var pRestaurantName = results.data[i].name;
            var pOpen = results.data[i].open_now_text;
            if (pOpen === undefined) {
              pInfo.textContent = `${pRestaurantName}, Closed Now`;
            } else {
              pInfo.textContent = `${pRestaurantName}, ${pOpen}`;
            }
            console.log(pRestaurantName, pOpen);
            var pInfo1 = document.createElement("p");
            pInfo1.classList.add("subtitle");
            //showing error on cuisine 0
            var pCuisine = results?.data[i]?.cuisine[0]?.name;
            // var pCuisine = data.data[i].cuisine[0].name;
            console.log(results?.data[i]?.cuisine[0]?.name);
            if (pCuisine === undefined) {
              pInfo.textContent = `No Cuisine in search`;
            } else {
              pInfo1.textContent = `Cuisine:${pCuisine}`;
            }

            console.log(pInfo1);
            var pInfo2 = document.createElement("p");
            var pLocation = results.data[i].address;
            pInfo2.textContent = `Address:${pLocation}`;
            var pInfo3 = document.createElement("p");
            var pInfo3a = document.createElement("a");
            var aWebsite = results.data[i].website;
            //something new research
            pInfo3a.addEventListener("click", function (event) {
              event.preventDefault();
              window.location.href = aWebsite;
            });

            pInfo3a.setAttribute("src", aWebsite);
            //website not being deployed on click
            pInfo3a.textContent = aWebsite;
            pInfo3.textContent = `Website:`;
            pInfo3.appendChild(pInfo3a);
            console.log(pInfo3);

            var pInfo4 = document.createElement("p");
            var pRate = results.data[i].rating;
            // var pReview = data.data[i].web_url;
            if (pRate === undefined) {
              pInfo4.textContent = `No Rating`;
            } else {
              pInfo4.textContent = `Rating:${pRate}`;
            }
            // pInfo.appendChild(pRestaurantName);
            // pInfo.appendChild(pOpen);
            divInfo1.appendChild(pInfo);
            divInfo1.appendChild(pInfo1);
            divInfo1.appendChild(pInfo2);
            divInfo1.appendChild(pInfo3);
            divInfo1.appendChild(pInfo4);
            divInfo.appendChild(divInfo1);
            displayHere[0].appendChild(divInfo);
          }
        });

      var urlAirPollution = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKeyAirPol}`;
      console.log(urlAirPollution);
      fetch(urlAirPollution)
        .then((response) => response.json())

        .then(function (data) {
          console.log(data);

          var dairQ = document.createElement("div");
          dairQ.classList.add("card");
          var dairQ1 = document.createElement("div");
          dairQ1.classList.add("card-content");
          var dairQ2 = document.createElement("div");
          dairQ2.classList.add("content");
          var pairQ = document.createElement("p");
          var airQ = data.list[0].main.aqi;
          pairQ.textContent = `AirQuality Index:${airQ}`;

          dairQ.appendChild(pairQ);
          aiq.appendChild(dairQ);
          if (airQ <= 50) {
            //favourable
            pairQ.style.background = "green";
            pairQ.style.color = "white";
            var infoairQ = document.createElement("p");
            var cityNamehere = search.toUpperCase();
            infoairQ.textContent = `Good Day to be out Today in ${cityNamehere}`;
            dairQ.appendChild(infoairQ);
            aiq.appendChild(dairQ);
          } else if (airQ > 51 && airQ <= 100) {
            //moderate
            pairQ.style.background = "yellow";
            pairQ.style.color = "white";
            var infoairQ = document.createElement("p");
            infoairQ.textContent = `Usually Sensitive people should reduce prolonged or heavy exertion outdoors`;
            dairQ.appendChild(infoairQ);
            aiq.appendChild(dairQ);
          } else {
            //severe
            pairQ.style.background = "red";
            pairQ.style.color = "white";
            var infoairQ = document.createElement("p");
            infoairQ.textContent = `Sensitive groups should reduce prolonged or heavy exertion outdoors`;
            dairQ.appendChild(infoairQ);
            displayHere[0].appendChild(dairQ);
          }
        });
    });
}

searchBtn[0].addEventListener("click", handleFormSubmit);
