import * as React from 'react';

export const taskData = {
    "in-progress": [
      "task1",
      "task2",
      "task3",
      "task4",
    ],
    "todo": [
      "task5",
      "task6",
      "task7",
      "task8",
    ],
    "complete": [
      "task9",
      "task10",
      "task11",
      "task12",
    ],
    "remaining-jobs": [
        "task list is not dynamic",
        "clean code make more readable",
        "add theme dark/light",
        "add loading on submit to add button"
    ]
}

export const TaskContext = React.createContext(
    taskData
)
