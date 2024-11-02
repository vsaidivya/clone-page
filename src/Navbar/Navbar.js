import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { SiWindows11 } from "react-icons/si";
import './Navbar.css'

export default function Navbar(props) {
  return (
    <div className='Navbar'>

      <div className='left'>
      <span className='menu-logo' onClick={()=>props.setismenu(prev=> prev===true? false : true)} ><IoIosMenu /></span>
       <FaYoutube className='youtube-logo' onClick={()=>props.setvideoplay(false)} />
       <a className='name-logo'>YouTube</a>
       
      </div>

      <div className='search'>
      <input type='text' placeholder='Search' className='search-inp'/>
      <CiSearch className='search-logo' />
      </div>

      <div className='right'>
      <a><MdVideoCall className='video-logo' /></a>
       <a><SiWindows11 className='window-logo' /></a>
      <a><FaBell className='bell-logo' /></a>
       <a><CgProfile className='profile-logo' /></a>
      </div>

      </div>
  )
}
