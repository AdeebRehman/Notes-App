import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    })
    function handleChange(event) {
        const {name,value}=event.target;
        setNote((prevNotes)=>{
            return {
                ...prevNotes,
                [name]:value
            };
        });
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    }
    return (
        <div>
            <form className="create-note">
                <input name="title" value={note.title} placeholder="Title" onChange={handleChange} />
                <textarea name="content" placeholder="Take a note.." rows="3" value={note.content} onChange={handleChange}></textarea>
                <button onClick={submitNote} ><AddIcon/></button>
            </form>
        </div>
    );
}

export default CreateArea;