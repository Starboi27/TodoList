import { useState } from "react";

export const TodoListItems = ({ onDelete, todos }) => {
  const [checked, setChecked] = useState(false);

  return (
    <ul className="todoListItem">
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
            <div className={checked ? "completed" : ""}>{todo}</div>
            <button
              onClick={() => {
                onDelete(index);
              }}
            >
              삭제
            </button>
          </li>
        );
      })}
    </ul>
  );
};
