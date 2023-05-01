import { createContext } from "react";

const UserContext=createContext({
    user:{
        name:"Priya Agrahari",
    rating:"4⭐",
    email:"dummya@gmail.com",
}
});

export default UserContext;