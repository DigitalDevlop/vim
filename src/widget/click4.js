import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from './../images/04.png';
import image3 from './../images/05.png';
import image4 from './../images/06.png';
import image5 from './../images/07.png';
import image6 from './../images/08.png';
import './widget.css'

const images = [image1, image3, image4, image5, image6];

const Click4 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

  return (
    <div>
      <Link to="/image5">
        <img className='widget-container image-transition' src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 4}`} />
      </Link>
    </div>
  );
};

export default Click4;
