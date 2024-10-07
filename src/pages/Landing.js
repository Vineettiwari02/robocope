import React,{ useEffect, useRef } from 'react';
import Typed from 'typed.js';
import mainrobo from "../assests/Asset 1.svg";
import { Header } from '../components';
import { Chatbot } from '../components';


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
          <Header/>
        <div className="textfeilds">
          <h1 className='mainheading' ref={el}></h1>
        
          <div className="robo">
          <img src={mainrobo} alt="mainrobo" className="mainrobo" />
          </div>
          
        </div>
        <Chatbot/>
        </div>
      
      </section>
    </>
  )
}
