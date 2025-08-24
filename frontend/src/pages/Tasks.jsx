import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: "Homework",
      creationDate: Date.now(),
      status: true,
    },
    {
      id: 2,
      taskName: "ClassWork",
      creationDate: Date.now(),
      status: false,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logged out!");
  };

  const handleCheck = (id, isChecked) => {
    console.log(id + " " + isChecked);

    setTasks(
      tasks.map((task) => {
        if (id === task.id) {
          return { ...task, status: !task.status };
        }

        return task;
      })
    );
  };

  return (
    <div className="h-screen flex flex-col ">
      <div className="p-4 flex justify-between items-center bg-[#001F3F] text-white">
        <p className="font-bold text-2xl">Task Manager</p>
        <p></p>
        <ul className="flex gap-20">
          <li>
            {" "}
            <a href="/home" className="drop-shadow-[0_6px_6px_white] ">
              Tasks
            </a>
          </li>
          <li>
            <a href="/addTask">Add Task</a>
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

      <div className="flex-1 py-20 px-70 overflow-scroll">
        <ul className="flex flex-col items-center gap-10">
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="bg-white w-full rounded-xl p-6 flex justify-between items-center hover:shadow-xl border-1 border-gray-200"
              >
                <div className="flex flex-col justify-between">
                  <p className="text-4xl font-semibold">{task.taskName}</p>
                  <p className="text-sm text-gray-400">Created 3 days ago</p>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={task.status}
                    onChange={(e) => handleCheck(task.id, e.target.checked)}
                    className="w-7 h-7 b-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
