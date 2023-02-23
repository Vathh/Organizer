import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const Subpage = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      {/* <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/stats' element={<Statistics/>}/>
      <Route path='/addTask' element={<AddTask/>}/>  */}
    </Routes>
  )
}

export default Subpage