import React, { useState, useEffect } from "react";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [categories] = useState(["Personal", "Work","Food","Code","Entertainment  ","Misc", "All"]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.text !== taskToDelete.text));
  };

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="tasks">
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit} />
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteTask={() => onDeleteTask(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;
