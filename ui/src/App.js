import Main from "./pages/main";
import { TaskContext } from "./contexts/TaskContext";

function App() {
  return (
    <>
      <TaskContext.Provider>
        <Main />
      </TaskContext.Provider>
    </>
  );
}

export default App;
