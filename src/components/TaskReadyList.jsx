import React from "react";
import TaskReadyItem from "./TaskReadyItem";

export default function TaskReadyList({ tasksReady, remove, title }) {
  return (
    <div className="tasks">
      <h3>{title}</h3>
      {tasksReady.map((taskReady, index) => (
        <TaskReadyItem
          remove={remove}
          number={index + 1}
          taskReady={taskReady}
          key={taskReady.id}
        />
      ))}
    </div>
  );
}
