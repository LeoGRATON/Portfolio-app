import React, { useEffect, useState } from 'react';
import '../../styles/index.scss';
import imgLeo from '../../assets/img-leo.png';
import AppearTextInBackground from '../../Components/Animation/AppearTextInBackground';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className={`hero ${isVisible ? 'visible' : ''}`}>
      <div>
        <img src={imgLeo} alt='image de léo graton' />
      </div>
      
      <h1>
        <AppearTextInBackground>
        <span className='white poppins'>Web designer</span>
        <br />
        <span>& Developer</span>
        </AppearTextInBackground>
      </h1>
    </header>
  );
};

export default Hero;