import { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
export default function Todo() {
  let [todos, setTodos] = useState([{ task: "Code", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  function TrackInput(e) {
    setNewTodo(e.target.value);
  }

  function addTask() {
    setTodos((prevTodos) => [...prevTodos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  }
  function deleteTask(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  }
  let toUpperCaseAll = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return {
            ...todo,
          };
        }
      })
    );
  };

  return (
    <div className="todo-container">
      <h1 className="title">Todo App</h1>

      <div className="input-box">
        <input
          value={newTodo}
          onChange={TrackInput}
          type="text"
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <span>
              <button onClick={() => deleteTask(todo.id)} className="delete">
                Delete
              </button>
              <button
                onClick={() => upperCaseOne(todo.id)}
                className="upper-case-one"
              >
                UpperCaseOne
              </button>
            </span>
          </li>
        ))}
      </ul>
      <button onClick={toUpperCaseAll}>UpperCase all</button>
    </div>
  );
}
