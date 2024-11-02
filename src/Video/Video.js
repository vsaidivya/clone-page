import React from 'react'
import Videopage from '../Videopage/Videopage'
import Suggested from '../Suggested/Suggested'
import './Video.css'

export default function Video(props) {
  return (
    <div className="video-page">
      <div className='leftpage'><Videopage key={props.id} videoid={props.videoid}/></div>
      <div className='rightpage'><Suggested key={props.categoryid} categoryid={props.categoryid} videoid={props.id} setvideoid={props.setvideoid}/></div>
    </div>
  )
}
