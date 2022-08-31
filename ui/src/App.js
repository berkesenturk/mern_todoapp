import Main from "./pages/main";
import { TaskProvider } from "./contexts/TaskContext";

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
