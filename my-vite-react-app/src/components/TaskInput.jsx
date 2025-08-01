import React, { useState } from 'react';

function TaskInput({ onAdd }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length < 3) {
      setError('Task must be at least 3 characters.');
      return;
    }
    onAdd({ text: value, completed: false });
    setValue('');
    setError('');
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
        autoFocus
      />
      <button type="submit">Add</button>
      {error && <div style={{ color: 'red', marginTop: '0.5em' }}>{error}</div>}
    </form>
  );
}

export default TaskInput;