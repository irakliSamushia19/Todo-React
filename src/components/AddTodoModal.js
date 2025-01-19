import React from 'react';

function AddTodoModal({ showModal, setShowModal, newTodo, setNewTodo, handleAddTodo }) {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Todo</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter todo"
        />
        <button className='modalbutton' onClick={handleAddTodo}>Add</button>
        <button className='modalbutton' onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
}

export default AddTodoModal;