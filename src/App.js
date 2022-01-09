import React from 'react';
import { useState } from "react";

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Ted',
      day: '10/1/2021',
      reminder: true,
    },
    {
      id: 2,
      text: 'Harry',
      day: '12/1/2021',
      reminder: true,
    },
    {
      id: 3,
      text: 'Kimberly',
      day: '13/1/2021',
      reminder: false,
    }
  ]);

  // Delete Task
  const deleteTask = (id) => {
    console.log('Delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log('Reminder', id);
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  //Add Task
  const addTask = (task) => {
    console.log('Add', task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.dir(tasks);
  }

  return (
    <div className='container'>
      <Header
        title='Task tracker' 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} />
      ) : (
        'No task to show'
      )}
    </div>
  );
}

export default App;
