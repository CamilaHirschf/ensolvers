import React from 'react'
import reactDom from 'react-dom';
import { updateToDo, deleteToDo } from '../api/todo';

export const ToDoRow = ({todo}) => {
    return (
        <tr>
            <th className="align-middle" scope="row">
                <div className="form-check form-switch">
                    <input 
                        className="form-check-input" 
                        type="checkbox" value="" 
                        id={"todoDoneCheck" + todo.id}
                        defaultChecked={todo.done}
                        onChange={()=>{
                            todo.done = !todo.done
                            updateToDo(todo)
                        }}
                    /> 
                </div>
            </th>
            <td className="align-middle" id={'idTemporal' + todo.id}>{todo.task}</td>
            <td className="align-middle flex-row" width="250px" >
                <button 
                    onClick={() => editToDo(todo)}
                    type="button" className="btn btn-outline-success"
                    style={{width: "5em", height: "2.5em", marginRight: ".5em"}}
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                    Edit
                </button>
                <button 
                    onClick={() => removeToDo(todo)}
                    type="button" className="btn btn-outline-danger"
                    style={{width: "5em", height: "2.5em"}}
                >
                    Remove
                </button>
            </td>
        </tr>
    )
}

function editToDo(todo) {
    document.getElementById('exampleModalLabel').innerHTML = `Editing task: "${todo.task}"`;
    const buttonSave = document.getElementById('saveChangesToDo');
    buttonSave.onclick = () => {
        let input = document.getElementById('input-editTask')
        let newTask = input.value
        input.value = ""
        if(newTask.trim() !== ""){
            todo.task = newTask;
            updateToDo(todo)
            reactDom.render(todo.task, document.getElementById(`idTemporal${todo.id}`))
        }
    }
}

async function removeToDo(todo) {
    await deleteToDo(todo)
    window.location.reload();
}

