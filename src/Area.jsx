import React, { useState } from "react";

function Area(props){

    const[note,setnote] = useState({title:"",content:""})

    function handle(event){
        const {name,value} = event.target;

        setnote((prevValue)=>{
            return {
                ...prevValue,
            [name] : value

            }

        })

    }

    function addnote(event){

        event.preventDefault();
        props.onAdd(note);


    }

    return <div>
        <form>
            <input onChange={handle} name="title" placeholder="Title" value={note.title} />
            <textarea onChange={handle} name="content" placeholder="Your note..." rows="3" value={note.content} />
            <button onClick={addnote}>Add</button>
        </form>
    </div>
}

export default Area;