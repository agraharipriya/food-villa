// import './Shimmer.css'

import { IMG_CDN_URL } from '../config';
const Shimmer =({
    name, 
    cuisines,
    cloudinaryImageId,
    lastMileTravelString
}) =>{
    return (<div className="restaurant-list flex flex-wrap m-5 p-2">
    {
        Array(15)
        .fill("")
        .map((e,index)=>(
            <div key={index} 
            className="grid gap-8 grid-flow-row grid-row-3 
            p-3 my-5 w-[400px] h-[230px] bg-slate-300 m-10  border-2 rounded ">
            </div>
        ))}
        
    </div>
    );
};

export default Shimmer;