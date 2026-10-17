import axios from "axios";
import React,{useState,useEffect} from "react";
import reactDom from "react-dom";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import Footer from "./Components/Footer";
import "./index.css";

import CreateArea from "./Components/CreateArea.jsx";

const url="http://localhost:3000/notes";

function App() {
  const [notes,setNotes]=useState([])

  
  useEffect(() => {
  async function fetchNotes() {
    try {
      const response = await axios.get(url);
      setNotes(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  fetchNotes();
}, []);


  async function addNote(note) {
  try {
    const response = await axios.post(url, note);
    setNotes(prevNotes => {
      return [...prevNotes, response.data];
    });
  } catch (err) {
    console.log(err);
  }
}
async function deleteNode(id){
  try{
    const response = await axios.delete(`${url}/${id}`);
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem)=>{
        return noteItem.id!==id;
      })
    })
  }
  catch (error) { console.error(error); 
    
  }
}

// async function patchNode(id){
//   try{
    
//   }
// }

  return (
    <div>
      <Header ></Header>
      <CreateArea 
      onAdd={addNote}
      >
      </CreateArea>
      {notes.map((noteItem,index) => {
        return <Notes key={noteItem.id} id={noteItem.id} title={noteItem.title} content={noteItem.content} onDelete={deleteNode}/>
      })}

      <Footer></Footer>
    </div>
  );
}
export default App;