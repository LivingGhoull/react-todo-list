import { useState } from "react";
import "../components/Todo.css";

interface Props {
  index: number;
  id: string;
  children: string;
  deleteTodo: (id: string) => void;
}

function Todo({ index, id, children, deleteTodo }: Props) {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <div className={check ? "todo-item complete" : "todo-item"}>
      <input id={"todo-" + index} type="checkbox" onClick={handleCheck} />
      <label className={check ? "done" : ""} htmlFor={"todo-" + index}>
        {children}
      </label>
      <button className="delete-task" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
