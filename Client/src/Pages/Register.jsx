import React from 'react'
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault(); 
    const username = e.target.username.value
    const email = e.target.email.value
    const password = e.target.password.value

    try {
      const res = await axios.post("http://localhost:4000/register", {
        username, email, password
      })
      Cookies.set("token",res.data.token)
      navigate('/home');
    } catch(e){
      console.log("registration failed",e);
      
    }
  }
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-white">Register</h1>
          <form method='post' onSubmit={submitHandler} id="registrationForm" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-400 font-medium">Username</label>
              <input
                name='username'
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full mt-1 p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 font-medium">Email</label>
              <input
                name='email'
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-400 font-medium">Password</label>
              <input
                name='password'
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full mt-1 p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              Register
            </button>
            <p className="text-gray-400 text-sm text-center mt-4">
              Already have an account?
              <a href="/login" className="text-green-500 hover:underline">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
