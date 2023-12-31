import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
// import store1 from '../utils/Store1';

const SideBar = () => {
  const isMenuOpen = useSelector((store1) => store1.app.isMenuOpen);

  //This is known as early return
  if(!isMenuOpen){
    return null;
  }

  
  return (
    <div className="p-5 shadow-lg w-48 ">
      <ul >
        <li><Link to="/">Home</Link></li>
        <li> Shorts </li>
        <li><h1>Subscriptions</h1></li>
      </ul>
      <h1 className="font-bold pt-5 py-2 ">You</h1>
      <ul>
        <li> Your Channel</li>
        <li> History</li>
        <li> Your Videos</li>
        <li> Watch later</li>
        <li> Show more</li>
      </ul>
      <h1 className="font-bold pt-5">Suscription</h1>
      <ul>
        <li> Trending</li>
        <li> Shopping</li>
        <li> Music</li>
        <li> Movies</li>
        <li> Live</li>
        <li> Gaming</li>
        <li> News</li>
        <li> Sports</li>
        <li> Learning</li>
        <li> Faishon & Beauty</li>
        <li> Podcast</li>
      </ul>
    </div>
  )
}

export default SideBar