import { createContext, useContext, useState,useEffect } from "react"

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(taskData)

    const addTaskToList = (value, list) => {
        console.log("addtasktolist worked");
        tasks[list] = [...tasks[list], value]
        setTasks(tasks)
        console.log();
    }

    const removeTaskFromList = (value, list) => {
        setTasks(tasks[list].filter(task => task !== value))   
    }

    // edit task

    const data = [tasks, addTaskToList, removeTaskFromList]
    
    return <TaskContext.Provider value = { data }> { children } </TaskContext.Provider>
}

export const useTasks = () => {
    const context = useContext(TaskContext)
    
    if(context === undefined)
        throw new Error("useTasks can only be used inside TaskProvider")
    
    return context
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
  