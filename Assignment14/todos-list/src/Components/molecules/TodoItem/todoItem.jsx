import React from "react";
import "./todoItem.css";

function TodoItem(props) {
  
  const handleComplete = () => {
    props.onComplete(props.todo.id);
  };

  const handleDelete = () => {
    props.onDelete(props.todo.id);
  };

   return (
    <div className="todo-item">
      <div className={`todo-text ${props.todo.completed ? "completed" : ""}`}>
        {props.todo.text}
      </div>
      <div className="buttons-container">
        <button className="complete-btn" onClick={handleComplete}>
          Complete
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          X
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
