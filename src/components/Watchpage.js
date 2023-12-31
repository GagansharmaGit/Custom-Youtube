import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import LiveChat from './LiveChat';
const Watchpage = () => {
    const [watchId] = useSearchParams();
    console.log(watchId.get("v"))
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
   <div className='flex flex-col w-full'>
    <div className="p-5 rounded-lg flex ">
      <div className=''>
        <iframe className="rounded-2xl"
             width="1000" 
            height="550" 
            src={"https://www.youtube.com/embed/" + watchId.get("v")}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>

        </iframe>
      </div>
      <div className='w-full'>
        <LiveChat/>
      </div>
     </div>
    <Comments/>
    </div>
  )
}

export default Watchpage