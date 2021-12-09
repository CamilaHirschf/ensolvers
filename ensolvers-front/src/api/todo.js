import { environment } from "../config/environment";

export function saveToDo(folderId, task) {
    return fetch(`${environment.baseUrl}/todo/${folderId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "task": task
        })
    })
    
}

export function updateToDo(todo) {
    return fetch(`${environment.baseUrl}/todo`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": todo.id,
            "task": todo.task,
            "done": todo.done
        })
    })
    
}

export function deleteToDo(todo) {
    return fetch(`${environment.baseUrl}/todo/${todo.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        })
    })
    
}