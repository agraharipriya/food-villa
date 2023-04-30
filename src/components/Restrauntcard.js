
import { IMG_CDN_URL } from "../config";
// Optional Chaining
const Restrauntcard=({
    name, 
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,user}) =>{
  
    return(
      <div className="grid grid-flow-row  p-3 text-neutral-600  my-5 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 m-2 hover:border-2">
      <img src={IMG_CDN_URL+ cloudinaryImageId} alt="" className="rounded-t h-82 max-w-[430px] object-cover p-5 aspect-auto" />
      <h2 className="font-bold text-xl  leading-relaxed text-gray-800 dark:text-gray-300">{name}</h2>
      <p className=" text-gray-500 dark:text-gray-400">{cuisines.join(", ").split("12")}</p>
      <p className=" text-gray-500 dark:text-gray-400">{lastMileTravelString} mins</p>
      <p>{user.name} rating</p>
      
    </div>
    );
  };

  export default Restrauntcard;