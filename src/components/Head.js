import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResult } from '../utils/searchSlice';

const Head = () => {
  
  const dispatch = useDispatch();
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  
  const [searchQuery,setSearchQuery] = useState("");
  // console.log(searchQuery);
  
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion,setShowSuggestion] = useState(false);
  const searchCache = useSelector((store)=>store.search);
  // console.log(suggestions);

  

  const getSearchSuggestions = async() => {
    const Data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await Data.json();
    // console.log(json[1]);
    //  setSuggestions(searchData[1]);
     setSuggestions(json[1]);
     dispatch(cacheResult({
      [searchQuery]:json[1],
     }));
  }


  useEffect(()=>{
    //Api call over here

    //fuction to make API call afterevery key press 
    // if difference between two keypress is 200ms otherwise decline the API call
    const searchTimer = setTimeout(()=> {
      
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions()
      }
      
    
    },200)
    // getSearchSuggestions();

    //clearing the search timer otherwise their will be lot of timer  when ever the component loades
    // It is calling of useEffect return method
    return()=>{ 
      clearTimeout(searchTimer)
    };
  },[searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img 
          onClick={()=> toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=" 
          alt="menu" />
        <a href="/">
          <img 
          className="h-8 mx-2"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'
          alt='Youtube logo'
          />
        </a>
      </div>
      <div className=" col-span-10 px-48">

        <div>
          <input 
            className="px-2 w-1/2 border border-gray-400 p-2 rounded-l-full pl-8" 
            placeholder="Search..." 
            type='text'
            value={searchQuery}
            onChange={(e)=>{
              setSearchQuery(e.target.value)
            }}
            onFocus={()=> setShowSuggestion(true)}
            onBlur={()=> setShowSuggestion(false)}
          />
          <button 
            className="border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100 hover:bg-gray-200">
            🔍
          </button>
        </div>
        {
          showSuggestion &&(
            <div className=" shadow-lg fixed bg-white p-2 px-2 w-[28rem] rounded-lg border border-gray-100">
          <ul>
             {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            
          </ul>
            </div>
          )
        }


      </div>
      <div> 
        <img 
          className="h-8 col-span-1"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="userLogo" />
      </div>
    </div>
  )
}

export default Head