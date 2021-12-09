package com.ensolvers.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ensolvers.models.Folder;
import com.ensolvers.models.ToDo;
import com.ensolvers.repositories.FolderRepository;
import com.ensolvers.repositories.ToDoRepository;

@Service
public class ToDoService {
	@Autowired
	ToDoRepository toDoRepository;
	@Autowired
	FolderRepository folderRepository;
	
	public ArrayList<ToDo> getToDo(){
		return (ArrayList<ToDo>)toDoRepository.findAll();
		
	}
	
	public ToDo saveToDo(ToDo toDo) {
		return toDoRepository.save(toDo);
	}
	
	public boolean deleteToDo(Long id) {
		ToDo todo = toDoRepository.findById(id).get();
		Folder folder = todo.getFolder();
		folder.getTodos().remove(todo);
		
		try {
			toDoRepository.deleteById(id);
			return true;
		}catch(Exception err) {
			return false;
		}
	}
	
	public boolean deleteToDos(List<ToDo> todos) {
		try {
			toDoRepository.deleteAll(todos);
			return true;
		}catch(Exception err) {
			return false;
		}
	}
	
	public ToDo updateToDo(ToDo toDo) {
		ToDo toDoToUpdate = toDoRepository.findById(toDo.getId()).get();
		
		toDoToUpdate.setDone(toDo.getDone());
		toDoToUpdate.setTask(toDo.getTask());
		
		return toDoRepository.save(toDoToUpdate);
	}
	
	public ToDo saveToDoByFolder(Long folderId, ToDo todo) {
		Folder folder = folderRepository.findById(folderId).get();
		folder.addToDo(todo);
		
		return this.toDoRepository.save(todo);
	}
}
