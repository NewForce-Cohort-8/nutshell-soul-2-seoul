import { getChats, sendChats, deleteChats } from "./dataAccess.js";



export const Chatbox = () => {
    let html = `
<div class="field">
    <label class="label" for="chatMessage">Message</label>
    <input type="text" name="chatMessage" class="input" />
</div>

<button class="button" id="saveChat">Send Chat</button>`

    return html
}

export const ChatsCard = () => {
    const chats = getChats()

    let html = `

    <ul>  ${
        chats.map(chatspost => {
            return `
            <div class="card">
  <div class="container">
    <p> Chat: ${chatspost.chatMessage}</p>    
    </div>
</div>
<button class="request__delete" id="chats--${chatspost.id}"> Delete </button>`
        }).join(" ")
    }  
    </ul> `
       
    return html
}


// click event listener for CHAT BOX
const mainContainer = document.querySelector(".dashboard")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("chats--")) {
        const [,chatsId] = click.target.id.split("--")
        deleteChats(parseInt(chatsId))
    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveChat") {
        // Get what the user typed into the form fields
        const chatMessage = document.querySelector("input[name='chatMessage']").value
        const date_created = new Date

        // Make an object out of the user input
        const dataToSendToAPI = {
            chatMessage: chatMessage,
            dateCreated: date_created
        }

        // Send the data to the API for permanent storage
        sendChats(dataToSendToAPI)
    }
})