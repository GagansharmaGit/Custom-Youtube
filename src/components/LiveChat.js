import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMEssage } from '../utils/ChatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/Helper';
// import Store1 from '../utils/Store1';

const LiveChat = () => {

const [liveMessage,setLiveMessage] = useState("") 
  const dispatch = useDispatch();

  const ChatMsg = useSelector((Store1)=>Store1.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMEssage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1000 );

    return () => clearInterval(i);
  }, []);

  return (
    <div>
        <div className='m-2 w-full h-[550px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
          <div>
              {/* <ChatMessages name="Gagan Sharma" message="This is Gagan Sharma"/> */}
            {
              ChatMsg.map((c,index)=>(
                <ChatMessages key={index} name={c.name} message={c.message}/>
              ))
            }
          </div>

          <input type='text'/>
      </div>

      <form className=' w-full p-2 ml-2 border border-black rounded-lg bg-green-200' 
        onSubmit={(e)=>{
          e.preventDefault();
          dispatch(addMEssage({
            name:"Gagan Sharma",
            message:liveMessage
          }));
          setLiveMessage("");
          console.log(liveMessage);
        }}>
        
        
        <input className='bg-blue-200 w-72 rounded-xl pl-5 px-2' placeholder='Type'
          value={liveMessage}
          onChange={(e)=>{
            
                setLiveMessage(e.target.value)
            
          }}/>
        <button className='w-[80px] ml-2 border border-black bg-gray-300 rounded-xl'
          // onClick={()=>{
          //   dispatch(addMEssage({
          //     name:"Gagan Sharma",  
          //     message:liveMessage
          //   }));
          //   setLiveMessage(""); 
          // }}  
        >Send</button>
      </form>
    </div>
  )
}

export default LiveChat;