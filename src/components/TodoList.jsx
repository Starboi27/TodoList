import { useState } from "react";
import { TodoListInput } from "./TodoListInput";
import { TodoListItems } from "./TodoListItems";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handlerCreate = (props) => {
    setTodos((prev) => [...prev, props]);
  };

  const handlerDelete = (props) => {
    return setTodos((prev) => {
      return prev.filter((todo, index) => {
        return props !== index;
      });
    });
  };
  
  return (
    <div>
      <TodoListInput onCreate={handlerCreate} />
      <TodoListItems onDelete={handlerDelete} todos={todos} />
    </div>
  );
};
