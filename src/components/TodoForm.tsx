import { useState } from "react";
import "../components/TodoForm.css";

interface Props {
  addTodo: (todo: string) => void;
}

function TodoForm({ addTodo }: Props) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    {
      addTodo(todo);
    }
    setTodo("");
  };

  return (
    <div>
      <form id="add-task-form" action="" onSubmit={handleSubmit}>
        <input
          id="todo-text"
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button id="todo-btn">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
