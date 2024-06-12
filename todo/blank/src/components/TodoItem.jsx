import "./Components.css";

const TodoItem = ({ todo }) => {
  return (
    <>
      <div className="todo-item">{todo.todo}</div>
    </>
  );
};

export default TodoItem;
