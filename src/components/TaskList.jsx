import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, remove, move, title }) {
  return (
    <div className="tasks">
      <h3>{title}</h3>
      {tasks.map((task, index) => (
        <TaskItem
          move={move}
          remove={remove}
          number={index + 1}
          task={task}
          key={task.id}
        />
      ))}
    </div>
  );
}
