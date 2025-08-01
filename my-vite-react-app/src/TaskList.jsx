import React from 'react';

function TaskList({ tasks, onToggle }) {
  return (
    <ul className="task-list">
      {tasks.map((task, i) => (
        <li key={i} onClick={() => onToggle(i)} className={task.completed ? 'done' : ''}>
          <strong>{task.subject}</strong>: {task.desc}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
