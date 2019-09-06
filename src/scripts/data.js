/*This file will be used for Fetch and Post Calls to API. Example from journal below: 
const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/journalEntries")
            .then(response => response.json())
    }
} */


// const apiParks = {
//     getParks: function() {
//         return fetch("https://data.nashville.gov/resource/74d7-b74t.json")
//         .then(response => response.json())
//         .then(parsedResponse => {
//             //console.table makes the information look way better//
//             console.table(parsedResponse)
//     })} 


    // fetch("https://data.nashville.gov/resource/74d7-b74t.json")
    // .then(response => response.json())
    // .then(parsedResponse => {
    //     //console.table makes the information look way better//
    //     console.table(parsedResponse)

//     //function to push input to database.json//
// const apiParks = {
//     getParks: function() {
//         return fetch("https://data.nashville.gov/resource/74d7-b74t.json")
//         .then(response => 
//             response.json()
//         );
//     },
//     saveJournalEntry: function(entry) {
//         return fetch("http://localhost:8088/journalArray", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(entry)
//         });
//     }
// };



// const apiParks = {
//     getParks: function() {
//         return fetch("https://data.nashville.gov/resource/74d7-b74t.json")
//         .then(response => 
//             response.json()
//         );
//     }};


//  //Events Fetch Call 
//  fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=qOiGAYZwGThoAEA10iytRGEa3c4RPX6K")
//  .then(foods => foods.json())
//  .then(parsedFoods => {
//      console.log(parsedFoods)
//  })


 const parkFetcher = () => 
     fetch(`https://data.nashville.gov/resource/74d7-b74t.json?$$app_token=i4q8JB7V9yqEY0Pt9c3JmDswS`)
        .then(response => response.json())
        .then(parsedResponse => 
            console.log(parsedResponse)
        )
        
