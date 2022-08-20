import * as React from "react";
import { useState, createContext, useContext, useEffect } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(taskData);

  const addToTasks = (data, TaskNode) => {
    setTasks(tasks[TaskNode].push(data));
  };

  const values = {
    tasks,
    addToTasks
  };

  return (
    <TaskContext.Provider value={values}> {children}</TaskContext.Provider>
  );
};

const useTaskContext = () => useContext(TaskContext);

export { TaskProvider, useTaskContext };

const taskData = {
  "in-progress": ["task1", "task2", "task3", "task4"]
  // todo: ["task5", "task6", "task7", "task8"],
  // complete: ["task9", "task10", "task11", "task12"],
  // "remaining-jobs": [
  //   "task list is not dynamically changing",
  //   "clean code make more readable",
  //   "add theme dark/light",
  //   "add loading on submit to add button"
  // ]
};
