import React, { useState } from "react";

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
        event.preventDefault();
    }
    return (
        <div>
            <form>
                <input name="title" value={note.title} placeholder="Title" onChange={handleChange} />
                <textarea name="content" placeholder="Take a note.." rows="3" value={note.content} onChange={handleChange}></textarea>
                <button onClick={submitNote} >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;