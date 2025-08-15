import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup1 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate user input
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Password length validation
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const api = axios.create({
      baseURL: 'http://localhost:8081', // Replace with your server URL
    });

    try {
      const response = await api.post('/signup', {
        firstName,
        lastName,
        email,
        password, // You'll need to hash the password on the backend before storing
        confirmPassword, // Make sure you include confirmPassword
      });

      console.log(response.data); // Handle successful signup response
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      alert('Signup successful!');
    } catch (error) {
      console.error(error);
      alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 rounded-xl bg-white shadow-md px-8 py-12">
        <h1 className="text-3xl font-bold text-center text-green-600">Create Your Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center">
            <label htmlFor="firstName" className="text-sm text-gray-600 mr-2">
              First Name:
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="lastName" className="text-sm text-gray-600 mr-2">
              Last Name:
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="email" className="text-sm text-gray-600 mr-2">
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
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
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="confirmPassword" className="text-sm text-gray-600 mr-2">
              Confirm Password:
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:offset-2 focus:ring-green-700"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center text-sm text-gray-500">
          Already have an account? {' '}
          <Link to="/login" className="text-green-600 hover:text-green-700">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup1;
