import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onEdit, onToggleCompletion }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete} 
          onEdit={onEdit} 
          onToggleCompletion={onToggleCompletion} 
        />
      ))}
    </div>
  );
}

export default TodoList;