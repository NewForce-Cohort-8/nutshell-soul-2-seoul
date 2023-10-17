import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { fetchNews, fetchTasks } from "./dataAccess.js"
import { fetchChats } from "./dataAccess.js"

const mainContainer = document.querySelector(".dashboard")

const render = () => {
    fetchNews()
    .then(() => fetchChats())
    .then(() => fetchTasks())    
    .then(
        () => {
            mainContainer.innerHTML = Nutshell()
        }
    )
}

render()


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const activeUser = sessionStorage.getItem("activeUser")

if(!activeUser){
    LoginForm()
    RegisterForm()
} else {
    Nutshell()
}