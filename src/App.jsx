import React from 'react'
import Header from './Components/Header'
import Home from './Screens/Home'
import About from './Screens/About'
import { Outlet } from 'react-router'
export default function App() {
  return (
    <div className='bg-primary-red w-full h-full'>
      <div className='pt-5'>
        <Header />
      </div>
      <Outlet />
      {/* <Header /> */}
    </div>
  )
}
