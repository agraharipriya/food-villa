

 export const Title =()=>(
    <a href='/'>
   <img 
    className='logo' 
    alt="logo" 
    src='https://lh3.googleusercontent.com/d0N_cxDlZmB_xdmn35isAxea-vkZK5htJoiQKTtz4g8hC9QpaF2eYwDInqzjCw_amxxUqxwfefNrYT3GwOFmW5k30jhQdQ9VKbdPcf4'/>
   </a>
    
  );

  const Header =() =>{
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
      </div>
    );
  }

  export default Header; 