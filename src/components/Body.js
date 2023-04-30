import Restrauntcard from "./Restrauntcard";
import { FETCH_RESTAURANT_URL} from "../config"; 
import {useState, useEffect} from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import Icon from "../assets/img/Screenshot 2023-04-29 154322.png"


const Body =()=>{
   // Avoid rendering a component
   const [filteredRestaurants,setFilteredRestaurants]=useState([]);
   const [allRestaurants,setAllRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");

    useEffect(()=>{
      // api call after render
     getRestaurants(); 
    },[]);
   
    async function getRestaurants(){
      const data =await fetch(FETCH_RESTAURANT_URL );
      const json=await data.json();
      // optional chaining  
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); 
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); 
    }

    const isOnline=useOnline();

     if(!isOnline){
      return (
        <div className="flex flex-col justify-center items-center mt-52 mb-52 gap-5">
        <img src={Icon}></img>
        <h1 className="font-bold text-4xl text-slate-500">Connection Error</h1>
        <h1 className="font-semibold text-base text-slate-400">🔴Offline, please check your internet connection and try again!!</h1></div>
        
      )
     }

     //  conditional rendering
   // if restaurants is empty=> shimmer ui
     if(!allRestaurants) return null;

    return allRestaurants?.length === 0 ? (
    <Shimmer/> 
    ) : (
      <>
      <div></div>
        <div className=" p-5  bg-white  my-1 flex items-center justify-center ">
           <input type="text" 
            className="focus:outline-orange-300 p-5 my-3 text-xl w-[550px] border-solid border-2 border-orange-300 text-slate-300"
            placeholder="Search" 
            value={searchText}
            onChange={(e) => {setSearchText (e.target.value);
            }}
          />

           <button className="p-3 text-xl h-15 m-2  bg-orange-500  text-white rounded-md w-[200px]"
           onClick={()=>{
            // need to filter the data
            // update the state-restaurant variable
          const data= filterData(searchText,allRestaurants);
           setFilteredRestaurants(data);
           }}>
              Search
           </button>
        </div>
      <div className='flex flex-wrap '>
     {/*  You have to write logic no resaurants found hwre*/}
     
  {/* no key <<<< index key (use ONLY if you dont have anything ) <<< uniquie key (best practice) */}

     {filteredRestaurants.map((restaurant) =>{
        return(
         <Link to={"/restaurant/" + restaurant?.data?.id } 
           key={restaurant?.data?.id}>
        <Restrauntcard {...restaurant?.data}  />
        </Link>
        ) ;
      }) }  
     </div>
     </>
    );
  };

  export default Body; 