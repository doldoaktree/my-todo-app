import { useState } from "react";
import LikeButton from "./like-button";
import EnterTasks from "./enter-tasks";

export default function Home() {
  return (
    <main className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold">Todo List</h2>

          <h2 className="w-full rounded border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300">
            Task: <EnterTasks />
          </h2>

          <ul>
            <li className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-lg text-gray-700">Task 1</span>
              <button className="text-red-500">Delete</button>
            </li>
            <li className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-lg text-gray-700">Task 2</span>
              <button className="text-red-500">Delete</button>
            </li>
            {/* {<!-- Add more tasks here -->} */}
          </ul>

          {/* <div className="px-6 py-4"> */}
          {/* <input type="text" className="w-full rounded border-gray-300 py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" placeholder="Add a new task"> */}
          {/* <button className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Task</button> */}
        </div>
      </div>
    </main>
  );
}
