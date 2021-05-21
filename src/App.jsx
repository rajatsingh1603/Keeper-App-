import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Template from "./Template";
import Area from "./Area"

 


function App(props){

      const [notes,setNotes] = useState([]);

      function Addnote(note){

      setNotes(prevValue=>{
            return [...prevValue,note];
      })

      }

      
 
      return <div>
            <Header />
           
            <Area 
                  onAdd={Addnote}
            />

            {notes.map((foundItem) => {
                  return <Template title={foundItem.title} content={foundItem.content} />

            })}

            

            <Footer />
            
      </div>
  
   
}

export default App;