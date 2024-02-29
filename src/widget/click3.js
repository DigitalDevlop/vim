
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from './../images/03.png';
import image2 from './../images/03_1.png';
import './widget.css'
import  ScratchCard  from 'lesca-react-scratch-card';
import { useNavigate } from 'react-router-dom';


const Click3 = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    console.log('Scratch completed');
    navigate('/image4');
};

  return (
    <div className='widget-container' >
     
 
     

     <ScratchCard
                        cover={image1}
                        percent={10}
                        width={300}
                        height={250}
                        onComplete={handleComplete}
                    >
                        <img className="img" src={image2} alt="Your Image" />
                    </ScratchCard>

    </div>
  );
};
  


export default Click3;
