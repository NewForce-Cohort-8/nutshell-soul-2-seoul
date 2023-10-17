import {LogOutButton} from "./auth/LogoutButton.js"
import { NewsCard, NewsForm } from "./NewsForm.js"



export const Nutshell = () => {
  return `
  <h1>Nutshell</h1>
  <section class="newsForm">
  ${NewsForm()}
  ${NewsCard()}
  </section>
  `
      // Render all your UI components here
}

// ${LogOutButton()}