import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mockAPI from '../services/mockAPI';

export const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.payload;
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'COMPLETE_TASK':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: true } : task
      );
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) dispatch({ type: 'SET_TASKS', payload: JSON.parse(storedTasks) });
    };
    loadTasks();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const syncTasks = async (email) => {
    const fetchedTasks = await mockAPI.getTasks(email);
    dispatch({ type: 'SET_TASKS', payload: fetchedTasks });
  };

  return (
    <TaskContext.Provider value={{ tasks, dispatch, syncTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
