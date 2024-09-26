let users = [];
let tasks = {};

const mockAPI = {
  register: (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (users.some(user => user.email === email)) {
          reject({ message: 'User already exists' });
        } else {
          users.push({ email, password });
          tasks[email] = [];
          resolve({ email });
        }
      }, 500);
    });
  },

  login: (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          resolve({ email });
        } else {
          reject({ message: 'Invalid credentials' });
        }
      }, 500);
    });
  },

  getTasks: (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tasks[email] || []);
      }, 500);
    });
  },

  addTask: (email, task) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTask = { id: Date.now(), ...task, completed: false };
        tasks[email].push(newTask);
        resolve(newTask);
      }, 500);
    });
  },

  completeTask: (email, taskId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const task = tasks[email].find(task => task.id === taskId);
        if (task) {
          task.completed = true;
        }
        resolve(task);
      }, 500);
    });
  },

  deleteTask: (email, taskId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        tasks[email] = tasks[email].filter(task => task.id !== taskId);
        resolve();
      }, 500);
    });
  }
};

export default mockAPI;
