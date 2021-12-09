package com.ensolvers.services;

import org.springframework.stereotype.Service;
import com.ensolvers.models.Folder;
import com.ensolvers.models.ToDo;
import com.ensolvers.repositories.FolderRepository;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class FolderService {
	@Autowired
	FolderRepository folderRepository;
	@Autowired
	ToDoService toDoService;
	
	public ArrayList<Folder> getFolders(){
		return (ArrayList<Folder>)folderRepository.findAll();
		
	}
	
	public Folder saveFolder(Folder folder) {
		return folderRepository.save(folder);
	}
	
	public boolean deleteFolder(Long id) {
		Folder folder = folderRepository.findById(id).get();
		
		try {
			folderRepository.deleteById(id);
			return true;
		}catch(Exception err) {
			return false;
		}
	}
	
	public Folder updateFolder(Folder folder) {
		return folderRepository.save(folder);
	}
}
