
import React,{useState} from "react";
import reactDom from "react-dom";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import Footer from "./Components/Footer";
import "./index.css";

import CreateArea from "./Components/CreateArea.jsx";
function App() {
  const [notes,setNotes]=useState([])
  function addNote(note){
    setNotes(prevNotes=>{
      return [...prevNotes,note];
    })
  }

  function deleteNode(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div>
      <Header ></Header>
      <CreateArea 
      onAdd={addNote}
      >
      </CreateArea>
      {notes.map((noteItem,index) => {
        return <Notes key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNode}/>
      })}

      <Footer></Footer>
    </div>
  );
}
export default App;