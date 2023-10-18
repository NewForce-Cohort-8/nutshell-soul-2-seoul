import {LogOutButton} from "./auth/LogoutButton.js"
import { TaskCard, TaskForm } from "./auth/TaskForm.js"
import { NewsCard, NewsForm } from "./NewsForm.js"
import { ChatsCard, Chatbox } from "./Chatbox.js"




export const Nutshell = () => {
  LogOutButton()
  return `<style>
  div.chatBox {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    background: rgb(63,199,251);
    background: radial-gradient(circle, rgba(63,199,251,1) 0%, rgba(150,70,252,1) 100%);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    width: 600px;
    height: 150px;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
    margin: 50px;
    padding: 30px;
  }
  </style>
 
  <h1>Nutshell</h1>
  <div class="chatBox">
  ${ChatsCard()}
  ${Chatbox()}
 
  </div>

  <div> 
  
  </div>

  <section class="newsForm">
  ${NewsForm()}
  ${NewsCard()}

  </section>
  <section class="taskForm">
  ${TaskForm()}
  ${TaskCard()}
  </section>
  `
}

