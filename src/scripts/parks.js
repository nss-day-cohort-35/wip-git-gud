console.log("this is working")

//looks for the first HTML element that has a class of mainContainer and stores it as a variable, this links to DOM
const documentContainer = document.querySelector(".resultsContainer")
console.log(documentContainer)


//This is the web component 
let parkComponent = (parks) => {
    let name = parks.park_name
    let address = parks.mapped_location.human_address
    let note = parks.notes
    console.log("parkcomponent funnction is called")
    return `
    <div>
        <h2>${name}</h2>
        <h2>${address}</h2>
        <p>${note}</p>
        </div>`
}

console.log(parkComponent)

//passes what it is given to the DOM
let addToDom = (htmlString) => {
    documentContainer.innerHTML += htmlString;
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
            parsedResponse.forEach(parkObj => {
                let responseAsHTML = parkComponent(parkObj)
                addToDom(responseAsHTML)
            }))
}

//example query
// https://data.nashville.gov/resource/74d7-b74t.json?dog_park=Yes&$$app_token=i4q8JB7V9yqEY0Pt9c3JmDswS
//example query with the variable of parkTYPE
// `https://data.nashville.gov/resource/74d7-b74t.json?${parkTYPE}=Yes&$$app_token=i4q8JB7V9yqEY0Pt9c3JmDswS`