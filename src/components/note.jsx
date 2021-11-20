import React from "react";
import "../css/styles.css";

const Note = (props) => {
  return (
    <div className="single-note">
      <h3>{props.heading}</h3>
      <p>{props.content}</p>
      <button className="delete-btn" onClick={()=>{props.deleteFn(props.id)}}>DELETE</button>
    </div>
  );
};

export default Note;
