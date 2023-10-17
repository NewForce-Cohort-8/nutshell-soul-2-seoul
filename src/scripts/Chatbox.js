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
            <style>
            div.Chatcontainer {
              background-color: #e3f3fc;
              
              width: 150px;
              height: auto;
              text-align: center;
              box-shadow: rgba(0, 0, 0, 0.40) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
              border-radius: 18px;
              padding: 2px;
            }
          </style>
  <div class="Chatcontainer">
    <p> Chat: ${chatspost.chatMessage}</p>    
    </div>
</div>
<button class="request__delete" id="chats--${chatspost.id}"> X </button>`
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