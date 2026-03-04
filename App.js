import React, { useState } from 'react';
import './App.css';

// ========================
// ATOMS
// ========================
const Input = ({ value, onChange, placeholder }) => (
  <input 
    type="text" 
    value={value} 
    onChange={onChange} 
    placeholder={placeholder} 
    className="atom-input" 
  />
);

const Button = ({ children, type }) => (
  <button type={type} className="atom-button">
    {children}
  </button>
);

const Checkbox = ({ onChange }) => (
  <input 
    type="checkbox" 
    onChange={onChange} 
    className="atom-checkbox" 
  />
);

const SavedContent = ({ text }) => (
  <span className="atom-saved-content">{text}</span>
);

// ========================
// MOLECULES / ITEM
// ========================
const TodoItem = ({ text, onRemove }) => (
  <div className="todo-item">
    {/* When checkbox is clicked, the item is removed */}
    <Checkbox onChange={onRemove} />
    <SavedContent text={text} />
  </div>
);

// ========================
// ORGANISMS
// ========================
const Header = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="organism-header">
      <form onSubmit={handleSubmit} className="header-form">
        <Input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="내용 입력" 
        />
        <Button type="submit">버튼</Button>
      </form>
    </div>
  );
};

const Body = ({ todos, onRemoveTodo }) => {
  return (
    <div className="organism-body">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          text={todo.text} 
          onRemove={() => onRemoveTodo(todo.id)} 
        />
      ))}
      {todos.length === 0 && (
        <div className="empty-state">저장된 데이터가 없습니다.</div>
      )}
    </div>
  );
};

// ========================
// TEMPLATES / PAGES (App)
// ========================
function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="todolist-wrapper">
        <h1 className="title">todolist</h1>
        <Header onAddTodo={handleAddTodo} />
        <Body todos={todos} onRemoveTodo={handleRemoveTodo} />
      </div>
    </div>
  );
}

export default App;
