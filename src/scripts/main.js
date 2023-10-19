import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { fetchChats, fetchTasks, fetchEvent,fetchNews} from "./dataAccess.js"
import { LogOutButton } from "./auth/LogoutButton.js"


const mainContainer = document.querySelector(".dashboard")
    

export const nutshellRender = () => {
    fetchChats()
    .then(() => fetchTasks())
    .then(() => fetchEvent())    
    .then(() => fetchNews())
    .then(
        () => {
            mainContainer.innerHTML = Nutshell()
        }
    )
}
    // changed order of fetch


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