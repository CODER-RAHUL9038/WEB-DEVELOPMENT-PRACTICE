import { useSelector } from "react-redux";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <h1>Todo </h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
