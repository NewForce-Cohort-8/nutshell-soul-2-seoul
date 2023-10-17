import {LogOutButton} from "./auth/LogoutButton.js"
import { TaskForm } from "./auth/TaskForm.js"
import { NewsCard, NewsForm } from "./NewsForm.js"
import { ChatsCard, Chatbox } from "./Chatbox.js"

export const Nutshell = () => {
  return `
  <h1>Nutshell</h1>
  <section class="chatBox">
  ${Chatbox()}
  ${ChatsCard()}
  </section>



  <section class="newsForm">
  ${NewsForm()}
  ${NewsCard()}
  </section>
  <section class="taskForm">
  ${TaskForm()}
  </section>
  `
      // Render all your UI components here
}

// ${LogOutButton()}