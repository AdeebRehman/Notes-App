
import React,{useState} from "react";
import reactDom from "react-dom";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import Footer from "./Components/Footer";
import "./index.css";
import notes from "./notes.js"
import CreateArea from "./Components/CreateArea.jsx";
function App() {
  function addNote(note){
    return
  }
  return (
    <div>
      <Header ></Header>
      <CreateArea 
      onAdd={addNote}
      >
      </CreateArea>
        <Notes
        key={1}
          title="This is title"
          content="thiss is content"
        ></Notes>

      <Footer></Footer>
    </div>
  )
}
export default App;