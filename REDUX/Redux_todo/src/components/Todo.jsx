import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import "./Todo.css";

export default function Todo() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMark = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">ReduxTask – Todo App</h1>

      <AddForm />

      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.isDone ? "completed" : ""}`}
          >
            <span>{todo.task}</span>

            <div className="todo-buttons">
              <button className="mark-btn" onClick={() => handleMark(todo.id)}>
                {todo.isDone ? "Undo" : "Mark Done"}
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
