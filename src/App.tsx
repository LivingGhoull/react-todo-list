import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import "./App.css";

type TodoItem = {
  id: string;
  todo: string;
};

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const addTodo = (todo: string) => {
    setTodoList([...todoList, { id: uuidv4(), todo: todo }]);
  };

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter((ob) => ob.id !== id));
  };

  return (
    <div>
      <h1 id="list-title">To do list</h1>
      <TodoForm addTodo={addTodo} />
      {todoList.map((todo: TodoItem, index) => (
        <Todo key={todo.id} index={index} id={todo.id} deleteTodo={deleteTodo}>
          {todo.todo}
        </Todo>
      ))}
    </div>
  );
}

export default App;
