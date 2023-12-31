import React from 'react'

const VideoCards = (props) => {
    // console.log(props);

//     const { snippet, statistics } = props.info;
// const { channelTitle, title, thumbnails } = props.snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-md h-[22rem] flex flex-col  ">
        <div><img className="rounded-lg h-[250] w-[100]" src={props?.info?.snippet?.thumbnails.medium.url} alt="videocard" /></div>
        {/* <div className='flex flex-col justify-between -top-11'> */}
            <div className='font-bold py-2 -top-15'>{props?.info?.snippet?.title}</div>
            <div>{props?.info?.snippet?.channelTitle}</div>
            <div className='left-0 bottom-0'>{props?.info?.statistics?.viewCount} Views</div>
        {/* </div> */}
    </div>
  )
}
export const AdVideoCard = ({info}) => {
  return (
    <div className="p-1 m-1  border-black border-2 rounded-lg hover:blur-sm">
      <VideoCards info={info} />
    </div>
  );
};
export default VideoCards;