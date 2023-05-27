import React, { useEffect, useRef, useState } from 'react';
import Moreinfo from '../../../../Components/UI/Moreinfo';
import '../../../../styles/index.scss';

const Card = ({ number, title, description, url }) => {
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
    <div ref={cardRef} className={`card ${isVisible ? '' : 'visible'}`}>
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url}><Moreinfo/></a>
    </div>
  );
};

export default Card;