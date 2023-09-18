// App.js
import React, { useState } from 'react';
import './App.scss';
import Header from './Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import FilterOptions from './FilterOptions';
import Footer from './Footer';

const App = () => {
  // Sample state for to-do tasks
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <TaskForm />
        <div className="task-content">
          <FilterOptions />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
