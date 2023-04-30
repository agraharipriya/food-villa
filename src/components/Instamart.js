import React, { useState } from 'react'
const Section=({title,description,isVisible,setIsVisible})=>{
  // const [isVisible,setIsVisible]=useState(false);

  return(
    <div className='border border-orange-500 rounded-lg p-2 m-2 flex flex-col justify-center items-center gap-3  '>
      <h3 className='font-bold  text-xl'>{title}</h3>
      {
        isVisible ?
         ( <button onClick={()=> setIsVisible(false)} 
         className='border border-green bg-orange-500 rounded-md  cursor-pointer text-white w-[70px]'>Hide</button>):
      (<button onClick={()=> setIsVisible(true)}
       className='border border-green bg-orange-500 rounded-md cursor-pointer text-white w-[70px]'>Show</button>
      )}
      {isVisible && <p className='text-lg'>{description}</p>}
      
    </div>
  )
}

const Instamart = () => {
  const [visibleSection,setVisibleSection] =useState("about")
  return (
    <div className='flex flex-col justify-center '>
    <h1 className='text-3xl p-2 m-2 font-bold text-center '>Instamart</h1>
    <Section title={"About Instamart"} 
    description={"Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience .Convenience is what makes us tick. It's what makes us get out of bed and say.Let's do this.Swiggy has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings."
    }
    isVisible={visibleSection ==="about"}
    setIsVisible={()=>setVisibleSection("about")}
    />

    <Section title={"Team Instamart"} 
    description={"We build innovative products & solutions that deliver unparalleled convenience to urban consumers.The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India."
    }
    isVisible={visibleSection==="team"}
    setIsVisible={()=>setVisibleSection("team")}
      
    />

    
   <Section title={"Career"} 
    description={"With love and support from consumers, Swiggy expanded far and wide, first through the entire city of Bengaluru and then across the entire country. Today, Swiggy is the leading food ordering and delivery platform in India."
    }
      isVisible={visibleSection==="career"}
      setIsVisible={()=>setVisibleSection("career")}
    />


    {/* <AboutInstaMart/>
    <DetailsofInstaMart/>
    <TeamInstamart/>
    <Product/>
    <Careers/> */}
   </div>
  );
};

export default Instamart;