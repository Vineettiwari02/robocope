import React from 'react';
import erroeimg from "../assests/error.gif"
import { Link } from 'react-router-dom';

export const Errorpage = () => {
  return (
    <div>
        <div className="errorblock">
        <img src={erroeimg} alt="404error" />
        <Link className='mainButton' to="/"> Go Back Home</Link>
        </div>
       
    </div>
  )
}
