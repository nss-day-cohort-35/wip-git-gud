console.log("this is working")

 //looks for the first HTML element that has a class of mainContainer and stores it as a variable, this links to DOM
//  const concertContainer = document.querySelector(".resultsContainer")
//  console.log(concertContainer)


//This is the web component 
let concertComponent = (concerts) => {
    console.log("concertComponent function is called")
    return `
    <div>
        <h2>${concerts.name}</h2>
        <h3>${concerts._embedded.venues[0].name}
        <h3>${concerts.dates.start.localDate}</h3>
        <h3>${concerts.dates.start.localTime}</h3>
        </div>`
    }

console.log(concertComponent)

//passes what it is given to the DOM
let addToConcertDom = (htmlString) => {
    documentContainer.innerHTML += htmlString; 
    } 

//this is a fetch call to bring in the parks in Nashville//
document.querySelector(".concertsButton").addEventListener("click", function () {
concertType = document.querySelector(".searchByGenre").value
concertGrab(concertType);

})

//add in code to look for the variable in the dropdown 
//<option value="overall">How are you Feeling?</option>
//

function concertGrab(genre) {
     fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=qOiGAYZwGThoAEA10iytRGEa3c4RPX6K&classificationName=${genre}`)
        .then(response => response.json())
        .then(parsedConcert => 
         parsedConcert._embedded.events.forEach(concertObj => {
             let responseAsHTML = concertComponent(concertObj)
             addToConcertDom(responseAsHTML)
        }))
    }

