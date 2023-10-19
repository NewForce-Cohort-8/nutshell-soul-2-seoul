
import { TaskCard, TaskForm } from "./auth/TaskForm.js"
import { NewsCard, NewsForm } from "./NewsForm.js"
import { ChatsCard, Chatbox } from "./Chatbox.js"
import { LogOutButton } from "./auth/LogoutButton.js"
import { EventCard, EventListing } from "./EventList.js"



export const Nutshell = () => {
  LogOutButton()
  return`
 

  <div class="chatBox">
  <h2>Chat</h2>
  ${ChatsCard()}
  ${Chatbox()}
  </div>

  
  <div class="taskForm">
  <h2>To-Do:</h2>
  ${TaskForm()}
  ${TaskCard()}
  </div>

  <div class="eventListing"> 
  <h2>Events:</h2>
  ${EventListing()}
  ${EventCard()}
  </div>

  <div class="newsForm">
  <h2>News:</h2>
  ${NewsForm()}
  ${NewsCard()}
  </div>


  `
}

