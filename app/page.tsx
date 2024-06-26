"use client";
import { NewTaskTextBox } from "@/components/building-blocks/new-task-text-box";
import { useState } from "react";

type Props = {
  description: string;
  onDelete: (value: string) => void;
};

function Task(props: Props) {
  const notifyDelete = () => {
    props.onDelete(props.description);
  };

  return (
    <li className="flex items-center justify-between py-2 border-b border-gray-200">
      <span className="text-lg text-gray-700">{props.description}</span>
      <button onClick={notifyDelete} className="text-red-500">
        Delete
      </button>
    </li>
  );
}

export default function Home(props: Props) {
  const [tasks, setTasks] = useState(["get eggs", "get milk"]);

  const onAdd = (newTask: string) => {
    setTasks([...tasks, newTask]);
  };
  const onDelete = (value: string) => {
    setTasks(tasks.filter((task) => task !== value));

    console.log(`delete was called ${value}`);
  };

  return (
    <main className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold">Todo List</h2>
          <NewTaskTextBox onAdd={onAdd} />
          <ul>
            {tasks.map((task, index) => (
              <Task description={task} key={index} onDelete={onDelete} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
