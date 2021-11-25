import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Note from "./note";
import Header from "./header";
import "../css/styles.css";

import InputField from "./InputField";

const App = () => {
  const [notesCollection, setNotesCollection] = useState([{}]);
  const [isFetchNotes, setIsFetchNotes] = useState(false);
  const [submitPressed,setSubmitPressed] =useState(false);

  // const addItem = (textObj) => {
  //   setNotesCollection((preValue) => {
  //     return [textObj, ...preValue];
  //   });
  // };

  const formSubmissionStatus = (status)=>{
    setSubmitPressed(status)
  }
  useEffect(() => {
    fetch("/data")
      .then((res) => {
        console.log(res.status);
        return res.json();
        
      })
      .then((data) => {
        setNotesCollection(data);
        setIsFetchNotes(true);
      });
      
      setSubmitPressed(submitPressed)
   
  }, [submitPressed]);
 

  const deleteNote = (currentId) => {
    console.log("delete btn pressed");

    setNotesCollection(

      //currentlu working with delete functionality.... 24/11/2021 04:10 PM
      notesCollection.filter((value, index) => {
        return index !== currentId;
      })
    );
  };
  return (
    <div>
      <Header />
      <InputField addNoteFn ={formSubmissionStatus}/>
      {isFetchNotes
        ? notesCollection.map((note, index) => (
            <Note
              key={note._id}
              id={note._id}
              heading={note.title}
              content={note.content}
              deleteFn={deleteNote} 
            />
          ))
        : <h3 className='waiting-msg'>Hang On, Notes being fetched....</h3>}
      <Footer />
    </div>
  );
};

export default App;
