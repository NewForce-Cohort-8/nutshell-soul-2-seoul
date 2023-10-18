// author(s): Hannah Thompson
// purpose of module: Creation of event listing form, function created to render the data to the DOM, and function created to delete data card from DOM

import { getEvent, sendEvent, deleteEvent } from "./dataAccess.js";

// Creation of Event Listing form
export const EventListing = () => {
    let html = `<div class="field">
    <label class="label" for="eventName">Name of Event</label>
    <input type="text" name="eventName" class="input" />
</div>
<div class="field">
    <label class="label" for="eventDate">Date of Event</label>
    <input type="date" name="eventDate" class="input" />
</div>
<div class="field">
    <label class="label" for="eventLocation">Location of Event</label>
    <input type="text" name="eventLocation" class="input" />
</div>

<button class="button" id="saveEvent">Save Event</button>`

    return html
}

// Creation of Event Card - displays data entered by user to DOM
export const EventCard = () => {
    const events = getEvent()
    const sortEventCard = events.sort((a,b) => new Date(b.date) - new Date(a.date))

    let html = `

    <ul>  ${
        sortEventCard.map(event => {
            return `
            <div class="card">
  <div class="container">
    <h4><b> Name: ${event.name}</b></h4>
    <p> Date: ${event.date}</p>
    <p> Location: ${event.location}</p>      
    </div>
</div>
<button class="request__delete" id="event--${event.id}"> Delete </button>`
        }).join(" ")
    }  
    </ul> `
       
    return html
}

// click event listener to send data to API/Json Server
const mainContainer = document.querySelector(".dashboard")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {
        // Get what the user typed into the form fields
        const eventName = document.querySelector("input[name='eventName']").value
        const eventDate = document.querySelector("input[name='eventDate']").value
        const eventLocation = document.querySelector("input[name='eventLocation']").value


        // Make an object out of the user input
        const dataToSendToAPI = {
            name: eventName,
            date: eventDate,
            location: eventLocation
        }

        // Send the data to the API for permanent storage
        sendEvent(dataToSendToAPI)
    }
})

// click event listener for news form

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("event--")) {
        const [,eventId] = click.target.id.split("--")
        deleteEvent(parseInt(eventId))
    }
})