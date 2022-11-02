import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Jobs from '../pages/Jobs'
import Orders from '../pages/Orders'
import Services from '../pages/Services'
import Statistics from '../pages/Statistics'

const Subpage = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/stats' element={<Statistics/>}/>
    </Routes>
  )
}

export default Subpage
