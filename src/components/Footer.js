import { FaInstagram ,FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer =() =>{
    return(
      <>
      <div className="flex flex-col bg-black text-white">
     <div className="flex flex-row justify-evenly my-8 ">
		<div className="flex flex-col gap-3">
    <h1 className="font-semibold text-2xl">Company</h1>
      <ul className="flex flex-col gap-3">
        <li >About</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="flex flex-col gap-3">
      <h1 className="font-semibold text-2xl">For You</h1>
      <p>Privacy policy</p>
      <p>Terms</p>
      <p>Security</p>
      <p>Sitemap</p>
    </div>
    <div className="flex flex-col gap-3 ">
      <h1 className="font-semibold text-2xl">Social Links</h1>
     <ul className="flex flex-row gap-5" >
     <FaInstagram/>
      <FaFacebook/>
      <FaLinkedin/>
     
     </ul>
     
    </div>
  
	 </div>
   <div className="h-1 bg-white m-5 p-0"></div>
   <div className="flex flex-col justify-around items-center p-9 ">
    <p className="">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. </p>
    <p>  © 2023 Swiggy Ltd. All rights reserved.</p>
  
    </div>
   </div>
  </>

    );
};



    export default Footer;