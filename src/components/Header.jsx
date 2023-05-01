import Logo from "../assets/img/Swiggy_logo.svg.png"
import {  useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";



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
   const {user}=useContext(UserContext);

    return (
      <div className='flex  lg:flex sm:flex-1 md:flex-2 lg:w-auto  justify-between items-center  mx-auto z-40 shadow-lg  h-[100px] relative'>
        <Title />
        <div className='nav-items  '>
        <ul className="flex  py-10 justify-around align-middle gap-5 font-semibold text-xl ">
        <li className="px-2 lg:mt-0 lg:inline-block  hover:text-orange-500"><Link to="/">Home</Link></li>
          <li className="px-2 lg:mt-0 lg:inline-block   hover:text-orange-500"><Link to="/about">About</Link></li>
          <li className="px-2 lg:mt-0 lg:inline-block  hover:text-orange-500"><Link to="/contact">Contact</Link></li>
          <li className="px-2 lg:mt-0 lg:inline-block  hover:text-orange-500"><Link to="/cart">Cart</Link></li>
          <li className="px-2 lg:mt-0 lg:inline-block  hover:text-orange-500"><Link to="/instamart">Instamart</Link></li>
        </ul>
       </div>
       {/* <h1 className="p-10 font-bold lg:mt-0 text-orange-600 text-xl">{user.name}</h1>   */}
       <h1 className="lg:mt-0 cursor-pointer" >{isOnline ? "🟢" : "🔴"}</h1>
      
       {
          (isLoggedIn ?  
          (<button onClick={()=> setIsLoggedIn(false)} className="rounded lg:mt-0 text-xl font-semibold m-5 p-5 hover:text-orange-500 ">Logout</button>) :
          <button onClick={()=> setIsLoggedIn(true)} className="font-semibold  lg:mt-0 text-xl rounded m-5 p-5 hover:text-orange-500 ">Login</button>)
       }
      
      </div>
    );
  }

  export default Header; 