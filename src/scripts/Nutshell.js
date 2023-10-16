import {LogOutButton} from "./auth/LogoutButton.js"
import { TaskForm } from "./auth/TaskForm.js"
import { NewsForm } from "./NewsForm.js"

export const Nutshell = () => {
  return `
  <h1>Nutshell</h1>
  <section class="newsForm">
  ${NewsForm()}
  </section>
  <section class="taskForm">
  ${TaskForm()}
  </section>
  `
      // Render all your UI components here
}

// ${LogOutButton()}