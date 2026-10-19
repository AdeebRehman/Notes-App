import React,{useState} from "react";

import "../index.css";
import { Delete as DeleteIcon } from "@mui/icons-material";

function Notes(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [draft, setDraft] = useState({
        title: props.title,
        content: props.content,
    });

    function editing() {
        setIsEditing(true);
        setDraft({
            title:props.title,
            content:props.content,
        });
    }
    function cancelHandler(){
        setIsEditing(false);
        setDraft({
            title:props.title,
            content:props.content,
        })
    }

    function noteEditor(event){
        const {name,value}=event.target;
        setDraft((prevDraft)=>{
            return {...prevDraft,[name]:value};
        })

    }
    function saveHandler() {
        props.onEdit(props.id,draft)
        setIsEditing(false);
    }

    function handleClick() {
        props.onDelete(props.id);
    }
    return (
         <div className="note">
            {isEditing ? (
                <>
                    <input
                        name="title"
                        value={draft.title}
                        onChange={noteEditor}
                    />
                    <textarea
                        name="content"
                        value={draft.content}
                        onChange={noteEditor}
                        rows="3"
                    />
                    <button onClick={saveHandler}>Save</button>
                    <button onClick={cancelHandler}>Cancel</button>
                </>
            ) : (
                <>
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                    <button onClick={editing}>Edit</button>
                    <button onClick={handleClick}><DeleteIcon /></button>
                </>
            )}
        </div>
    );
}
export default Notes;