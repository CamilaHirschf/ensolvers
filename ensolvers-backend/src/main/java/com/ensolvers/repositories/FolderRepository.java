package com.ensolvers.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.ensolvers.models.Folder;

@Repository
public interface FolderRepository extends CrudRepository<Folder, Long>{


}
