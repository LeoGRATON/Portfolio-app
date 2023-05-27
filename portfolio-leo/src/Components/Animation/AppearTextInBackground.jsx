import React, { useEffect, useRef, useState } from 'react';

import './Animation.scss';

const AppearTextInBackground = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(cardRef.current);

    return () => {
      observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div ref={cardRef} className={`${className} appear-text ${isVisible ? '' : 'visible'}`}>
     {children}
    </div>
  );
};

export default AppearTextInBackground;