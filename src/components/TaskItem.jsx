import React from "react";
import Button from "./UI/button/Button";

export default function TaskItem(props) {
  return (
    <div className="task">
      <div className="task__content">
        <strong>
          {props.number}. {props.task.title}
        </strong>
        <div>{props.task.body}</div>
      </div>
      {/* <Button
        onClick={() => {
          props.remove(props.task);
        }}
      >
        Удалить
      </Button> */}
      <Button
        onClick={() => {
          props.move(props.task);
        }}
      >
        Взять в работу
      </Button>
    </div>
  );
}
