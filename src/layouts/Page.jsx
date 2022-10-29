import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import JobsList from '../pages/JobsList'
import Login from '../pages/Login'

const Page = () => {  
  return (
    <Routes>
      <Route path='/' exact element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/jobs' element={<JobsList/>}/>
    </Routes>
  )
}
export default Page
