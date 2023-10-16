import { sendNews } from "./dataAccess.js";

export const NewsForm = () => {
    let html = `<div class="field">
    <label class="label" for="newsURL">URL</label>
    <input type="text" name="newsURL" class="input" />
</div>
<div class="field">
    <label class="label" for="newsTitle">Title of Article</label>
    <input type="text" name="newsTitle" class="input" />
</div>
<div class="field">
    <label class="label" for="newsSynopsis">Synopsis</label>
    <input type="number" name="newsSynopsis" class="input" />
</div>

<button class="button" id="saveArticle">Save Article</button>`

    return html
}


// click event listener for service form
const mainContainer = document.querySelector(".dashboard")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveArticle") {
        // Get what the user typed into the form fields
        const newsURL = document.querySelector("input[name='newsURL']").value
        const newsTitle = document.querySelector("input[name='newsTitle']").value
        const newsSynopsis = document.querySelector("input[name='newsSynopsis']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            url: newsURL,
            title: newsTitle,
            synopsis: newsSynopsis
        }

        // Send the data to the API for permanent storage
        sendNews(dataToSendToAPI)
    }
})