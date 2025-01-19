import React, { useState } from 'react';
import './App.css'; 
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';
import SearchBar from './components/SearchBar';

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false); 

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
      setShowModal(false);
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, updatedText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: updatedText } : todo));
  };

  const handleToggleCompletion = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  }).filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));

  
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <h1>Todo App</h1>
      <div className="filters">
        <SearchBar search={search} setSearch={setSearch} />
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <button className="addtodobutton" onClick={() => setShowModal(true)}>Add Todo</button>
      <TodoList 
        todos={filteredTodos} 
        onDelete={handleDeleteTodo} 
        onEdit={handleEditTodo} 
        onToggleCompletion={handleToggleCompletion}
      />
      {showModal && (
        <AddTodoModal
          showModal={showModal}
          setShowModal={setShowModal}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
        />
      )}
    </div>
  );
}

export default App;