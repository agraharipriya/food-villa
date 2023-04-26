import Restrauntcard from "./Restrauntcard";
import { FETCH_RESTAURANT_URL} from "../config"; 
import {useState, useEffect} from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";


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
      return <h1>🔴Offline, please check your internet connection!!</h1>
     }

     //  conditional rendering
   // if restaurants is empty=> shimmer ui
     if(!allRestaurants) return null;

    return allRestaurants?.length === 0   ? (<Shimmer/> ):
    (
      <>
        <div className="search-container">
           <input type="text" 
            className="search-input"
            placeholder="Search" 
            value={searchText}
            onChange={(e) => {setSearchText (e.target.value);
            }}
           >
           </input>

           <button className="search-btn"
           onClick={()=>{
            // need to filter the data
            // update the state-restaurant variable
          const data= filterData(searchText,allRestaurants);
           setFilteredRestaurants(data);
           }}>
              Search
           </button>
        </div>
     <div className='restaurant-list'>
     {/*  You have to write logic no resaurants found hwre*/}
     
  {/* no key <<<< index key (use ONLY if you dont have anything ) <<< uniquie key (best practice) */}

     {filteredRestaurants.map((restaurant) =>{
        return(
         <Link to={"/restaurant/" + restaurant?.data?.id } 
           key={restaurant?.data?.id}>
        <Restrauntcard {...restaurant?.data} />
        </Link>) ;
      }) }  
     </div>
     </>
    );
  };

  export default Body; 