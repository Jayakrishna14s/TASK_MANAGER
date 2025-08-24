import React, { useState } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-100 text-gray-800">
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-indigo-600">TaskManager</h1>
        <nav className="space-x-6 text-sm md:text-base">
          <a
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition"
            href="/login"
          >
            Get Started
          </a>
        </nav>
      </header>

      <section className="flex flex-col md:flex-row items-center px-6 py-16 md:py-24 gap-12">
        <div className="flex-1 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Organize Your <span className="text-indigo-600">Tasks</span>
            <br />
            Boost Productivity
          </h2>
          <p className="text-lg mb-6">
            A modern and simple way to manage your day-to-day work. Plan, track,
            and accomplish with ease.
          </p>
        </div>

        <div className="flex-1 animate-fade-in-up">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9068/9068676.png"
            alt="Task Illustration"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </section>

      <section id="features" className="bg-blue-100 px-6 py-20 text-center">
        <h3 className="text-3xl font-bold text-indigo-600 mb-12">Features</h3>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
            <h4 className="text-xl font-semibold mb-2">Task Lists</h4>
            <p>Organize your tasks into custom lists to stay focused.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 duration-300 delay-75">
            <h4 className="text-xl font-semibold mb-2">Reminders</h4>
            <p>
              Set due dates and receive gentle nudges when deadlines approach.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 duration-300 delay-100">
            <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
            <p>Work with teammates and share progress in real-time.</p>
          </div>
        </div>
      </section>

      <footer className="bg-white text-center py-6 text-sm text-gray-500 border-t border-gray-200 ">
        © 2025 TaskManager. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
