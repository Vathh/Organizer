import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

const Page = () => {  
  return (
    <Routes>
      <Route path='/' exact element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}
export default Page
