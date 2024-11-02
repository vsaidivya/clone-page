import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Container from './Container/Container'
import './App.css'

export default function App() {

  const [ismenu , setismenu] = React.useState(true)
  const [category , setcategory] = React.useState(0)
  const [videoplay , setvideoplay] = React.useState(false)

  return (
    <div>
      <div className='navbar-sec'><Navbar key={0} setismenu={setismenu} setvideoplay={setvideoplay}  /></div>
      <div className='main-sec'>
      <div className='sidebar-sec'><Sidebar key={1} ismenu={ismenu} setcategory={setcategory} category={category} /></div>
      <div className='videos-sec'><Container key={2} ismenu={ismenu} setismenu={setismenu} setvideoplay={setvideoplay} videoplay={videoplay} category={category}/></div>
      </div>
    </div>
  )
}
