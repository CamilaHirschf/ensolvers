package com.ensolvers.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ensolvers.models.Folder;
import com.ensolvers.services.FolderService;

@RestController
@RequestMapping("/folder")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class FolderController {
	@Autowired
	FolderService folderService;
	
	@GetMapping()
	public ArrayList<Folder> getFolders(){
		return folderService.getFolders();
	}
	
	@PostMapping()
	public Folder saveFolder(@RequestBody Folder folder) {
		return this.folderService.saveFolder(folder);
	}
	@DeleteMapping(path = "/{id}")
	public boolean deleteFolder(@PathVariable("id") Long id) {
		boolean result=this.folderService.deleteFolder(id);
		return result;
	}
	
	@PutMapping()
	public Folder updateFolder(@RequestBody Folder folder) {
		return this.folderService.updateFolder(folder);
	}
}
