import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import JobsList from '../pages/JobsList'

const Subpage = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/jobs' element={<JobsList/>}/>
    </Routes>
  )
}

export default Subpage
