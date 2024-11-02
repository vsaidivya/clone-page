import React from 'react'
import './Mainpage.css'
import Video from '../Video/Video'

//data.items[0].snippet.thumbnails.medium.url

export default function Mainpage(props) {
 const [video , setvideo] = React.useState(false)
 const [videoid , setvideoid] = React.useState()
 const [img,setimg] = React.useState()

//  const link = fetchchannelprofile().then(result => {return result})
//  console.log(link)

 async function fetchchannelprofile(id){
  const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${"UCEVVENPnHv-kcp2PqQuJvHg"}&key=${"AIzaSyB7st1egQfIpq-8epklBfQfnaIoiQ9rU2A"}`
  const imagelink=await fetch(url).then(response => response.json()).then(data => data.items[0].snippet.thumbnails.medium.url)
}

  function convertviews(views){
    if(views>=1000000){
      return Math.floor(views/1000000)+"M";
    }
    else if(views>1000){
      return Math.floor(views/1000)+"K"
    }
    else{
      return views
    }
  }
 
  function openvideo(id){
    setvideoid(id)
    setvideo(true)
    console.log(videoid)
  }

const allcards =(props.videodata).map(eachitem =>{
  
  return (
    <div className='card' onClick={()=>openvideo(eachitem.id)}>
      <img src={eachitem.snippet.thumbnails.standard.url} alt =""/>
      <h2>{eachitem.snippet.title.slice(0,78)}</h2>
      <h3>{eachitem.snippet.channelTitle}</h3>
      <p>{convertviews(eachitem.statistics.viewCount)} views</p>
    </div>
  )
})

  return (
    <div className='main-page'>
      {!video && allcards}
      {video && <Video key={videoid} id={videoid} categoryid={props.id}/>}
    </div>
  )
}

