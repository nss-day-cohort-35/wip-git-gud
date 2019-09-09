

// //looks for the first HTML element that has a class of mainContainer and stores it as a variable, this links to DOM
// const documentContainer = document.querySelector(".resultsContainer")
// console.log(documentContainer)

//This is the web component 
let meetupsWebComponent = (meetups) => {
    let id = meetups.id
    let name = meetups.name.text
    let date = meetups.start.local.split("T")[0]
    let newDate = date.split("-")
    let reversedArray = newDate.reverse()
    let reversedDate = reversedArray.join("-")
    let about = meetups.summary
    let button_id = meetups.id
    // let description = meetups.description.text
    // let url = meetups.url
    
    return `
    <div>
        <h2 id="${id}">${name}</h2>
        <h3>${reversedDate}</h3>
        <button class="save_button" id="meetupsSaveButton--${id}">Save to itinerary</button>
        </div>`
    }

/* figure out when I put <p>${about}</p> in the dom building above below h3 and above the button class the button doesn't 
show up as a button but instead just text on the same line as paragraph text*/



// let addToDomMeetups = (htmlString) => {
//     documentContainer.innerHTML += htmlString; 
//     } 

let meetupsResultsSection = document.querySelector("#meetupsResults")
let addToItineraryDom = (htmlString) => {
    meetupsResultsSection.innerHTML += htmlString;
}

//this is a fetch call to bring in the events in Eventbrite API events//
function meetupsFetcher () {
fetch(`https://www.eventbriteapi.com/v3/events/search/?categories=108&location.address=nashville&token=LCTRAOJH5AJUT32CZU2C`, {
"headers": {
    "Authorization": "Bearer LCTRAOJH5AJUT32CZU2C",
      "Accept": "application/json"
   }
 })
 .then(response => response.json())
 .then(parsedResponse => {
    console.log(parsedResponse)
     parsedResponse.events.forEach((meetupsObj, i) => {
         let responseAsHTML = meetupsWebComponent(meetupsObj, i)
         addToItineraryDom (responseAsHTML)
     })})
    }

    // if (concerts.indexOf(concert) < 10) {
    //     const concertHTML = createConcertHTML(concert);
    //     addConcertHTML(concertHTML, concertResultsContainer);


//passes what it is given to the DOM


document.querySelector(".meetupsButton").addEventListener("click", meetupsFetcher);
    //add in code to look for the variable in the dropdown 
    //<option value="overall">How are you Feeling?</option>
    //
    

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2019-09-10';



meetupsResultsSection.addEventListener("click", event => {
    if (event.target.id.startsWith("meetupsSaveButton")) {
        let meetupsID = event.target.id.split("--")[1]
        let meetupsName = document.getElementById(meetupsID)
        let itinerarySection = document.getElementById("meetupsItinerary")
        itinerarySection.appendChild(meetupsName)
    }
})