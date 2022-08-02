var searchInput = document.querySelector("#search-input");
var searchBtn = document.getElementById("search");

var displayHere = document.getElementsByClassName("displayHere");
var aiq = document.getElementById("aiq");
var signUpButton = document.querySelector("#sign-up");
//home to clear everything
var home = document.querySelector("#home");
var apiKeyAirPol = "f2c131fc5bc12a5320fc9c5062b3a515";
var apiKeyrapid = "a5b6cc0348mshfaee69ca264bbb3p1c570bjsn196b9a08b7ab";
// var apiKeyrapid = "4921114ff5msh13999a2c0ea91c9p1de491jsn6f33084fa126";

//mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

//for search
var handleFormSubmit = function (event) {
  console.log("button clicked");
  event.preventDefault();

  var city = searchInput.value.trim();
  if (city) {
    getCitySearch(city);

    if (!city) {
      alert("Please enter a City name");
    }
  }
};
// First API for latitude & longitude information and city landmark picture.
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

      var latitude =
        data.data.Typeahead_autocomplete.results[0].detailsV2.geocode.latitude;
      console.log(latitude);
      var longitude =
        data.data.Typeahead_autocomplete.results[0].detailsV2.geocode.longitude;

      //ref https://rapidapi.com/apidojo/api/travel-advisor/
      var urlRestaurant = `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?rapidapi-key=${apiKeyrapid}&latitude=${latitude}&longitude=${longitude}&limit=10&currency=USD&distance=2&open_now=false&lunit=mi&lang=en_US`;
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
            if (pRestaurantName === undefined) {
              var pRestaurantName = "now closed";
            } else {
              var pRestaurantName = results.data[i].name;
            }
            var pOpen = results.data[i].open_now_text;
            if (pOpen === undefined) {
              pInfo.textContent = `${pRestaurantName}, Closed Now`;
            } else {
              pInfo.textContent = `${pRestaurantName}, ${pOpen}`;
            }

            var pInfo1 = document.createElement("p");
            pInfo1.classList.add("subtitle");

            var pInfoPhone = document.createElement("p");
            var pPhone = results.data[i].phone;
            if (pPhone === undefined) {
              pInfoPhone.textContent = `no. not provided`;
            } else {
              pInfoPhone.textContent = `Ph no:${pPhone}`;
            }
            var pInfo2 = document.createElement("p");
            var pLocation = results.data[i].address;
            pInfo2.textContent = `Address:${pLocation}`;
            var pInfo3 = document.createElement("p");
            var pInfo3a = document.createElement("a");
            var aWebsite = results.data[i].website;

            pInfo3a.addEventListener("click", function (event) {
              event.preventDefault();
              window.location.href = aWebsite;
            });

            pInfo3a.setAttribute("src", aWebsite);

            pInfo3a.textContent = aWebsite;
            pInfo3.textContent = `Website:`;
            pInfo3.appendChild(pInfo3a);
            console.log(pInfo3);

            var pInfo4 = document.createElement("p");
            var pRate = results.data[i].rating;

            if (pRate === undefined) {
              pInfo4.textContent = `No Rating`;
            } else {
              pInfo4.textContent = `Rating:${pRate}`;
            }

            divInfo1.appendChild(pInfo);
            divInfo1.appendChild(pInfo1);
            divInfo1.appendChild(pInfoPhone);
            divInfo1.appendChild(pInfo2);
            divInfo1.appendChild(pInfo3);
            divInfo1.appendChild(pInfo4);
            divInfo.appendChild(divInfo1);
            displayHere[0].appendChild(divInfo);
          }
        });
      // Air-pollution information
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
          pairQ.classList.add("title");
          var airQ = data.list[0].main.aqi;
          pairQ.textContent = `AirQuality Index:${airQ}
          `;
          var dateNow = document.createElement("p");
          dateNow.classList.add("title");
          var dateDt = data.list[0].dt;
          var milliseconds = dateDt * 1000;
          var date = new Date(milliseconds);
          var humanDateFormattoday = date.toLocaleDateString("en-us");
          dateNow.textContent = humanDateFormattoday;
          console.log(date);
          displayHere[0].appendChild(dateNow);
          dairQ.appendChild(pairQ);
          aiq.appendChild(dairQ);
          if (airQ <= 50) {
            //favourable
            pairQ.style.background = "green";
            pairQ.style.color = "white";
            var infoairQ = document.createElement("p");
            infoairQ.classList.add("title");
            var cityNamehere = search.toUpperCase();
            infoairQ.textContent = `Good Day to be out Today in ${cityNamehere}`;
            dairQ.appendChild(infoairQ);
            displayHere[0].appendChild(dairQ);
          } else if (airQ > 51 && airQ <= 100) {
            //moderate
            pairQ.style.background = "yellow";
            pairQ.style.color = "white";
            var infoairQ = document.createElement("p");
            infoairQ.classList.add("title");
            infoairQ.textContent = `May cause minor breathing discomfort to sensitive people.`;
            dairQ.appendChild(infoairQ);
            displayHere[0].appendChild(dairQ);
          } else {
            //severe
            pairQ.style.background = "red";
            pairQ.style.color = "white";
            var infoairQ = document.createElement("p");
            infoairQ.classList.add("title");
            infoairQ.textContent = `May cause breathing discomfort to people with lung disease such as asthma, and discomfort to people with heart disease, children and older adults.`;
            dairQ.appendChild(infoairQ);
            displayHere[0].appendChild(dairQ);
          }
        });
    });
}

searchBtn.addEventListener("click", handleFormSubmit);

home.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  searchInput.value = " ";
  displayHere[0].textContent = " ";
  aiq.textContent = " ";
});
