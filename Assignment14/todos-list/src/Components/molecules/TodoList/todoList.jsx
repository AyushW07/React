import React, { useState } from "react";
import TodoItem from "../TodoItem/todoItem";
import "./todoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = event.target.todo.value;
    setTodos([...todos, { text: newTodo, completed: false }]);
    event.target.todo.value = "";
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const pendingTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-list-container">
      <div className="header">
        <h1>Todo List</h1>
        <p>Pending Tasks: {pendingTasks}</p>
      </div>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder="Add new todo" />
        <button type="submit" className="addBtn">
          Add
        </button>
      </form>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;
