import { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
export default function Todo() {
  let [todos, setTodos] = useState([
    { task: "Eat", id: uuidv4(), isDone: false },
  ]);
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
  let markAsDoneAll = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => ({
        ...todo,
        isDone: true,
      }))
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return {
            ...todo,
          };
        }
      })
    );
  };

  let notDone = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: false,
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
          <li key={todo.id} className={todo.isDone ? "done" : null}>
            {todo.task}
            <span>
              <button onClick={() => deleteTask(todo.id)} className="delete">
                Delete
              </button>
              {!todo.isDone ? (
                <button
                  onClick={() => markAsDone(todo.id)}
                  className="mark-as-done"
                >
                  Mark as Done
                </button>
              ) : (
                <button
                  onClick={() => notDone(todo.id)}
                  className="not-done"
                >
                  Not Done
                </button>
              )}
            </span>
          </li>
        ))}
      </ul>
      <button style={{backgroundColor:"white",color:"black",
        marginTop:"3rem"
      }} onClick={markAsDoneAll}>Mark as done all</button>
    </div>
  );
}
