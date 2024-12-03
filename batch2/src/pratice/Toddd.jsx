import React, { useState } from 'react';
import './Toddd.css'

const Toddd = () => {
 
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');


  const addTask = () => {
    if (taskInput === '') return; 
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  
  const toggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return ( 
    <div className="app">
      <h1>Todo App</h1>
      <div className="input-container">
        <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)}placeholder="Enter a new task"/>
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span className="task-text">{task.text}</span>
            <div className="actions">
            <button onClick={() => deleteTask(task.id)}>Delete</button>

              <button onClick={() => toggleCompletion(task.id)}> {task.completed ? 'Undo' : 'Complete'} </button>

              <button  onClick={() => {const newText = prompt('Edit your task:', task.text);
                  if (newText && newText !== '') {
                    editTask(task.id, newText);
                  }
                }}
              >Edit </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toddd;
