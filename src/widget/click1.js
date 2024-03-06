import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './../images/01.png';

const Click1 = () => {
  const handleClick = async () => {
    try {
      const response = await fetch('https://widget-cms.adstudio.cloud/api/vim/clicks/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        console.log('Click event sent successfully.');
      } else {
        console.error('Failed to send click event.');
      }
    } catch (error) {
      console.error('Error sending click event:', error);
    }
  };

  return (
    <div>
      <Link to="/image2">
        <img
          className='widget-container'
          src={image1}
          alt="Image 1"
          onClick={handleClick} // Call handleClick function when the image is clicked
        />
      </Link>
    </div>
  );
};

export default Click1;
