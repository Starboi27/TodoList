import { useState } from "react";

export const TodoListInput = ({ onCreate }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="todocantainer">
        <h2>Todo-List</h2>
        <div className="list-info">
          <input
            placeholder="쓰시라고요"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (value.length === 0) {
                return;
              }
              onCreate(value);
              setValue("");
            }}
          >
            추가
          </button>
        </div>
      </div>
    </div>
  );
};
