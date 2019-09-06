console.log("this is working")

 //looks for the first HTML element that has a class of mainContainer and stores it as a variable, this links to DOM
 const documentContainer = document.querySelector(".resultsContainer")
 console.log(documentContainer)


//This is the web component 
let concertComponent = (concerts) => {
    console.log("concertComponent funnction is called")
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
let addToDom = (htmlString) => {
    documentContainer.innerHTML += htmlString; 
    } 

//this is a fetch call to bring in the parks in Nashville//
document.querySelector(".concertsButton").addEventListener("click", concertGrab);
//add in code to look for the variable in the dropdown 
//<option value="overall">How are you Feeling?</option>
//

function concertGrab(genre) {
     fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${genre}&dmaId=343&apikey=qOiGAYZwGThoAEA10iytRGEa3c4RPX6K`)
        .then(response => response.json())
        .then(parsedResponse => 
         parsedResponse.forEach(concertObj => {
             let responseAsHTML = concertComponent(concertObj)
             addToDom(responseAsHTML)
        }))
    }

// const concertGrab = (genres) => {
//     return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${genres}&dmaId=343&apikey=qOiGAYZwGThoAEA10iytRGEa3c4RPX6K`)
//     .then(response => response.json());
// };
