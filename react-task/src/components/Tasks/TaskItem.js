import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  const handleComplete = () => {
    dispatch({ type: 'COMPLETE_TASK', payload: task.id });
  };

  return (
    <div className="border p-2 mb-2 flex justify-between items-center">
      <div>
        <h3 className={`font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="flex">
        <button onClick={handleComplete} className="mr-2 bg-green-500 text-white py-1 px-2">Complete</button>
        <button onClick={handleDelete} className="bg-red-500 text-white py-1 px-2">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
