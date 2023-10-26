import React from "react";
import TaskWorkItem from "./TaskWorkItem";

export default function TaskWorkList({ tasksWork, remove, title }) {
  return (
    <div className="tasks">
      <h3>{title}</h3>
      {tasksWork.map((taskWork, index) => (
        <TaskWorkItem
          remove={remove}
          number={index + 1}
          taskWork={taskWork}
          key={taskWork.id}
        />
      ))}
    </div>
  );
}
