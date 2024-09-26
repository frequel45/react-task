import React, { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

const AddTask = () => {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), title, description, completed: false } });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
      />
      <button onClick={handleAddTask} className="mt-4 bg-blue-500 text-white py-2 px-4">Add Task</button>
    </div>
  );
};

export default AddTask;
