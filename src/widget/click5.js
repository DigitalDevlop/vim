
import React from 'react';
import { Link } from 'react-router-dom';
import image5 from './../images/05.png';

const Click5 = () => {
  return (
    <div>
    
      <Link to="/image5">
        <img className='widget-container' src={image5} alt="Image 5" />
      </Link>
    </div>
  );
};

export default Click5;
