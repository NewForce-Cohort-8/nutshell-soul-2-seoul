import { LoginForm } from "./LoginForm.js"
import { RegisterForm } from "./RegisterForm.js"

const eventHub = document.querySelector(".auth--logout")
const contentTarget = document.querySelector(".auth--logout")

export const LogOutButton = () => {
    contentTarget.innerHTML = `<button id="logout-button">Log Out</button>`
}

eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id === "logout-button"){
        // clear session storage
        sessionStorage.clear()

        // clear the DOM
        document.querySelector(".dashboard").innerHTML = ""
        contentTarget.innerHTML = ""
        // Reprint the login and register form
        LoginForm()
        RegisterForm()
    }
})