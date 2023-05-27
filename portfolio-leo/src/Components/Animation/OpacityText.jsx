import React, { useEffect, useState } from 'react';
import './Animation.scss';

const SlideLeftFadeIn = ({ children, height }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > height) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier la visibilité lors du montage initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [height]);

  return (
    <div className={`opacity-text ${isVisible ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default SlideLeftFadeIn;