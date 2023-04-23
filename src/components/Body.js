
import Restrauntcard from "./Restrauntcard";
import { restrauntList } from "../config";
import {useState} from 'react';



function filterData(searchText,restaurants){
  const filterData= restaurants.filter((restaurant)=>
   restaurant.data.name.includes(searchText));
   return filterData;
}
const Body =()=>{
   const [restaurants,setRestaurant]=useState(restrauntList);
    const [searchText,setSearchText]=useState(" ");
    return(
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
          const data= filterData(searchText,restaurants);
           setRestaurant(data);
           }}>
              Search
           </button>
        </div>
     <div className='restaurant-list'>
     
  {/* no key <<<< index key (use ONLY if you dont have anything ) <<< uniquie key (best practice) */}

     {restaurants.map((restaurant) =>{
        return <Restrauntcard {...restaurant.data} key={restaurant.data.id} />
      }) }  
     </div>
     </>
    );
  };

  export default Body;