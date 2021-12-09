package com.ensolvers.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ensolvers.models.ToDo;

public interface ToDoRepository  extends CrudRepository<ToDo, Long> {

}
