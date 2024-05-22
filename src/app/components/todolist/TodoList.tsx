"use client";

import React, { useState } from "react";
import ModalList from "./ModalList";

interface Task {
  id: string;
  text: string;
  date: string;
  completed: boolean;
  status: "list" | "inProgress" | "done";
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [draggingTask, setDraggingTask] = useState<Task | null>(null);

  const addTask = (task: string, date: string) => {
    if (task.trim() && date) {
      const newTask: Task = {
        id: `task-${Date.now()}`,
        text: task,
        date,
        completed: false,
        status: "list",
      };
      setTasks([...tasks, newTask]);
    }
    setIsModalOpen(false);
  };

  const onDragStart = (task: Task) => {
    setDraggingTask(task);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDrop = (
    event: React.DragEvent<HTMLDivElement>,
    status: "list" | "inProgress" | "done"
  ) => {
    event.preventDefault();
    if (draggingTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === draggingTask.id ? { ...task, status } : task
      );
      setTasks(updatedTasks);
      setDraggingTask(null);
    }
  };

  const renderTasks = (status: "list" | "inProgress" | "done") => {
    return tasks
      .filter((task) => task.status === status)
      .map((task) => (
        <div
          key={task.id}
          draggable
          onDragStart={() => onDragStart(task)}
          className="mb-2 p-2 border bg-white rounded cursor-pointer"
        >
          <div
            className={`flex-1 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.text} - {task.date}
          </div>
          <button
            className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      ));
  };

  const toggleTaskCompletion = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Add Task
      </button>
      <div className="flex space-x-4">
        <div
          className="w-1/3 p-2 border bg-gray-100 rounded"
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, "list")}
        >
          <h2 className="text-xl font-bold mb-2">List</h2>
          {renderTasks("list")}
        </div>
        <div
          className="w-1/3 p-2 border bg-gray-100 rounded"
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, "inProgress")}
        >
          <h2 className="text-xl font-bold mb-2">In Progress</h2>
          {renderTasks("inProgress")}
        </div>
        <div
          className="w-1/3 p-2 border bg-gray-100 rounded"
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, "done")}
        >
          <h2 className="text-xl font-bold mb-2">Done</h2>
          {renderTasks("done")}
        </div>
      </div>
      <ModalList
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addTask}
      />
    </div>
  );
};

export default TodoList;
