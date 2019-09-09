console.log("this is working")

//looks for the first HTML element that has a class of mainContainer and stores it as a variable, this links to DOM
const documentContainer = document.querySelector("#parksContainer")
console.log(documentContainer)


//This is the web component 
let parkComponent = (parks, index) => {
    let name = parks.park_name
    let address = parks.mapped_location.human_address
    let note = parks.notes
    let parkFeatureComp = document.querySelector("#parkFeature").value
    let parkId = index 
    // let idPark = parks.park_name.split(" ")[0]

    console.log("parkcomponent funnction is called")
    return `
    <section id="parkComponent--${parkId}">
        <h2 id="parkName--${parkId}">Name: ${name}</h2>
        <h2>Address: ${address}</h2>
        <p>Notes: ${note}</p>
        <p>Major Feature ${parkFeatureComp}</p>
        <button class="save_button_parks" id="parkSave--${parkId}">Save to Itinerary</button>
        </section>`;
 
}
console.log(parkComponent)

//HTML Builder for itinerary
let itineraryParkComponent = (name) => {
    return `Park: ${name}`
}

//passes what it is given to the DOM
let addToDom = (htmlString) => {
    documentContainer.innerHTML += htmlString;
}

//itinerary DOM injector
let postItinParkToDom = (itineraryParkHTML) => {
    let itineraryContainerParkEL = document.querySelector(".itineraryContainer")
    itineraryContainerParkEL.innerHTML = itineraryParkHTML
}

//this is the button that defines parkType as the input from the dropdown, then calls the fetch call
document.querySelector(".parksButton").addEventListener("click", function() {
        parkType = document.querySelector("#parkFeature").value
        parkFetcher(parkType);
    })

    //this is the fetch call that queries the API passing the parkType as the input
function parkFetcher(parkArgument) {
    fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${parkArgument}=Yes&$$app_token=i4q8JB7V9yqEY0Pt9c3JmDswS`)
        .then(response => response.json())
        .then(parsedResponse =>
            parsedResponse.forEach((parkObj, index) => {
                let responseAsHTML = parkComponent(parkObj, index)
                addToDom(responseAsHTML)
            }))
}

//save button v2
document.querySelector(".resultsContainer").addEventListener("click", event => {
    console.log("click", event)
    if(event.target.id.startsWith("parkSave")){
        let parkSelection = document.querySelector("#parkItinerary")
        let parkId = event.target.id.split("--")[1]
        console.log(document.querySelector(`#parkName--${parkId}`).textContent)
        let parkTitle = document.getElementById(`parkName--${parkId}`).textContent
        console.log(parkTitle)
        parkSelection.innerHTML+= parkTitle
    }
})

// //Save button v1
// document.querySelector(".resultsContainer").addEventListener("click", function() {
//     if (event.target.classList.contains("save_button_Park")) {
//         let clickId = event.target.id
//         fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${clickId}&apikey=487982b1173d845c11c1a0a51318b411`)
//             .then(response => response.json())
//             .then(parsedResponse => {
//                 console.log(parsedResponse)
//                 let restaurantItineraryName = parsedResponse.name
//                 console.log(restaurantItineraryName)
//                 let itinerary = itineraryRestComponent(restaurantItineraryName)
//                 postItinToDom(itinerary)

//             })
//     }
// })

//example query
// https://data.nashville.gov/resource/74d7-b74t.json?dog_park=Yes&$$app_token=i4q8JB7V9yqEY0Pt9c3JmDswS
//example query with the variable of parkTYPE
// `https://data.nashville.gov/resource/74d7-b74t.json?${parkTYPE}=Yes&$$app_token=i4q8JB7V9yqEY0Pt9c3JmDswS`


// const parksNashville = (parksInNash) => {
//     return `
//     <h4 id="${parksInNash.park_name.split(" ")[0]}">${parksInNash.park_name}</h4>
//     <p>${parksInNash.mapped_location_address}</p>
//     <p>${parksInNash.mapped_location_city}, ${parksInNash.mapped_location_state}</p>
//     <button type="button" id="parksSaveButton--${parksInNash.park_name.split(" ")[0]}">Save</button> 
//     `
// } 

