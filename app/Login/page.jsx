"use client";

import { useState } from "react";
import {motion} from "framer-motion";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
  };
  return (
    <div>
      <h1>login page</h1>
      <motion.div
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        className="w-4/5 mx-auto  bg-white border rounded-xl shadow-lg p-6 mt-6 "
      >
        <form onSubmit={handleFormSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {error && <p className="text-red-500 text-3xl">{error}</p>}
          {message && <p className="text-green-500 text-sm">{message}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Page;
