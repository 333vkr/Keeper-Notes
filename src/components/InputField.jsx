import React, { useState } from "react";

const InputField = (props) => {
  const [textObj, setTextObj] = useState({title: "", content: "" });
  

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setTextObj((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const addNote = () => {

    props.addNoteFn(textObj)
    setTextObj({
        title:"",
        content:""
    })
    
  };

    
  return (
    <div className="input-container">
      <input
        type="text"
        name="title"
        className="heading-input"
        placeholder="Note Title"
        onChange={changeHandler}
        value={textObj.title}
      />
      <textarea
        type="text"
        name="content"
        className="content-input"
        placeholder="Note Description"
        onChange={changeHandler}
        value={textObj.content}
      />
      <button onClick={addNote}>+</button>
    </div>
  );
};

export default InputField;
