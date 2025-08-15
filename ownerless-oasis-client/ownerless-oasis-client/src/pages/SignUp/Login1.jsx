import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogIn from "../SocialLogin/socialLogin";

const Login1 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., send data to server)

    console.log(`Username: ${username}, Password: ${password}`);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 rounded-xl bg-white shadow-md px-8 py-12">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Welcome Back!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center">
            <label htmlFor="username" className="text-sm text-gray-600 mr-2">
              Username:
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="password" className="text-sm text-gray-600 mr-2">
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
          >
            Login1
          </button>
        </form>
        <div className="text-center text-sm text-gray-500">
        Create new account? {' '}
          <Link to="/signup" className="text-green-600 hover:text-green-700">
            SignUp
          </Link>
        </div>
        <div className="text-center text-sm text-gray-500">
          <a href="#" className="text-indigo-600 hover:text-indigo-700">
            Forgot Password?
          </a>
        </div>
        <SocialLogIn></SocialLogIn>
      </div>
    </div>
  );
};

export default Login1;
