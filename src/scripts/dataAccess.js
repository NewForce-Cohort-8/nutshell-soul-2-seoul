// variable to store state after fetching from API
const applicationState = {
    "news": [],
    "chat": [],
    "events": [],
    "tasks": []
}

const API = "http://localhost:8080"

// fetch request data from API
export const fetchNews = () => {
    return fetch(`${API}/news`)
        .then(response => {return response.json()})
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
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
