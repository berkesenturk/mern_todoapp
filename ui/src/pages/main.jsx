/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';

// const taskData = {
//   'in-progress': [
//     {
//       title: 'refactor everything: ****',
//       isChecked: false,
//       isStar: false,
//       rating: 1,
//     },
//     {
//       title: 'task1',
//       isChecked: true,
//       isStar: true,
//       rating: 1,
//     },
//   ],
//   todo: [
//     {
//       title: 'task5',
//       isChecked: false,
//       isStar: false,
//       rating: 1,
//     },
//     {
//       title: 'task6',
//       isChecked: true,
//       isStar: true,
//       rating: 1,
//     },
//   ],
//   complete: [
//     {
//       title: 'task7',
//       isChecked: false,
//       isStar: false,
//       rating: 1,
//     },
//     {
//       title: 'task8',
//       isChecked: true,
//       isStar: true,
//       rating: 1,
//     },
//   ],
//   backlog: [
//     {
//       title: 'task9',
//       isChecked: false,
//       isStar: false,
//       rating: 1,
//     },
//     {
//       title: 'task10',
//       isChecked: true,
//       isStar: true,
//       rating: 1,
//     },
//   ],
// };

function EditModal({
  setIsOpen, description, setDescription, taskIdToEdit, tasks,
}) {
  console.log(description);
  console.log(taskIdToEdit);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(description);
    tasks[taskIdToEdit].title = description;
    console.log(tasks);
    // setTasks([...tasks,
    //   {
    //     title: description,
    //   }]);
  }

  return (
    <>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
      <button
        type="button"
        onClick={() => setIsOpen(false)}
      >
        Close
      </button>
    </>
  );
}

export default function Main() {
  const data = [
    {
      title: 'test',
      rating: 5,
      description: 'desc for test',
      isStarred: false,
      isCompleted: false,

    },
    {
      title: 'test2',
      rating: 3,
      description: 'desc for test2',
      isStarred: true,
      isCompleted: false,

    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('lorem');
  const [tasks, setTasks] = useState(data);
  const [description, setDescription] = useState('');
  const [taskIdToEdit, setTaskIdToEdit] = useState(null);

  useEffect(() => {
    console.log('main tasks useffect', tasks);
  }, [tasks]);

  useEffect(() => {
    console.log('useeffect worked');
  }, [description]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text);
    setTasks([...tasks,
      {
        title: text,
      }]);
  }

  function handleDelete(id) {
    console.log(id);
    if (id > -1) {
      setTasks(tasks.filter((task) => tasks.indexOf(task) !== id));
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="a">
          Enter task:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>

      </form>

      {
        tasks.map((task, id) => (
          <div>
            {task.title}
            <button
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(true);
                setTaskIdToEdit(id);
              }}
            >
              Edit
            </button>
          </div>
        ))
      }

      {
        isOpen
          ? (
            <EditModal
              setIsOpen={setIsOpen}
              description={description}
              setDescription={setDescription}
              taskIdToEdit={taskIdToEdit}
              tasks={tasks}
            />
          )
          : null
      }
    </>
  );
}
