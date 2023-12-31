import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCards, { AdVideoCard } from './VideoCards';
import { Link } from 'react-router-dom';

export const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const newData = await data.json();
    // console.log("hahahahahhaahhh");
    
    setVideos(newData.items);
    // console.log(newData.items);

  };

  useEffect(()=>{
    getVideos();
  },[]);

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[2]} />}
      {
        videos.map((vid)=>(
          <Link key={vid.id} to={"/watch?v=" + vid.id}><VideoCards key={vid.id} info = {vid} /></Link>
        ))
      }
      
    </div>
  )
}
export default VideoContainer;