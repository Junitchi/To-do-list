// Footer.js

import React from 'react';
import './Footer.scss';

const Footer = ({ totalTasks, completedTasks, clearCompleted }) => {
  return (
    <div className="footer">
      <div className="task-count">
        {totalTasks - completedTasks} tasks remaining
      </div>
      <div className="clear-completed">
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

export default Footer;
