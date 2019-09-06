console.log("this is working")

// //looks for the first HTML element that has a class of mainContainer and stores it as a variable, this links to DOM
// const documentContainer = document.querySelector(".resultsContainer")
// console.log(documentContainer)

//This is the web component 
let meetupsWebComponent = (meetups) => {
    let name = meetups.name.text
    let date = meetups.start.local.split("T")[0]
    let newDate = date.split("-")
    let reversedArray = newDate.reverse()
    let reversedDate = reversedArray.join("-")
    let about = meetups.summary
    // let description = meetups.description.text
    // let url = meetups.url
    console.log("webcomponnent funnction is called")
    return `
    <div>
        <h2>${name}</h2>
        <h3>${reversedDate}</h3>
        <p>${about}Learn More about the Event</p>
        </div>`
    }

console.log(webComponent)

let addToDomMeetups = (htmlString) => {
    documentContainer.innerHTML += htmlString; 
    } 

//this is a fetch call to bring in the parks in Eventbrite API events//
function meetupsFetcher () {
fetch(`https://www.eventbriteapi.com/v3/events/search/?categories=108&location.address=nashville&start_date.range_start=2019-09-06T02:00:00&start_date.range_end=2019-09-07T02:00:00&token=LCTRAOJH5AJUT32CZU2C`, {
"headers": {
    "Authorization": "Bearer LCTRAOJH5AJUT32CZU2C",
      "Accept": "application/json"
   }
 })
 .then(response => response.json())
 .then(parsedResponse => {
    console.log(parsedResponse)
     parsedResponse.events.forEach(meetupsObj => {
         let responseAsHTML = meetupsWebComponent(meetupsObj)
         addToDomMeetups(responseAsHTML)
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
    
// //this is a fetch call to bring in the parks in Nashville//
//     function meetupsFetcher() {
//          fetch(`https://data.nashville.gov/resource/74d7-b74t.json?$$app_token=i4q8JB7V9yqEY0Pt9c3JmDswS`)
//             .then(response => response.json())
//             .then(parsedResponse => 
//              parsedResponse.forEach(parkObj => {
//                  let responseAsHTML = webComponent(parkObj)
//                  addToDomMeetups(responseAsHTML)
//             }))
//         }

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2019-09-10';

// var string1 = "";
// var object1 = 
// {a: 1, 
//  b: 2, 
// c: 3};

// for (let property1 in object1) {
//   string1 += object1[property1];
// }

// console.log(string1);
// // expected output: "123"