import React, { useEffect, useState } from 'react';
import '../../styles/index.scss';
import imgLeo from '../../assets/img-leo.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className={`hero ${isVisible ? 'visible' : ''}`}>
      <div>
        <img src={imgLeo} alt="" />
      </div>
      <h1 className={isVisible ? 'delayed-fade-in' : ''}>
        Web designer
        <br />
        <span>& Developer</span>
      </h1>
    </header>
  );
};

export default Hero;