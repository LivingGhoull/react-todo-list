import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([{}]);

  const addTodo = (todo: string) => {
    setTodoList([...todoList, { id: uuidv4(), todo: todo }]);
  };

  return (
    <div>
      <h1>To do list</h1>
      <TodoForm addTodo={addTodo} />
      {todoList.map((todo) => 
      
      <p>todo</p>
      
      )}
    </div>
  );
}

export default App;