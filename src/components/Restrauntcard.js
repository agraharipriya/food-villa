
import { IMG_CDN_URL } from "../config";
// Optional Chaining
const Restrauntcard=({
    name, 
    cuisines,
    cloudinaryImageId,
    lastMileTravelString}) =>{
  
    return(
      <div className="card">
      
      <img src={IMG_CDN_URL+ cloudinaryImageId} alt="" />
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{lastMileTravelString} minutes</p>
      
    </div>
    );
  };

  export default Restrauntcard;