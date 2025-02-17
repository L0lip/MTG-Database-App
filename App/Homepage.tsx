import React, { useState } from "react";
import { Search, Moon, Sun, Home, User, Settings } from "lucide-react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen p-6 flex flex-col justify-between` }>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">MTG Card Database</h1>
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-300 dark:bg-gray-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for a card..."
            className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-500" size={20} />
        </div>

        {/* Placeholder for Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 h-40 flex items-center justify-center">
              <span className="text-gray-400">Card {index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md flex justify-around py-3 border-t border-gray-300 dark:border-gray-700">
        <button className="flex flex-col items-center text-gray-600 dark:text-gray-300">
          <Home size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 dark:text-gray-300">
          <Search size={24} />
          <span className="text-xs">Search</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 dark:text-gray-300">
          <User size={24} />
          <span className="text-xs">Profile</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 dark:text-gray-300">
          <Settings size={24} />
          <span className="text-xs">Settings</span>
        </button>
      </nav>
    </div>
  );
}
