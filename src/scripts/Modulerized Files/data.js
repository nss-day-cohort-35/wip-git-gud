/*This file will be used for Fetch and Post Calls to API. Example from journal below: 
const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/journalEntries")
            .then(response => response.json())
    }
} */



//  const getMeetUps = () =>

//this is a fetch call to bring in the eventbrite events//

fetch(`https://www.eventbriteapi.com/v3/events/search/?q=sports&location.address=nashville&token=LCTRAOJH5AJUT32CZU2C`, {
"headers": {
    "Authorization": "Bearer LCTRAOJH5AJUT32CZU2C",
      "Accept": "application/json"
   }
 })
 .then(response => response.json())
 .then(parsedResponse => 
     console.table(parsedResponse))

//then 

