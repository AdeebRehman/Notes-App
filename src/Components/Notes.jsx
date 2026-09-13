import React from "react";
import "../index.css";

function Notes(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button>DELETE</button>
        </div>
    );
}
export default Notes;