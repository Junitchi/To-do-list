import React from 'react';

const TaskItem = ({ task, onDeleteTask, onToggleComplete }) => {
  const { id, description, completed } = task;

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="task-checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <div className="task-description">{description}</div>
      <button
        className="delete-button"
        onClick={() => onDeleteTask(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
