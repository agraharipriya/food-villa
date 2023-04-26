import {useParams} from 'react-router-dom';
import {  IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu=() =>{
    // how to read a dyanamic url params
    const  {id}=useParams();
    const restaurant=useRestaurant(id);
   
    return (!restaurant) ? <Shimmer/>: (
<div className='menu'>
   <div>
    <h1> Restaurant id: {id}</h1>
    <h2>{restaurant.name}</h2>
    <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
    <h3>{restaurant?.area}</h3>
    <h3>{restaurant?.city}</h3>
    <h3>{restaurant?.avgRating}</h3>
    <h3>{restaurant?.costForTwoMsg}</h3>
    </div>
    <div>
        <h1>Menu</h1>
        <ul>{
            Object.values(restaurant?.menu?.items).map((item)=>{
               return  <li key={item?.id}>{item?.name} <button>Add</button></li>
            }) }
        </ul>
    </div>
</div>
    )  ;
};

export default RestaurantMenu;