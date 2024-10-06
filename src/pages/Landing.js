import React,{ useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Typed from 'typed.js';
import robologs from "../assests/robocop-high-resolution-logo-white-transparent.webp"
import robhead from "../assests/Asset 2.svg"
import mainrobo from "../assests/Asset 1.svg";


export const Landing = () => {
  const el = useRef(null); // Create a ref for the element

  useEffect(() => {
    const options = {
      strings: ["Let’s have a conversation with me"],
      typeSpeed: 200,
      loop: true,
    };

    const typed = new Typed(el.current, options); // Initialize Typed.js

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);
  return (
    <>
      <section className="landingbanner">
        <div className="container">
        <header>
          <div className="mainlogo">
          <img className='headrobocop' src={robhead} alt="logo" />
            <img src={robologs} alt="logo" />
          </div>
          <div className="mainnavigation">
            <nav className="navigation">
              <NavLink to="/" className="link" end>Home</NavLink>
              <NavLink to="/cart" className="link">About</NavLink>
              <NavLink to="/cart" className="link">Subscriptions</NavLink>
              <NavLink to="/cart" className="link">Blogs</NavLink>
              <NavLink to="/cart" className="link">Contact Us</NavLink>
            </nav>
          </div>
          <div className="calltoactions">  <button className='mainButton'> Log In</button></div>
        </header>
        <div className="textfeilds">
          <h1 className='mainheading' ref={el}></h1>
        
          <div className="robo">
          <img src={mainrobo} alt="mainrobo" className="mainrobo" />
          </div>
          
        </div>
        </div>
      </section>
    </>
  )
}
