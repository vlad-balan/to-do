import React, { useState } from "react";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

export default function PostForm({ create }) {
  const [task, setTask] = useState({ title: "", body: "" });

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: Date.now(),
    };
    create(newTask);

    setTask({ title: "", body: "" });
  };

  return (
    <div className="inputs">
      <h3>Запланировать задачу:</h3>
      <form className="form">
        <Input
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Название задачи"
        />
        <Input
          value={task.body}
          onChange={(e) => setTask({ ...task, body: e.target.value })}
          placeholder="Описание задачи"
        />
        <Button onClick={addTask}>Создать задачу</Button>
      </form>
    </div>
  );
}
