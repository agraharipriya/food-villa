import { useEffect, useState , } from 'react';
import {useParams} from 'react-router-dom';
import { FETCH_MENU_URL, IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';

const RestaurantMenu=() =>{
    // how to read a dyanamic url params
    const params=useParams();
    const {id} =params;
    // use proper name
    const [restaurant,setRestaurant]=useState(null);

   useEffect(()=>{
    getRestaurantInfo();
   },[]) ;

   async function getRestaurantInfo(){
    const data = await fetch(FETCH_MENU_URL+id);
    const json =await data.json();
    console.log(json.data);
    setRestaurant(json.data);
   }
   
    return (!restaurant) ? <Shimmer/>: (
<div className='menu'>
   <div>
    <h1> Restaurant id: {id}</h1>
    <h2>{restaurant.name}</h2>
    <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
    <h3>{restaurant?.area}</h3>
    <h3>{restaurant?.city}</h3>
    <h3>{restaurant?.avgRating}</h3>
    <h3>{restaurant?.costForTwoMsg}</h3></div>
    <div>
        <h1>
           Menu
        </h1>
        <ul>{
            Object.values(restaurant?.menu?.items).map((item)=>{
               return  <li key={item?.id}>{item?.name} <button>Add</button></li>
            }
               
            )
        }
        </ul>
    </div>

</div>
    )  
   
}

export default RestaurantMenu;