import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AddTask from './components/Tasks/AddTask';
import TaskList from './components/Tasks/TaskList';

function App() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div>
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <Login />
          <h2 className="text-xl font-bold mt-8 mb-4">Register</h2>
          <Register />
        </div>
      </div>
    );
  }

  return (
    <TaskProvider>
      <div className="p-8">
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
