import Taskform from "./Component/Taskform";
import TaskList from "./Component/TaskList";
import Progresstracker from "./Component/Progresstracker";
import { useEffect, useState } from "react";
import React from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  return(
    <div>
      <h1>Task Mate</h1>
      <p>Our friendly task manager</p>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks}
      updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}

export default App;
