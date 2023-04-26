
import Restrauntcard from "./Restrauntcard";
import { restrauntList } from "../config"; 
import {useState, useEffect} from 'react';
import Shimmer from "./Shimmer";



function filterData(searchText,restaurants){
  const filterData= restaurants.filter((restaurant)=>
   restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
   );

   return filterData;
}

const Body =()=>{

   // Avoid rendering a component

   const [filteredRestaurants,setFilteredRestaurants]=useState([]);
   const [allRestaurants,setAllRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");

   //  empty dependency array => once after render
   // dep array [searchText] => once after render + everytime after render (my serachText changes )
    useEffect(()=>{
      // api call after render
     getRestaurants(); 
    },[]);
   
    async function getRestaurants(){
      const data =await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"  
         );
      const json=await data.json();
      console.log(json);
      // optional chaining  
     
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); 
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); 
    }
    console.log("render")
     //  conditional rendering
   // if restaurants is empty=> shimmer ui
   // if restaurant has data => actual data ui
     if(!allRestaurants) return null;

    return (allRestaurants?.length === 0 )  ? (<Shimmer/> ):
    (
      <>
        <div className="search-container">
        
           <input type="text" 
            className="search-input"
            placeholder="search" 
            value={searchText}
            onChange={(e) => setSearchText (e.target.value)}
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
        return <Restrauntcard {...restaurant.data} key={restaurant.data.id} />
      }) }  
     </div>
     </>
    );
  };

  export default Body; 