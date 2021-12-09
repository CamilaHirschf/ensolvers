import { environment } from "../config/environment";

export function getFolders(){
    return fetch(`${environment.baseUrl}/folder`)
        .then(res => res.json())
}

export function saveFolder(folderName) {
    return fetch(`${environment.baseUrl}/folder`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": folderName
        })
    })
    
}

export function deleteFolder(folderId) {
    return fetch(`${environment.baseUrl}/folder/${folderId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
} 

