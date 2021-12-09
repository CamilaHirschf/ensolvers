package com.ensolvers.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="Folder")
public class Folder {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long id;
	
	private String name;
	
	@OneToMany(mappedBy="folder", cascade = CascadeType.REMOVE)
	private List<ToDo> todos;
	
	public Folder() {
		
	}

	public Folder(String name) {
		this.name = name;
		this.todos = new ArrayList<>();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<ToDo> getTodos() {
		return todos;
	}

	public void setTodos(List<ToDo> todos) {
		this.todos = todos;
	}

	@Override
	public String toString() {
		return "Folder [id=" + id + ", name=" + name + "]";
	}
	
	public void addToDo(ToDo nuevoToDo) {
        todos.add(nuevoToDo);
        nuevoToDo.setFolder(this);
    }
	
	//private Date date;

}
