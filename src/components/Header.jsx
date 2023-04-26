import Logo from "../assets/img/Swiggy_logo.svg.png"
import { useEffect, useState } from "react";
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
       </div>
       {
          (isLoggedIn ?  <button onClick={()=> setIsLoggedIn(false)}>Logout</button> :<button onClick={()=> setIsLoggedIn(true)}>Login</button>)
       }
      
      </div>
    );
  }

  export default Header; 