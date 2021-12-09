import React from 'react';
import { ToDoRow } from "./todoRow";
import { deleteFolder } from '../api/folder';
import { saveToDo } from '../api/todo';
import '../App.css';

export const FolderRow = ({id, folder}) => {
    const name = folder.name;
    const todosList = folder.todos;
    const folderId = folder.id;

    return (
        <>
            <tr>
                <th className="align-middle" scope="row">{id}</th>
                <td className="align-middle">{name}</td>
                <td className="align-middle">{todosList.length}</td>
                <td className="align-middle flex-row" width="250px" >
                    <button 
                        className="btn btn-outline-primary " 
                        style={{width: "5em", height: "2.5em", justifyContent: "center", marginRight: ".5em"}} 
                        type="button" data-bs-toggle="collapse" data-bs-target={"#carpeta" + id + ""}
                        aria-expanded="true" aria-controls={"carpeta" + id + ""} 
                    >
                        View
                    </button>
                    <button 
                        onClick={() => removeFolder(folderId)}
                        type="button" className="btn btn-outline-danger"
                        style={{width: "5em", height: "2.5em"}}
                    >
                        Remove
                    </button>
                </td>
            </tr>
            <tr colSpan="4">
                <td id={"carpeta" + id + ""} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" colSpan="5">
                    <div id="toDoContainer" className="container" style={{paddingLeft: "3em", paddingRight: "20vw"}}>
                        
                        <table id={"toDoList" + folder.id} className="table" width="50%" style={{minWidth: "380px"}}>
                            <tbody>
                                {
                                    showToDos(todosList)
                                }
                                
                            </tbody>
                        </table>
                        <div id="addToDo" className="input-group mb-2 " style={{width: "100%", margin: "auto 0 auto auto"}}>
                            <input id={"input-newToDo" + folderId} type="text" className="form-control" placeholder="Add new task" aria-label="" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button 
                                    onClick={() => createNewToDo(folderId)} id="btn-newToDo" className="btn btn-success btn-circle btn-xl" type="button" ><p style={{marginTop: "-12px"}}>+</p></button>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
}

function showToDos(todosList) {
    return (
        todosList.map((todo, i) => {
            return (
                showToDo(todo, i)
            )
        })
    )
}

function showToDo(todo, key){
    return (
      <ToDoRow id={`toDoRow${todo.id}`} key={key} todo={todo}/>
    )
}

async function removeFolder(folderId){
    const response = await deleteFolder(folderId).then(res => res.json);
    if(response)
        window.location.reload();
}

async function createNewToDo(folderId){
    const task = document.querySelector(`#input-newToDo${folderId}`).value
    if(task.trim() !== ""){
        await saveToDo(folderId, task);
        window.location.reload();
    }
}