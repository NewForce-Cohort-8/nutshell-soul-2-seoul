// author(s): Hannah Thompson
// purpose of module: Creation of news article form, function created to render the data to the DOM, and function created to delete data card from DOM

import { getNews, sendNews, deleteNews } from "./dataAccess.js";

// Creation of News Form
export const NewsForm = () => {
    let html = `<div class="field">
    <label class="label" for="newsURL">URL</label>
    <input type="url" name="newsURL" class="input" />
</div>
<div class="field">
    <label class="label" for="newsTitle">Title of Article</label>
    <input type="text" name="newsTitle" class="input" />
</div>
<div class="field">
    <label class="label" for="newsSynopsis">Synopsis</label>
    <input type="text" name="newsSynopsis" class="input" />
</div>

<button class="button" id="saveArticle">Save Article</button>`

    return html
}

// Creation of News Card - displays data entered by user to DOM
export const NewsCard = () => {
    const news = getNews()
    const sortNewsCards = news.sort((a,b) => new Date(b.dateCreated) - new Date(a.dateCreated))
    let html = `

    <ul>  ${
        sortNewsCards.map(newspost => {
            return `
            <div class="card">
  <div class="newsContainer">
    <h4><b> Title: ${newspost.title}</b></h4>
    <p> URL: ${newspost.url}</p>
    <p> Synopsis: ${newspost.synopsis}</p>  
    <p> Date Created: ${newspost.dateCreated}</p>     
    </div>
</div>
<button class="request__delete" id="news--${newspost.id}"> Delete </button>`
        }).join(" ")
    }  
    </ul> `
       
    return html
}

// changing div class container to newsContainer


// click event listener for news form
const mainContainer = document.querySelector(".dashboard")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("news--")) {
        const [,newsId] = click.target.id.split("--")
        deleteNews(parseInt(newsId))
    }
})

// click event listener to send data to API/Json Server
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveArticle") {
        // Get what the user typed into the form fields
        const newsURL = document.querySelector("input[name='newsURL']").value
        const newsTitle = document.querySelector("input[name='newsTitle']").value
        const newsSynopsis = document.querySelector("input[name='newsSynopsis']").value
        const date_created = new Date

        // Make an object out of the user input
        const dataToSendToAPI = {
            url: newsURL,
            title: newsTitle,
            synopsis: newsSynopsis,
            dateCreated: date_created
        }

        // Send the data to the API for permanent storage
        sendNews(dataToSendToAPI)
    }
})