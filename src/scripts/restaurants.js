console.log("this is working")

//looks for the first HTML element that has a class of mainContainer and stores it as a variable, this links to DOM
// const documentContainer = document.querySelector(".resultsContainer")
// console.log(documentContainer)


//This is the web component 
let restaurantsComponent = (restaurantsObj) => {
    let name = restaurantsObj.restaurant.name
    let cuisines = restaurantsObj.restaurant.cuisines
    let address = restaurantsObj.restaurant.location.address
    let rating = restaurantsObj.restaurant.user_rating.aggregate_rating
    console.log("restaurant component function is being called")
    return `
    <div>
        <h2>${name}</h2>
        <h2>${cuisines}</h2> 
        <p>${address}</p>
        <p>${rating}</p>
        </div>`
}

console.log(restaurantsComponent)

//passes what it is given to the DOM
let addRestaurantsToDom = (htmlString) => {
    documentContainer.innerHTML += htmlString;
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
            console.log(parsedResponse)
            allRestaurants = parsedResponse
            if (allRestaurants.restaurants.length > 0) {
                allRestaurants.restaurants.forEach(restaurantsObj => {
                    let responseAsHTML = restaurantsComponent(restaurantsObj)
                    addRestaurantsToDom(responseAsHTML)
                })
            } else {
                documentContainer.querySelector(".resultsContainer").innerHTML += "<p>Sorry, no results found"
            }
        })
}




// const restaurantSearch = (searchTerm) => {
//         return fetch(`https://developers.zomato.com/api/v2.1/search?q=${searchTerm}&entity_id=1138&entity_type=city&start=first&sort=rating&apikey=98b3e8584106245a199e8c4987ab27b0`)
//             .then(restaurants => restaurants.json())
//             .then(parsedRestaurants => {
//                 addFoodToDom(parsedRestaurants.restaurants)
//                 console.log(parsedRestaurants)
//             })
//     }
//     /* pulls name from the array*/
// const restaurantsNashville = (foodInNash) => {
//         return `<p>${foodInNash.restaurant.name}</p>`
//     }
//     /*display restaurant names to the dom*/
// function addFoodToDom(foodInNash) {
//     foodInNash.forEach(restaurantObj => {
//         restoContainer.innerHTML += restaurantsNashville(restaurantObj);
//     });
// }
// const restoContainer = document.querySelector("#nashFood");
// /*calls function that contains fetch*/
// restaurantSearch("");