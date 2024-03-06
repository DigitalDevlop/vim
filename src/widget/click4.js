import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from './../images/04.png';
import image3 from './../images/05.png';
import image4 from './../images/06.png';
import image5 from './../images/07.png';
import image6 from './../images/08.png';
import './widget.css';

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

  const handleButtonClick = async () => {
    try {
      const response = await fetch('https://widget-cms.adstudio.cloud/api/vim/clicks/3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Omit the body property to send an empty request body
      });
      if (response.ok) {
        console.log('API call successful.');
        // Redirect to WhatsApp link after API call
        window.location.href = 'https://wa.me/message/ZL55EG3J4EUKA1';
      } else {
        console.error('Failed to make API call.');
      }
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };



  return (
    <div>
      <img
        src={images[currentImageIndex]} 
        alt={`Image ${currentImageIndex + 4}`} 
      />
      {/* Render the button only for the last image */}
      {currentImageIndex === images.length - 1 && (
        <button className='button'
         
           
          onClick={handleButtonClick}
        >
          Click කරන්න
        </button>
      )}
    </div>
  );
};

export default Click4;
