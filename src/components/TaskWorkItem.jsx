import React from "react";
import Button from "./UI/button/Button";

export default function TaskWorkItem(props) {
  return (
    <div className="task">
      <div className="task__content">
        <strong>
          {props.number}. {props.taskWork.title}
        </strong>
        <div>{props.taskWork.body}</div>
      </div>
      <Button
        onClick={() => {
          props.remove(props.taskWork);
        }}
      >
        Выполнил задачу
      </Button>
    </div>
  );
}
