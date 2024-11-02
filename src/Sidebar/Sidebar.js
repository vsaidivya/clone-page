import React from 'react'
import './Sidebar.css'
import { IoMdHome } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";
import { LiaNewspaperSolid } from "react-icons/lia";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { RiChatSmileFill } from "react-icons/ri";
import { DiTechcrunch } from "react-icons/di";


export default function Sidebar(props) {


  return (
    <div className='sidebar' >

      <div className={`section ${props.category===0? "active" : ""}`} onClick={()=> props.setcategory(20)} >
        <a className='section-logo'><IoMdHome/></a>
        {props.ismenu && <label className='section-name' >Home</label>}
      </div>

      <div className={`section ${props.category===20? "active" : ""}`} onClick={()=> props.setcategory(20)} >
        <a className='section-logo' ><IoGameController /></a>
        {props.ismenu && <label className='section-name' >Gaming</label>}
      </div>

      <div className={`section ${props.category===10? "active" : ""}`} onClick={()=> props.setcategory(10)} >
        <a className='section-logo'><IoMdMusicalNote/></a>
        {props.ismenu && <label className='section-name' >Music</label>}
      </div>

      <div className={`section ${props.category===17? "active" : ""}`} onClick={()=> props.setcategory(17)} >
        <a className='section-logo'><MdOutlineSportsBasketball/></a>
        {props.ismenu && <label className='section-name' >Sports</label>}
      </div>

      <div className={`section ${props.category===23? "active" : ""}`} onClick={()=> props.setcategory(23)} >
        <a className='section-logo'><RiChatSmileFill /></a>
        {props.ismenu && <label className='section-name' >Comedy</label>}
      </div>

      <div className={`section ${props.category===25? "active" : ""}`} onClick={()=> props.setcategory(25)}>
        <a className='section-logo' ><LiaNewspaperSolid/></a>
        {props.ismenu && <label className='section-name' >News</label>}
      </div>

      <div className={`section ${props.category===1? "active" : ""}`} onClick={()=> props.setcategory(1)} >
        <a className='section-logo'><BiSolidCameraMovie/></a>
        {props.ismenu && <label className='section-name' >Films</label>}
      </div>

      <div className={`section ${props.category===15? "active" : ""}`} onClick={()=> props.setcategory(15)} >
        <a className='section-logo'><MdPets /></a>
        {props.ismenu && <label className='section-name' >Pets</label>}
      </div>

      <div className={`section ${props.category===2? "active" : ""}`} onClick={()=> props.setcategory(2)} >
        <a className='section-logo'><FaCarSide/></a>
        {props.ismenu && <label className='section-name' >Automobiles</label>}
      </div>

      <div className={`section ${props.category===28? "active" : ""}`} onClick={()=> props.setcategory(28)} >
        <a className='section-logo'><DiTechcrunch /></a>
        {props.ismenu && <label className='section-name' >Technology</label>}
      </div>



      <hr className='line'/>

    </div>
  )
}
