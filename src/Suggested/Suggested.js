import React from 'react'
import './Suggested.css'

export default function Suggested(props) {

    const [suggvideos, setsuggvideos] = React.useState([])

    async function fetchdata (){
        await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${props.categoryid}&key=${"AIzaSyA-1qI9Ue1_k1KtH6jZdOjBr9JKQpoiBdA"}`)
        .then(response => response.json())
        .then(data => setsuggvideos(data.items))
    }

    React.useEffect(()=>{
        fetchdata()
    },[])

  

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
    props.setvideoid(id)
  }

    const suggested =suggvideos.map(eachitem =>{
       if(eachitem.id!=props.videoid){
        return (
          <div className='suggested' onClick={()=> openvideo(eachitem.id)}>
          <img src={eachitem? eachitem.snippet.thumbnails.standard.url : ""} alt =""/>
          <div>
              <p className='heading'>{eachitem? eachitem.snippet.title.slice(0,60):""}</p>
              <p className='sug-channel-name'>{eachitem? eachitem.snippet.channelTitle:""}</p>
              <p className='views-count'>{convertviews(eachitem? eachitem.statistics.viewCount:"")} views</p>
          </div>
      </div>
          )
       }
      })

  return (
    <div className='suggested-page'>
      {suggested}
    </div>
  )
}
