import React from "react";
import "../index.css";
import { Delete as DeleteIcon } from "@mui/icons-material";
console.log("DeleteIcon is:", DeleteIcon);

function Notes(props){
    function handleClick(){
        props.onDelete(props.id);
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
    );
}
export default Notes;