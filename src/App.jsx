import Taskform from "./Component/Taskform";
import TaskList from "./Component/TaskList";
import Progresstracker from "./Component/Progresstracker";
function App() {
  return(
    <div>
      <h1>Task Mate</h1>
      <p>Our friendly task manager</p>
      <Taskform />
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}

export default App;
