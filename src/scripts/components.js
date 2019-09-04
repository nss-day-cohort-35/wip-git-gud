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

console.log("component.js is working")

const webComponent = (name, img, description, URL, class) => {
    resultHTML: function (item) {
        return `
        <div class=${item.class}>
        <img class="componentImage"></img>
        <h2 = ${item.name}</h2>
        <p>${item.description}</p>
        <p class = ${item.url}</p>
        </div>`
    }
}

console.log(webComponent)
