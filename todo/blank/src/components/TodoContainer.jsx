import React, { useState, useEffect } from "react";
import "./Components.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const url = "https://dummyjson.com/todos?limit=5";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);

  return (
    <>
      <TodoForm />
      {todos && todos.map((t) => <TodoItem todo={t} />)}
    </>
  );
};

export default TodoContainer;
