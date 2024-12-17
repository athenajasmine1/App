import React, { useState } from 'react';
import ToDoList from './ToDoList'; 
import ToDoForm from './ToDoForm'; // Import ToDoForm

function App() {
  // Define state for tasks
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  // Function to add a new task
  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) { // Prevent duplicates and empty tasks
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      {/* Pass tasks and addTask function */}
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;



