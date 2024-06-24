import React, {useState} from "react";
import CreateArea from "./CreateArea";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";



function App() {
// const [inputText, setInputText] = useState("");
// const [items, setItems]= useState([]);
const [notes, setNotes] = useState([]);

function addNote(newNote){
    console.log(newNote);
    setNotes((prevNotes) => {
      return [  ...prevNotes,newNote]
    });
}
function deleteNote(id){
  console.log("DeleteNote()");
  // setNotes((prevNotes) => {
  //   return prevNotes.filter((noteItem, index) => {
  //     return index !== id
  //   })
  // })
  setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index) => {
      return index !== id;
    });
  });
}


  return (
    <div  >
     <Header />
      <CreateArea onAdd={addNote} />
      {
        notes.map((noteItem, index) =>{
          return(
            <Note 
             key={index}
             id={index}
             title={noteItem.title}
             content={noteItem.content}
             onDelete={deleteNote}
            />
          )
        })
      }
     


      <Footer />
    </div>
    
  );
}

export default App;
