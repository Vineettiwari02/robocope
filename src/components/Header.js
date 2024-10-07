import React from 'react'
import { NavLink } from 'react-router-dom';
import robologs from "../assests/robocop-high-resolution-logo-white-transparent.webp"
import robhead from "../assests/Asset 2.svg"
export const Header = () => {
  return (
    <div>        <header>
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
  </header></div>
  )
}
