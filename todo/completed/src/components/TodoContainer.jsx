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
        console.log(data);
      });
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      todo: text,
      completed: false,
      userId: 123,
      id: Math.floor(Math.random() * 1000),
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (todo) => {
    const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
    setTodos(updatedTodos);
  };

  const deleteTodo = (todo) => {
    const updatedTodos = todos.filter((t) => t.id != todo.id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      {todos &&
        todos.map((t) => (
          <TodoItem todo={t} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))}
    </>
  );
};

export default TodoContainer;
