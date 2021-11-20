import React, { useState } from "react";
import Footer from "./footer";
import Note from "./note";
import Header from "./header";
import "../css/styles.css";

import InputField from "./InputField";

const App = () => {
  const [notesCollection, setNotesCollection] = useState([]);

  const addItem = (textObj) => {
    setNotesCollection((preValue) => {
      return [textObj, ...preValue];
    });
  };
  const deleteNote = (currentId) => {
    console.log("delete btn pressed");

    setNotesCollection(
      notesCollection.filter((value, index) => {
        return  index!==currentId
      })
    );
  };
  return (
    <div>
      <Header />
      <InputField addNoteFn={addItem} />
      {notesCollection.map((note,index) => (
        <Note
          key={index}
          id={index}
          heading={note.title}
          content={note.content}
          deleteFn={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
