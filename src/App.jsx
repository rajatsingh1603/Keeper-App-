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

      function deleteItem(id){

            setNotes((prevValue=>{
                  return prevValue.filter((founditem,index)=>{
                        return index !== id;
                  })
            }))

      }

      
 
      return <div>
            <Header />

            <Area 
                  onAdd={Addnote}
            />

           
            

            {notes.map((foundItem,index) => {
                  return <Template 
                  key={index}
                  id={index}
                  title={foundItem.title} 
                  content={foundItem.content}
                  onDelete={deleteItem}
                   />

            })}

            
            

            <Footer />
            
      </div>
  
   
}

export default App;