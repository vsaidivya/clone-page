import React from 'react'
import './Videopage.css'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";

export default function Videopage(props) {
  const [viddata , setviddata] = React.useState()
  const [channeldata , setchanneldata] = React.useState()
  const [commentdata , setcommentdata] = React.useState()
  
  async function fetchviddata(){
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.videoid? props.videoid : ""}&key=${"AIzaSyA-1qI9Ue1_k1KtH6jZdOjBr9JKQpoiBdA"}`
    await fetch(url).then(response => response.json()).then(data => setviddata(data.items[0]))
  }

  async function fetchchanneldata() {
    try {
        const response = await fetch( `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${viddata? viddata.snippet.channelId : ""}&key=${"AIzaSyA-1qI9Ue1_k1KtH6jZdOjBr9JKQpoiBdA"}`)
        const data = await response.json();
        console.log('Fetched data:', data);

        // Ensure data is defined and has the expected structure
        if (data && Array.isArray(data) && data.length > 0) {
            console.log(data[0]); // Safely access the first element
        } else {
            console.error('Data format is incorrect or empty:', data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

  async function fetchcommentdata(){
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&videoId=${viddata? viddata.id : ""}&key=${"AIzaSyA-1qI9Ue1_k1KtH6jZdOjBr9JKQpoiBdA"}`
    await fetch (url).then(response => response.json()).then(data => setcommentdata(data.items))
  }

  React.useEffect(()=>{
    fetchviddata()
  },[])

  React.useEffect(()=>{
    fetchchanneldata()
    fetchcommentdata()
    console.log(channeldata)
  },[viddata])

//   React.useEffect(() => {
//     if (viddata && viddata.length > 0) {
//         // Access viddata[0] safely here
//     }
// }, [viddata]);


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


  return (
      
    <div className='video-card' >

      <iframe className='video-play'  src={`https://www.youtube.com/embed/${props.videoid}?autoplay=1`} controls></iframe>
     
      <h1>{viddata? viddata.snippet.title : ""}</h1>
      <div className='channel-info'>
      
      <div className='left'>
      <img src={`${channeldata? channeldata.snippet.thumbnails.medium.url: ""}`} alt="" className='channel-profile'/>
      <a>
      <a className='channel-name'>{viddata? viddata.snippet.channelTitle : ""}</a> 
      <div>{convertviews(channeldata? channeldata.statistics.subscriberCount : "")} subscribers</div>
      </a>
      <a className='subscribe'>Subscribe</a>
      </div>
      
      <div className='right'>
        
      <div>
      <a className='like'><AiFillLike /><span>{convertviews( viddata? viddata.statistics.likeCount : "")}</span></a>
      
      <a><AiFillDislike /></a>
      </div>

      <div>
      <a><IoIosShareAlt /></a>
      <a>Share</a>
      </div>

      <div>
      <a><LiaDownloadSolid /></a>
      <a>Download</a>
      </div>


      </div>

      
      </div>
      <hr/>
      
      <div className='description'>
         <div>{convertviews(viddata ? viddata.statistics.viewCount : "")} Views</div> 
        {viddata? viddata.snippet.description.slice(0,200) : ""}
      </div>

      <hr/>

      <div className='comment-count'>{commentdata ? convertviews(viddata.statistics.commentCount) : ""} comments</div>

      
        {commentdata && commentdata.map(comm => {
    return (
      <div className='comment'>
          <img src={`${comm? comm.snippet.topLevelComment.snippet.authorProfileImageUrl : ""}`}/>
          <div>
          <div className='name'>{comm? comm.snippet.topLevelComment.snippet.authorDisplayName.slice(1) : ""}</div>
          <span className='comm'>{comm? comm.snippet.topLevelComment.snippet.textOriginal : ""}</span>
          <a><AiFillLike /></a>
          <span>{convertviews(comm? comm.snippet.topLevelComment.snippet.likeCount : "")}</span>
          <a><AiFillDislike /></a>
          </div>
        </div>
    )
  })}
    </div>


  )
}
