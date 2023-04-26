
import './App.css';
import './components/Shimmer.css'
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Footer from './components/Footer'
import Body from './components/Body';
import  Header from './components/Header';
import About from './components/About';
import { createBrowserRouter ,RouterProvider,Outlet} from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';

function  App(){ 
  return (
    <>
       <Header/>
       <Outlet/>
       <Footer/>
    </>
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
        element:<Body/>,
      },
        {
          path:"/about",
          element:<About/>,
          children:[
            {
              path:"profile",
              element:<Profile/>
            }
          ]
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
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


export default App;
