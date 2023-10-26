import React from "react";
import Button from "./UI/button/Button";

export default function TaskReadyItem(props) {
  return (
    <div className="task">
      <div className="task__content">
        <strong>
          {props.number}. {props.taskReady.title}
        </strong>
        <div>{props.taskReady.body}</div>
      </div>
      <Button
        onClick={() => {
          props.remove(props.taskReady);
        }}
      >
        Закрыть задачу
      </Button>
    </div>
  );
}
