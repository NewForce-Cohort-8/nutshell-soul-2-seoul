import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { fetchNews } from "./dataAccess.js"
import { fetchChats } from "./dataAccess.js"
import { LogOutButton } from "./auth/LogoutButton.js"

const mainContainer = document.querySelector(".dashboard")

const render = () => {
    fetchNews()
    .then(() => fetchChats())
    .then(
        () => {
            mainContainer.innerHTML = Nutshell()
        }
    )
}


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
    render()
}