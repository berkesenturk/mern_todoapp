import Main from "./pages/main";
import { TaskContext, taskData } from "./contexts/TaskContext";

function App() {
  return (
    <>
      <TaskContext.Provider value = {taskData}>
        <Main />
      </TaskContext.Provider>
    </>
  );
}

export default App;
