import { sendTask } from "./dataAccess.js";

export const TaskForm = () => {
    let html = 
    `<div class="field">
        <label class="label" for="taskDesc">Desc</label>
        <input type="text" name="taskDesc" class="input" />
    </div>
    <div class="field">
        <label class="label" for="taskCompletion">Completion</label>
        <input type="bool" name="taskCompletion" class="input" />
    </div>


<button class="button" id="saveTask">Save Task</button>`

    return html
}


// click event listener for service form
const mainContainer = document.querySelector(".dashboard")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {
        // Get what the user typed into the form fields
        const taskDesc = document.querySelector("input[name='taskDesc']").value
        const taskCompletion = document.querySelector("input[name='taskCompletion']").value
        

        // Make an object out of the user input
        const dataToSendToAPI = {
            task: taskDesc,
            completion: taskCompletion,
          
        }

        // Send the data to the API for permanent storage
        sendTask(dataToSendToAPI)
    }
})