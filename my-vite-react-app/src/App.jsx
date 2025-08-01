import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput'; // Make sure TaskInput.jsx exists
import TaskList from './components/TaskList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div className="app-container">
      <Header />
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleComplete} />
      <Footer />
    </div>
  );
}

export default App;
