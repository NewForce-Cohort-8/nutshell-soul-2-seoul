import {LogOutButton} from "./auth/LogoutButton.js"
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
  `
      // Render all your UI components here
}

// ${LogOutButton()}