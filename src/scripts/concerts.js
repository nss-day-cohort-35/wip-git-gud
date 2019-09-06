
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

//passes what it is given to the DOM

let addToConcertDom = (htmlString) => {
    documentContainer.innerHTML += htmlString; 
    } 


// event listener which combines with dropdown html to bring results for each selection

document.querySelector(".concertsButton").addEventListener("click", function () {
concertType = document.querySelector(".searchByGenre").value
concertGrab(concertType);

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

