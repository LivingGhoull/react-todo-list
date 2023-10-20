import { useState } from "react";

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
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
