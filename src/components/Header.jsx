import Logo from "../assets/img/Swiggy_logo.svg.png"
import {  useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

// Spa
// client side routing
 export const Title =()=>(
    <a href='/'> 
    <img  className='h-35 w-60 p-6 ' alt="logo" src={Logo} />
   </a>
  );

  const Header =() =>{
   const[isLoggedIn,setIsLoggedIn]=useState(false);
   
   const isOnline=useOnline();

    return (
      <div className='flex justify-between items-center  mx-auto z-40  shadow-lg  h-[100px] relative'>
        <Title />
        <div className='nav-items'>
        <ul className="flex py-10 justify-around align-middle gap-5 font-semibold text-xl">
        <li className="px-2  hover:text-orange-500"><Link to="/">Home</Link></li>
          <li className="px-2  hover:text-orange-500"><Link to="/about">About</Link></li>
          <li className="px-2  hover:text-orange-500"><Link to="/contact">Contact</Link></li>
          <li className="px-2 hover:text-orange-500"><Link to="/cart">Cart</Link></li>
          <li className="px-2 hover:text-orange-500"><Link to="/instamart">Instamart</Link></li>
        </ul>
       </div>
       {
          (isLoggedIn ?  <button onClick={()=> setIsLoggedIn(false)} className="rounded  text-xl font-semibold m-5 p-5 hover:text-orange-500">Logout</button> :<button onClick={()=> setIsLoggedIn(true)} className="font-semibold text-xl rounded m-5 p-5 hover:text-orange-500">Login</button>)
       }
      
      </div>
    );
  }

  export default Header; 