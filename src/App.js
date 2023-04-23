
import './App.css';
import React from 'react';
import Footer from './components/Footer'
import Body from './components/Body';
// default import
import Header from './components/Header';
// named import
import { Title } from './components/Header';
import ReactDOM  from 'react-dom/client'; 
import { IMG_CDN_URL } from './config';
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
