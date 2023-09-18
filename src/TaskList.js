import React from 'react';
import TaskItem from './TaskItem'; // You'll need to create TaskItem component

const TaskList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
