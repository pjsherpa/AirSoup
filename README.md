# AirSoup-Project 1
This readme has the following Below:
1. Project Description
2. Brain Storming our own User story and criteria.
3. Features
4. HTML
5. CSS
6. Javascript
7. Deployment
8. Screenshot of AirSoup(img:1)

Title: AirSoup

Project Description: 
Enjoy eating out, but don’t feel like breathing in a bunch of noxious fumes, smoke, or smog? Use airsoup to check the air quality of your favorite restaurants!

Brain Storming our own criteria-Outdoor Foodies:
User Story:
Our users are concerned about bushfires and air quality degrading around the world and they are the same people who love eating outside.
SO THAT users can plan a trip to eat outside depending on the air quality at present.

Acceptance Criteria:
GIVEN a Navbar with Navbar-items and city search recommended with form inputs(ref:img1).

WHEN I click on Navbar Items(ref:img2).

THEN a module appears for 4 of the 5 Navbar Items and is interactive to use eg:back button, signing in and to linkedin/ portfolio/website.

WHEN I click on Sign Up(ref:img3).

THEN a form input appears for email address to to be added. If email address added previously it will reject(ref:img4), if new email address it will accept.

WHEN I search for a city(ref:img5).

THEN I am presented with landmark picture. date,current air quality with a Background color representation  and a  message relating to it, restaurant name,tells us if its open or not, or if it is about to open soon, contact details(ph no.,address,website) and ratings(information from tripadvisor).

WHEN I view the number of restaurant.

THEN I am presented with maximum turnout 10 restaurants.

WHEN I click on Home on the first navbar item(ref:img1)

THEN I am presented with start page.

3 API’s how we used them:

Information1 derive: Location/landmark image.

Information2 derive:Restraunts data.

Information3 derive:Air Pollution index&current date.

UCB Project 1

Team -rm-rf the_competition(Phinjock(PJ)/Cassie/Dina)

Features:

1. Mobilefirstdesign:how?(ref:img6)
Every element in Bulma is mobile-first and optimizes for vertical reading, so by default on mobile: columns are stacked vertically.
2. For header The page displays an interactive navbar with 5 navbar items. When you click on Navbar items it displays an interactive module which has back button and a cross or simply click back to go back.In Mobile device navbar uses burger options(ref:img6&7), When touched it opens and closes all navbar items interact accordingly after search is made if we click Home it clears the search made to how the page originally displayed.
3. The last item on the navbar is to signup. client-side storage is used to interact with this. If email which is already provided is provided again it does not store the data. Only new email address will be stored in the array created.
4. Below Navbar page displays background image which is suitable for large and small screens the number of seats increases in larger screen and reduces in a smaller screen(ref img1&img2).
5. The page also displays form input to search for a city name or a restaurant with a search button.
6. Once city name or restaurant name provided, after search button clicked the 3 api's fetches it's data.(1.landmarkpicture,2.Date,Air Quality Index number and color indicator and then list of restaurant with its information).
7. Restaurant information includes the name of restaurant, open or not or when it is about to open, phone number,website and ratings is displayed.
8. When clicked on website it deploys to restaurant website.
9. favicons has been used for this project.

HTML:

1. HTML uses Bulma to create web-page.
2. Unique Id and classes have been setup for Dom manipulation.
3. script.js, module.js & style.css has been linked and google fonts.
4. Create root elements for data and list display.
5. Comments present in index.html

CSS:

1. Font family create using google font for h1.
2. Hover feature in use to show pointer cursor and show interaction when hover around buttons.
3. Comments present in style.css.

Javascript:

1. Create variables for elements,classes and id's to be used in functions.
2. Create localStorage to save email address
3. Function added to create new list and button within JS.
4. Addevent listener created for search.
5. Three API's used to fetch data. The first api role is to find the city name which then uses the city name to provides the latitude and longitude data with landmark picture, which is then provided to the next two api requesting for the latitude and longitude, which provides data relating restaurant and Aiq.
6. Once all requirements are met then we fetch data's required to fulfill webpage.
7. Using data create new elements and then append to the root element which was is in HTML.

Deployment:

1. live URL:https://pjsherpa.github.io/AirSoup/

2. GitHub URL:https://github.com/pjsherpa/AirSoup/

Screenshot:

img1:

<img width="1193" alt="img 1" src="https://user-images.githubusercontent.com/105903416/182284998-3d63acd2-1bea-4120-bdee-ff19a9bf9b54.png">

img2:

![img 2](https://user-images.githubusercontent.com/105903416/182285035-e9e001e2-8c10-4b68-9c69-0b5f85b9e57a.png)

img3:

![img3](https://user-images.githubusercontent.com/105903416/182285057-184bd2b0-3ba4-464c-8845-cf5543b92f6a.png)

img4:

![img 4](https://user-images.githubusercontent.com/105903416/182285073-048c39b0-9648-4db0-b526-487b6851a67a.png)

img5:

![Screen Shot 2022-08-01 at 8 21 01 PM](https://user-images.githubusercontent.com/105903416/182285115-76dc1d6a-abbe-4489-845b-c48befa751e0.png)

img6:

![Screen Shot 2022-08-01 at 8 21 19 PM](https://user-images.githubusercontent.com/105903416/182285142-7e47d000-d83c-4a99-99c2-c92d77db6a0e.png)

img7:

![Screen Shot 2022-08-01 at 8 21 29 PM](https://user-images.githubusercontent.com/105903416/182285185-9dfa4802-413d-408c-b257-8fa43f551dbd.png)



