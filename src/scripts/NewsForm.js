import { getNews, sendNews, deleteNews } from "./dataAccess.js";

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
    <input type="text" name="newsSynopsis" class="input" />
</div>

<button class="button" id="saveArticle">Save Article</button>`

    return html
}


export const NewsCard = () => {
    const news = getNews()

    let html = `

    <ul>  ${
        news.map(newspost => {
            return `
            <div class="card">
  <div class="container">
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


// click event listener for news form
const mainContainer = document.querySelector(".dashboard")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("news--")) {
        const [,newsId] = click.target.id.split("--")
        deleteNews(parseInt(newsId))
    }
})


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