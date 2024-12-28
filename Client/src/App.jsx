import React,{ useState } from 'react'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={< Home/>} />
      </Routes>
    </>
  )
}

export default App
