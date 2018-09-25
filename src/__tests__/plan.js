/* APP:
Start:
- fetch providers and put them in the state
- fetch favorites and put them in the state
- If user is logged in, go directly to Welcome
- if user is not logged in, go to Home

Home:
- don't display if user is logged in
- click/hover over form input will display: "currently on ly zip code 98108 has data"
- click on search button will open the map view
- click on log in will open the login pop up

Welcome:
- display header
- display search search bar
- on search button click, go to map view

Header:
- display log in/log out Button
- display user's name if user
- in map view, display & link to "list"
- in list view, display & link to "map"
- link to "welcome" view (DayHeart)

Search:
- Filter selection

Map / List :
- display all centers
- display favorites with a different color

Map:
- load an instance of Google maps with correct coordinates
- click on a pin will display overlay if overlay not active
- no overlay displayed if no pin selected
- content of the overlay will change when clicked on a new pin

Overlay:
- display reduced details if user not logged in
- display more content if user is logged in
- close with a click
- display favorite status, change it on click

Favorites:
- if favorites: display all favorites in a slider
- navigate to the next favorite with a click
- if no favorites: display a no favorites view
