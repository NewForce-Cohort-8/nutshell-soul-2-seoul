//Author: Andrew Hanks
//Puropse: Create task form, create functions to render data to the DOM, and create a function to delete data from the DOM
import { deleteTask, getTasks, sendTasks } from "../dataAccess.js";


export const TaskForm = () => {
    let html = 
    `<div class="field">
        <label class="label" for="taskDesc">Description</label>
        <input type="text" name="taskDesc" class="input" />
    </div>

    <div class="field">
    <label class="label" for="cDate">Expected Completion Date</label>
    <input type="date" name="cDate" class="input" />
    </div>



<button class="button" id="saveTask">Save Task</button>`

    return html
}
export const TaskCard = () => {
    const task = getTasks()
    const sortTaskCards = task.sort((a,b) => (b.dateCreated) - (a.dateCreated))
    let html = `

    <ul>  ${
        sortTaskCards.map(taskpost => {
            return `
            <div class="card">
  <div class="container">
    <h4><b> To-DO: </b></h4>
    <p> Description: ${taskpost.task}</p> 
    <p> Complete by: ${taskpost.completion}</p>     
    </div>
</div>
<button class="request__delete" id="tasks--${taskpost.id}"> Complete </button>`
        }).join(" ")
    }  
    </ul> `
       
    return html
}


// click event listener for service form
const mainContainer = document.querySelector(".dashboard")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {
        // Get what the user typed into the form fields
        const taskDesc = document.querySelector("input[name='taskDesc']").value
        const taskCompletion = document.querySelector("input[name='cDate']").value
        

        // Make an object out of the user input
        const dataToSendToAPI = {
            task: taskDesc,
            completion: taskCompletion,
            dateCreated: new Date
        }

        // Send the data to the API for permanent storage
        sendTasks(dataToSendToAPI)
    }
})

// click event listener for task form delete
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("tasks--")) {
        const [,tasksId] = click.target.id.split("--")
        deleteTask(parseInt(tasksId))
    }
})
