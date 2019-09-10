// console.log("this is working")

//looks for the first HTML element that has a class of mainContainer and stores it as a variable, this links to DOM
// const documentContainer = document.querySelector(".resultsContainer")
// console.log(documentContainer)



//This is the web component 
let restaurantsComponent = (restaurantsObj) => {
    let id = restaurantsObj.restaurant.id
    let name = restaurantsObj.restaurant.name
    let cuisines = restaurantsObj.restaurant.cuisines
    let address = restaurantsObj.restaurant.location.address
    let rating = restaurantsObj.restaurant.user_rating.aggregate_rating
    // console.log("restaurant component function is being called")
        //this is the apple pie, the DOM injector is the server
    return `
    <div>
        <h2>${name}</h2>
        <br>
        <h3>Type of Cuisine: ${cuisines}</h3> 
        <h3>${address}</h3>
        <h3>⭐️${rating}⭐️</h3>
        <button class="save_button_restaurant" id="${id}">Save to Itinerary</button>
        </div>`
}



// console.log(restaurantsComponent)

//HTML Builder for itinerary
let itineraryRestComponent = (name) => {
        return `Restaurant: ${name}`
    }
    //passes what it is given to the DOM
let addRestaurantsToDom = (htmlString) => {
    documentContainer.innerHTML += htmlString;
}

//itinerary DOM injector
let postItinToDom = (itineraryHTML) => {
    let itineraryContainerEl = document.querySelector("#restuarantItinerary")
    itineraryContainerEl.innerHTML = itineraryHTML
}

//this is a button that calls the fetch call to bring in the parks in Nashville//
document.querySelector(".restaurantsButton").addEventListener("click",
    function() {
        restaurantsType = document.querySelector(".restaurantsInput").value
        restaurantsFetcher(restaurantsType);
    })



function restaurantsFetcher(search) {
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${search}&sort=rating&apikey=487982b1173d845c11c1a0a51318b411`)
        .then(response => response.json())
        .then(parsedResponse => {
            // console.log(parsedResponse)
            allRestaurants = parsedResponse
            if (allRestaurants.restaurants.length > 0) {
                allRestaurants.restaurants.forEach(restaurantsObj => {
                    let responseAsHTML = restaurantsComponent(restaurantsObj)
                    addRestaurantsToDom(responseAsHTML)
                })
            } else {
                documentContainer.querySelector(".restaurantContainer").innerHTML += "<p>Sorry, no results found"
            }
        })
}

//Save button
document.querySelector(".resultsContainer").addEventListener("click", function() {
    if (event.target.classList.contains("save_button_restaurant")) {
        let clickId = event.target.id
        fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${clickId}&apikey=487982b1173d845c11c1a0a51318b411`)
            .then(response => response.json())
            .then(parsedResponse => {
                // console.log(parsedResponse)
                // let restSelection = document.querySelector("#restaurantItinerary")
                let restaurantItineraryName = parsedResponse.name
                // console.log(restaurantItineraryName)
                let itinerary = itineraryRestComponent(restaurantItineraryName)
                postItinToDom(itinerary)

            })
    }
})