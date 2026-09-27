import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {
    const [isExpanded , setExpanded]=useState(false);

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
    function expand(){
        setExpanded(true);
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded &&(<input name="title" value={note.title} placeholder="Title" onChange={handleChange} />)}
                <textarea name="content" placeholder="Take a note.." rows={isExpanded? 3:1} value={note.content} onChange={handleChange} onClick={expand}></textarea>
                <Zoom in={isExpanded}><Fab onClick={submitNote} ><AddIcon/></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;