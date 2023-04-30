import React from 'react'
import { Outlet } from 'react-router-dom';

 const About = () => {
  return (
    <>
      <div className="about-us flex flex-col gap-5 text-lg my-5 justify-center items-center bg-orange-500 w-full h-screen">
        
        <p>
          Welcome to our food delivery app! Our mission is to provide fresh and
          delicious meals to our customers in the most convenient way possible.
          We believe that everyone deserves access to healthy and flavorful
          food, no matter how busy their schedule may be.
        </p>
        <p>
          Our team of experienced chefs and delivery drivers work tirelessly to
          ensure that every meal is prepared with the utmost care and delivered
          promptly to your doorstep. We source our ingredients from local and
          organic farms whenever possible, and we never use artificial
          preservatives or additives.
        </p>
        <p>
          Whether you're looking for a quick and easy lunch, a hearty dinner, or
          a tasty snack, we've got you covered. Browse our menu and place your
          order today!
        </p>
      </div>
      <Outlet />
    </>
  );
};

export default About;
