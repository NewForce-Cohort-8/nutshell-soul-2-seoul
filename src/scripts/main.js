import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { fetchNews, fetchTasks } from "./dataAccess.js"
import { fetchChats } from "./dataAccess.js"
import { LogOutButton } from "./auth/LogoutButton.js"


const mainContainer = document.querySelector(".dashboard")

export const nutshellRender = () => {
    fetchNews()
    .then(() => fetchChats())
    .then(() => fetchTasks())    
    .then(
        () => {
            mainContainer.innerHTML = Nutshell()
        }
    )
}


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        nutshellRender()
    }
)

export const activeUser = sessionStorage.getItem("activeUser")

if(!activeUser){
    LoginForm()
    RegisterForm()
    
} else {
    nutshellRender()
}