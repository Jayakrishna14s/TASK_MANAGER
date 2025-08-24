import React, { useState } from "react";

const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logged out!");
  };

  const [task, setTask] = useState({
    taskName: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
  };

  return (
    <div className="h-screen flex flex-col ">
      <div className="p-4 flex justify-between items-center bg-[#001F3F] text-white">
        <p className="font-bold text-2xl">Task Manager</p>
        <p></p>
        <ul className="flex gap-20">
          <li>
            {" "}
            <a href="/home">Tasks</a>
          </li>
          <li>
            <a href="/addTask" className="drop-shadow-[0_6px_6px_white] ">
              Add Task
            </a>
          </li>
        </ul>
        <div className="flex gap-5 items-center">
          <p>Jayakrishna</p>
          <img
            src="../../public/profile.svg"
            className="h-5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {isOpen && (
          <div className="absolute right-3 mt-20 w-40 bg-gray-100 border border-gray-200 rounded shadow-md z-50">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 h-full w-screen flex flex-col items-center pt-40 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md max-w-md w-full space-y-4"
        >
          <h2 className="text-xl font-bold text-gray-800">Add New Task</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Task Title
            </label>
            <input
              type="text"
              name="taskName"
              value={task.taskName}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={task.description}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
