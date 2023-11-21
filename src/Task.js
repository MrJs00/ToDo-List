import React from 'react';


function Task({ task, onDelete }) {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={onDelete} className='del'>Delete</button>
    </div>
  );
}

export default Task;
