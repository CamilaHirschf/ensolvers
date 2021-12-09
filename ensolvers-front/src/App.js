import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { FolderRow } from './components/folderRow';
import { getFolders, saveFolder } from './api/folder'
import { useEffect, useState } from 'react';

function App() {
  const [folderList, setFolderList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getFolders()
      .then(res =>{
        if(mounted){
          setFolderList(res)
        }
      })
    return () => mounted = false;
  }, [])
  
  return (
    <>
      <nav id="header" className="site-header sticky-top py-1 bg-dark">
          <div className="container d-flex flex-column flex-sm-row justify-content-center">
              <h4 className="text-light" >Ensolvers</h4>
          </div>
      </nav>

      <div className="container" style={{marginTop: "2em"}}>
        
        <div id="addFolder" className="input-group mb-2" style={{width: "50%", minWidth: "200px", margin: "auto 0 2em auto"}}>
          <input id="input-newFolder" type="text" className="form-control" placeholder="Add new folder" aria-label="" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button 
              id="btn-newFolder" 
              className="btn btn-secondary" 
              type="button"
              onClick={() => createNewFolder()}
            >
              Add
            </button>
          </div>
        </div>

        <table className="table table-striped" style={{maxWidth: "100%"}}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Tasks</th>
            </tr>
          </thead>
        
          <tbody className="accordion accordion-flush" id="accordionExample">
              {
                showFolders(folderList)
              }
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input id="input-editTask" type="text" className="form-control" placeholder="Edit task" aria-label="" aria-describedby="basic-addon2"/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button id="saveChangesToDo" type="button" data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

function showFolders(folders) {
  return (
    folders.map((folder, i) => {
      return (
        showFolder(folder, i+1)
      )
    })
  )
}

function showFolder(folder, id){
  return (
    <FolderRow key={id} id={id} folder={folder} />
  )
}

function createNewFolder(){
  const name = document.querySelector('#input-newFolder').value
  if(name.trim() !== ""){
    saveFolder(name);
    window.location.reload();
  }
}

export default App;
