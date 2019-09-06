console.log("this is working")

//looks for the first HTML element that has a class of mainContainer and stores it as a variable, this links to DOM
const documentContainer = document.querySelector(".resultsContainer")
console.log(documentContainer)


//This is the web component 
let webComponent = (parks) => {
    let name = parks.park_name
    let address = parks.mapped_location.human_address
    let note = parks.notes
    console.log("webcomponnent funnction is called")
    return `
    <div>
        <h2>${name}</h2>
        <h2>${address}</h2>
        <p>${note}</p>
        </div>`
}

console.log(webComponent)

//passes what it is given to the DOM
let addToDom = (htmlString) => {
    documentContainer.innerHTML += htmlString;
}

//this is a fetch call to bring in the parks in Nashville//
document.querySelector(".parksButton").addEventListener("click", parkFetcher);
//add in code to look for the variable in the dropdown 
//<option value="overall">How are you Feeling?</option>
//

function parkFetcher() {
    fetch(`https://data.nashville.gov/resource/74d7-b74t.json?$$app_token=i4q8JB7V9yqEY0Pt9c3JmDswS`)
        .then(response => response.json())
        .then(parsedResponse =>
            parsedResponse.forEach(parkObj => {
                let responseAsHTML = webComponent(parkObj)
                addToDom(responseAsHTML)
            }))
}

//example query
// https://data.nashville.gov/resource/74d7-b74t.json?dog_park=Yes&$$app_token=i4q8JB7V9yqEY0Pt9c3JmDswS
//example query with the variable of parkTYPE
// `https://data.nashville.gov/resource/74d7-b74t.json?${parkTYPE}=Yes&$$app_token=i4q8JB7V9yqEY0Pt9c3JmDswS`