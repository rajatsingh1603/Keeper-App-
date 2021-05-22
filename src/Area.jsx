import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function Area(props){

    const[isExpanded,setExpanded] = useState(false);

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

        setnote({
            title: "",
            content: ""
          });

        event.preventDefault();
        props.onAdd(note);


    }

    function expand(){
        setExpanded(true);
    }

    return <div>
        <form className="create-note">


            {isExpanded?<input onChange={handle} name="title" placeholder="Title" value={note.title} />:null}
            <textarea onClick={expand} onChange={handle} name="content" placeholder="Your note..." rows={isExpanded?3:1} value={note.content} />
           <Zoom in={isExpanded}>

           <Fab onClick={addnote}><AddIcon /></Fab>

           </Zoom> 
        </form>
    </div>
}

export default Area;