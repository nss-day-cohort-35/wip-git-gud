
//This is the web component 

let concertComponent = (concerts) => {
    console.log("concertComponent function is called")
    return `
    <div>
        <h2 id="${concerts.id}">${concerts.name}</h2>
        <h3>${concerts._embedded.venues[0].name}
        <h3>${concerts.dates.start.localDate}</h3>
        <h3>${concerts.dates.start.localTime}</h3>
        <button class="save_button" id="concertSaveButton--${concerts.id}">Save to Itinerary</button>
         </div>`
    }

//passes what it is given to the DOM
let concertResultSection = document.querySelector("#concertsResults")
let addToConcertDom = (htmlString) => {
    concertResultSection.innerHTML += htmlString; 
    } 

// event listener which combines with dropdown html to bring results for each selection

document.querySelector(".concertsButton").addEventListener("click", function () {
concertType = document.querySelector(".searchByGenre").value
concertGrab(concertType);

})

concertResultSection.addEventListener("click", event => {
    if (event.target.id.startsWith("concertSaveButton")){
        console.log("button click")
        let concertID = event.target.id.split("--")[1]
        console.log(concertID)

        let concertName = document.getElementById(concertID)
        console.log(concertName)
        let itinerarySection = document.getElementById("concertItinerary")
        itinerarySection.appendChild(concertName)
    }
})




//this is a fetch call to bring in the concerts in Nashville//

    function concertGrab(genre) {
     fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=qOiGAYZwGThoAEA10iytRGEa3c4RPX6K&classificationName=${genre}`)
        .then(response => response.json())
        .then(parsedConcert => 
         parsedConcert._embedded.events.forEach(concertObj => {
             let responseAsHTML = concertComponent(concertObj)
             addToConcertDom(responseAsHTML)
        }))
    }


// itinerary webcomponent 

let concertItineraryHTML = (concerts) => {
    return `Concert: ${concerts.name}`
}



//itiinerary DOM injector

    let postConcertToDom = (concertItineraryHTML) => {
    let concertItineraryContainerEl = document.querySelector(".itineraryContainer")
    concertItineraryContainerEl.innerHTML = concertItineraryHTML
    }
