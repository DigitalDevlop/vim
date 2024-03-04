import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from './../images/01_1.gif';
import image2 from './../images/02.png';

const Click2 = () => {
  const [currentImage, setCurrentImage] = useState(image1);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setCurrentImage(image2);
    }, 400); // Switch to image2 after 3 seconds

    const timeout2 = setTimeout(() => {
      navigate('/image3');
    }, 2000); // Navigate to /image3 after 6 seconds

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [navigate]); 

  return (
    <div className="slider-container">
      <img className={`widget-container ${currentImage === image2 ? 'glass-shatter' : ''}`} src={currentImage} alt="Image 2" />
    </div>
  );
};

export default Click2;
