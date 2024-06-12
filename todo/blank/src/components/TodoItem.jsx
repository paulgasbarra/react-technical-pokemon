import { useState } from "react";
import TodoForm from "./TodoForm";
import "./Components.css";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.todo);

  const handleCheckbox = () => {
    todo.completed = !todo.completed;
    updateTodo(todo);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo);
  };

  const handleEdit = () => {
    todo.todo = text;
    updateTodo(todo);
    event.preventDefault();
  };

  const handleToggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <div className="todo-item">
        {edit ? (
          <form onSubmit={handleEdit}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
            />
          </form>
        ) : (
          <>
            <input
              type="checkbox"
              checked={todo.completed}
              onClick={handleCheckbox}
            />
            {todo.todo}
          </>
        )}
        <button onClick={handleToggleEdit}>✏️</button>
        <button onClick={handleDeleteTodo}>🗑️</button>
      </div>
    </>
  );
};

export default TodoItem;
