
// import './App.css';
import "./index.css";
// import './components/Shimmer.css'
import React ,{lazy,Suspense, useState} from 'react';
import  ReactDOM  from 'react-dom/client';
import Footer from './components/Footer'
import Body from './components/Body';
import  Header from './components/Header';
// import About from './components/About';
import { createBrowserRouter ,RouterProvider,Outlet} from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Shimmer from './components/Shimmer';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import UserContext from "./utils/UserContext";
// import Instamart from './components/Instamart';
// lazy loading,dynamic import ,on demand loading,code splitting,bundle chunking ;
const Instamart=lazy(()=>import("./components/Instamart"));
const About= lazy(() => import("./components/About"));

const   App = ()=> {
  const [user,setUser] =useState({
    name:"4*",
    email:"agpriya@gmail.com",
  });

  
  return (
    <UserContext.Provider value={{
      user:user,
    }}>
       <Header/>
       <Outlet/>
       <Footer/>
    </UserContext.Provider>
  );
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body user={
          {
            name:"4⋆",
            email:"agpriyagmail.com"
          }
        }/>,
      },
        {
          path:"/about",
          element:(
           <Suspense fallback={<h1>Loading....</h1>}>
          <About/>
          </Suspense>),
          children:[
            {
              path:"profile",
              element:<Profile/>
            },
          ],
        },
        {
          path:"/contact",
          element:<Contact/>,
        },
        {
          path:"/cart",
          element:<Cart/>,
        },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>,
      },
      {
        path:"/instamart",
        element:(
          <Suspense fallback={<Shimmer/>}>
            <Instamart/>
          </Suspense>
        ),
      },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


export default App;
