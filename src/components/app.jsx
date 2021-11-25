import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Note from "./note";
import Header from "./header";
import "../css/styles.css";

import InputField from "./InputField";

const App = () => {
  const [notesCollection, setNotesCollection] = useState([{}]);
  const [isFetchNotes, setIsFetchNotes] = useState(false);
  const [isNoteRerendered, setIsNoteRerendered] = useState();

  // const addItem = (textObj) => {
  //   setNotesCollection((preValue) => {
  //     return [textObj, ...preValue];
  //   });
  // };

  const formSubmissionStatus = (status) => {
    setIsNoteRerendered(status);
    // console.log(status);
  };

  useEffect(() => {
    fetch("/notes")
      .then((res) => {
        // console.log(res.status);
        return res.json();
      })
      .then((data) => {
        setNotesCollection(data);
        setIsFetchNotes(true);
      });

    setIsNoteRerendered(isNoteRerendered);
  }, [isNoteRerendered]);

  const deleteNote = (currentId) => {
    // console.log("delete btn pressed in id " + currentId);

    fetch("/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        noteId: currentId,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        alert(data.msg);
        setIsNoteRerendered(!isNoteRerendered)
      });
  };
  return (
    <div>
      <Header />
      <InputField addNoteFn={formSubmissionStatus} />
      {notesCollection.length===0 && <h3 className="waiting-msg">No notes found.. Add your first Note.</h3>}
      {isFetchNotes ? (
        notesCollection.map((note) => (
          <Note
            key={note._id}
            id={note._id}
            heading={note.title}
            content={note.content}
            deleteFn={deleteNote}
          />
        ))
      ) : (
        <h3 className="waiting-msg">Hang On, Notes being fetched....</h3>
      )}
      <Footer />
    </div>
  );
};

export default App;
