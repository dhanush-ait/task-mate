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

  return(
    <div>
      <h1>Task Mate</h1>
      <p>Our friendly task manager</p>
      <Taskform addTask = {addTask}/>
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}

export default App;
