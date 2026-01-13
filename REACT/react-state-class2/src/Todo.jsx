import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function Todo() {
  let [todo, setTodo] = useState([{ task: "sample", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  function updateTodo(e) {
    setNewTodo(e.target.value);
  }
  function addTask() {
    setTodo([...todo, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  }
  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={newTodo}
        onChange={updateTodo}
        style={{ marginRight: "10px" }}
      />
      <button onClick={addTask}>Add</button>

      <div className="display" style={{ marginTop: "2rem" }}>
        <ul>
          {todo.map((el) => (
            <li key={el.id}>{el.task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
