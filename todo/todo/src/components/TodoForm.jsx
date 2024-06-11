import React, { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    event.preventDefault();
    onSubmit(text);
    event.target.value = "";
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="create todo"
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
      </form>
    </>
  );
};

export default TodoForm;
