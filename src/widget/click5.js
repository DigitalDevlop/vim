
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './../images/08.png';
import './widget.css'

const Click5 = () => {
  return (
    <div>
    
      <Link to="/image8">
        <img className='widget-container' src={image1} alt="Image 5" />
      </Link>
      <button className="vim-button">Click කරන්න</button>
    </div>
  );
};

export default Click5;
