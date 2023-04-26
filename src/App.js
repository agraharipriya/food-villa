
import './App.css';
import './components/Shimmer.css'
import React from 'react';
import Footer from './components/Footer'
import Body from './components/Body';
// default import
import Header from './components/Header';
import { createBrowserRouter } from 'react-router-dom';
// named import
 
  {/**
      header
       -logo
       -nav items(right side)
       -cart

      body
        -search bar
        -restraunt list
         -Restracard
          -image
          -name
          -rating
          -cusiness 

          footer
           -links
           -copyright
      **
    */}

const appRouter=createBrowserRouter([
  {
    
  }
])
function App() { 
  return (
    <>
       <Header/>
       <Body/>
       <Footer/>
    </>
  );
}

export default App;
