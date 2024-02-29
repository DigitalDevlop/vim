
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './../images/01.png';

const Click1 = () => {
  return (
    <div>
      <Link to="/image2">
        <img className='widget-container'  src={image1} alt="Image 1" />
      </Link>
    </div>
  );
};

export default Click1;
