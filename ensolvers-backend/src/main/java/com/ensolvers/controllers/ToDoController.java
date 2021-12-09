package com.ensolvers.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ensolvers.models.ToDo;
import com.ensolvers.services.ToDoService;

@RestController
@RequestMapping("/todo")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class ToDoController {
	@Autowired
	ToDoService toDoService;
	
	
	@GetMapping()
	public ArrayList<ToDo> getToDo(){
		return toDoService.getToDo();
	}
	
	@PostMapping()
	public ToDo saveToDo(@RequestBody ToDo todo) {
		return this.toDoService.saveToDo(todo);
	}
	
	@PostMapping(path = "/{folderId}")
	public ToDo saveToDoByFolder(@PathVariable (value = "folderId") Long folderId, @RequestBody ToDo todo) {
		return this.toDoService.saveToDoByFolder(folderId, todo);
	}
	
	@DeleteMapping(path = "/{id}")
	public String deleteToDo(@PathVariable("id") Long id) {
		boolean result=this.toDoService.deleteToDo(id);
		if(result) {
			return "La tarea se elimino correctamente";
		}
		return "No se pudo eliminar la tarea";
	}

	@PutMapping()
	public ToDo updateToDo(@RequestBody ToDo toDo) {
	    
		return toDoService.updateToDo(toDo);
	}
}
