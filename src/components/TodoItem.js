import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onEdit, onToggleCompletion }) {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editedText);
    setEditMode(false);
  };

  return (
    <div className="todo-item">
      <input className='check' 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggleCompletion(todo.id)} 
      />
      {editMode ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span className='todotext' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}
      <button className='todoitembutton' onClick={() => onDelete(todo.id)}>Delete</button>
      {editMode ? (
        <button className='todoitembutton' onClick={handleSave}>Save</button>
      ) : (
        <button className='todoitembutton' onClick={() => setEditMode(true)}>Edit</button>
      )}
    </div>
  );
}

export default TodoItem;