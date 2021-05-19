import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "./notes";

 


function App(props){
 
      return <div>
            <Header />
           
            {notes.map((whole) => 
       <Note 
            key = {whole.key}
            title = {whole.title}
            content = {whole.content}
      />)}

            <Footer />
            
      </div>
  
   
}

export default App;