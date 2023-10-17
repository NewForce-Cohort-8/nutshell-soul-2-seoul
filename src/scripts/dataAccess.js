// variable to store state after fetching from API
const applicationState = {
    "news": [],
    "events": [],
    "tasks": [],
    "chats": []
}

const API = "http://localhost:8080"

const mainContainer = document.querySelector(".dashboard")

// fetch request data from API
export const fetchNews = () => {
    return fetch(`${API}/news`)
        .then(response => {return response.json()})
        .then(
            (userNewsPost) => {
                // Store the external state in application state
                applicationState.news = userNewsPost
            }
        )
}

// export news in application state to make data renderable to HTML
export const getNews = () => {
    return applicationState.news.map(newspost => ({...newspost}))
}


// sends news post made by user in browser to API and then refactored to json database
export const sendNews = (userNewsPost) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userNewsPost)
    }


    return fetch(`${API}/news`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

// deletes news from API/json database which also removes the request from the browser 
export const deleteNews = (id) => {
    return fetch(`${API}/news/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}



// fetch request data from API
export const fetchTasks = () => {
    return fetch(`${API}/tasks`)
    .then(response => {return response.json()})
    .then(
        (serviceRequests) => {
            // Store the external state in application state
            applicationState.requests = serviceRequests
        }
        )
    }
        // export tasks in application state to make data renderable to HTML
        export const getTasks = () => {
            return applicationState.tasks.map(taskpost => ({...taskpost}))
        }

        



//chats 

// fetch request data from API
export const fetchChats = () => {
    return fetch(`${API}/chats`)
        .then(response => {return response.json()})
        .then(
            (userChatsPost) => {
                // Store the external state in application state
                applicationState.chats = userChatsPost
            }
        )
}

// export chats in application state to make data renderable to HTML
export const getChats = () => {
    return applicationState.chats.map(chatspost => ({...chatspost}))
}


// sends chats post made by user in browser to API and then refactored to json database
export const sendChats = (userChatsPost) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTaskPost)
    }
    return fetch(`${API}/chats`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

// deletes task from API/json database which also removes the request from the browser 
export const deleteTask = (id) => {
    return fetch(`${API}/tasks/${id}`, { method: "DELETE" })}
// deletes chats from API/json database which also removes the request from the browser 
export const deleteChats = (id) => {
    return fetch(`${API}/chats/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

// sends tasks post made by user in browser to API and then refactored to json database
export const sendTasks = (userTasksPost) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTaskPost)
    }
    return fetch(`${API}/tasks`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
