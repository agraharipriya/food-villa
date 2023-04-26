import Logo from "../assets/img/Swiggy_logo.svg.png"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const loggedInUser =()=>{
  // api call to check authentication
  return true;
};
 export const Title =()=>(
    <a href='/'>
   <img 
    className='logo' 
    alt="logo" 
    src={Logo} />
   </a>
    
  );

  const Header =() =>{
   const[isLoggedIn,setIsLoggedIn]=useState(false);

    return (
      <div className='header'>
        <Title />
        <div className='nav-items'>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
       </div>
       {
          (isLoggedIn ?  <button onClick={()=> setIsLoggedIn(false)}>Logout</button> :<button onClick={()=> setIsLoggedIn(true)}>Login</button>)
       }
      
      </div>
    );
  }

  export default Header; 