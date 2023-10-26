import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import PostForm from "./components/PostForm";
import TaskWorkList from "./components/TaskWorkList";
import TaskReadyList from "./components/TaskReadyList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Задача 1", body: "Описание задачи 1" },
    { id: 2, title: "Задача 2", body: "Описание задачи 2" },
    { id: 3, title: "Задача 3", body: "Описание задачи 3" },
    { id: 4, title: "Задача 4", body: "Описание задачи 4" },
  ]);

  const [tasksWork, setTasksWork] = useState([
    { id: 5, title: "Задача 5", body: "Описание задачи 5" },
  ]);

  const [tasksReady, setTasksReady] = useState([
    { id: 6, title: "Задача 6", body: "Описание задачи 6" },
  ]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  // const removeTask = (task) => {
  //   setTasks(tasks.filter((t) => t.id !== task.id));
  // };

  const moveTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
    setTasksWork([...tasksWork, task]);
  };

  const removeTaskWork = (taskWork) => {
    setTasksWork(tasksWork.filter((t) => t.id !== taskWork.id));
    setTasksReady([...tasksReady, taskWork]);
  };

  const removeTaskReady = (taskReady) => {
    setTasksReady(tasksReady.filter((t) => t.id !== taskReady.id));
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="app-wrapper">
        <PostForm create={createTask} />
        <div className="task-wrapper">
          {/* Новые задачи */}
          <TaskList
            move={moveTask}
            // remove={removeTask}
            tasks={tasks}
            title="Новые задачи:"
          />
          {/* В работе */}
          <TaskWorkList
            remove={removeTaskWork}
            tasksWork={tasksWork}
            title="Задачи в работе:"
          />

          {/* Готово */}
          <TaskReadyList
            remove={removeTaskReady}
            tasksReady={tasksReady}
            title="Выполненные задачи:"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
