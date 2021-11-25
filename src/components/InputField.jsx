import React, { useState } from "react";

const InputField = (props) => {
  const [textObj, setTextObj] = useState({ title: "", content: "" });
  const [formSubmission,setFormSubmission]=useState(false);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setTextObj((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const addNote = (e) => {
    e.preventDefault();

    const { title, content } = textObj;

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data.msg));
    setFormSubmission(!formSubmission)
    props.addNoteFn(formSubmission);
    setTextObj({
      title: "",
      content: "",
    });
  };

  return (
    <div className="input-container">
      <form  method="POST" onSubmit={addNote}>
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
        <button>+</button>
      </form>
    </div>
  );
};

export default InputField;
