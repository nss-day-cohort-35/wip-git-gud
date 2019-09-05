/* This takes what is built in data.js to put on index.html   
example from journal entry below: 

const entryInfo = document.querySelector(".entryLog")

function renderJournalEntries (journalEntryArray)  {
    for (let i = 0; i < journalEntryArray.length; i++) {
        entryInfo.innerHTML += makeJournalEntryComponent(journalEntryArray[i])
    }
}  