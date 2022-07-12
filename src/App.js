import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import './App.css'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Logout from './Pages/Logout'
import UserContext from './UserContext'
import CourseView from './Components/CourseView'
import CoursePackage from './Components/CoursePackage'
import MyPackage from './Pages/MyPackage'

export default function App() {
  const [user, setUser] = useState({
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email')
  })
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/courses/:courseId' element={<CoursePackage />} />
          <Route path='/my-package' element={<MyPackage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}
