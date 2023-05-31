import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <span
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      style={{
        left: `${cursorPosition.x - 50 / 2}px`,
        top: `${cursorPosition.y - 50 / 2}px`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
       {isHovered && 'Click'}
    </span>
  );
};

export default Cursor;