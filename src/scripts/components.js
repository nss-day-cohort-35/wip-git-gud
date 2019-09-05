/* This will be used for building the html, to put on the DOM. 
Example from journal entry code below: 
const makeJournalEntryComponent = (entryObj) => {
    let newJournalObj = `
    <article>
    <title>${entryObj.conceptsTitle}</title>
    <p>${entryObj.entryDate}</p>
    <p>${entryObj.longForm}</p>
    <p>${entryObj.mood}</p>
</article>
`;
return newJournalObj;   
}; */