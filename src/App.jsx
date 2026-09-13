
import React from "react";
import reactDom from "react-dom";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import Footer from "./Components/Footer";
import "./index.css";
import notes from "./notes.js"
import CreateArea from "./Components/CreateArea.jsx";
function App() {
  return (
    <div>
      <Header ></Header>
      <CreateArea>
      </CreateArea>

      {notes.map(notesItem => (
        <Notes
          key={notesItem.key}
          title={notesItem.title}
          content={notesItem.content}
        ></Notes>
))}
      <Footer></Footer>
    </div>
  )
}
export default App;