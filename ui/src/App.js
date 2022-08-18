import Main from "./pages/main";
import { TaskContext, taskData, TaskProvider } from "./contexts/TaskContext";

function App() {
  return (
    <>
      <TaskProvider>
        <Main />
      </TaskProvider>
    </>
  );
}

export default App;
