import { createContext, useContext, useState } from "react"

export const TaskContext = createContext()

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(taskData)

    const addTaskToList = (value) => {
        setTasks([...tasks, value])
    }

    const removeTaskFromList = (value) => {
        setTasks(tasks.filter(task => task !== value))   
    }

    // edit task

    const data = [tasks, addTaskToList]
    
    return <TaskContext.Provider value={ data }> { children } </TaskContext.Provider>
}

const useTasks = () => {
    const context = useContext(TaskContext)
    if(context === undefined)
        throw new Error("useTasks can only be used inside TaskProvider")
}


const taskData = {
    "in-progress": [
      "refactor everything: ****",
      "task1",
      "task2",
      "task3",
      "task4"
    ],
    todo: ["task5", "task6", "task7", "task8"],
    complete: ["task9", "task10", "task11", "task12"],
    backlog: [
      "make context work: *****",
      "drag & drop capability: *",
      "add theme dark/light:***",
      "if task deleted -> alert with taskname array shift",
      "make tasks editable"
    ]
  };
  