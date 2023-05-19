import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '../../Components/UI/Button';

import '../../styles/index.scss';

const SelectedWork = () => {
  const [works, setWorks] = useState([]);
  const [selectedWork, setSelectedWork] = useState(4);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    axios
      .get('http://api-portfolio-app.leo-graton.fr/works')
      .then(response => {
        setWorks(response.data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des travaux :', error);
      });
  }, []);

  const handleMouseEnter = (work) => {
    setHoveredImage(`src/assets/${work.img_ref}`);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const imageOffset = -40; // Distance entre le curseur et l'image
    const newPosition = {
      x: clientX - imageOffset,
      y: clientY - imageOffset,
    };
    setMousePosition(newPosition);
  };

  return (
    <div className='selected-works section-padding'>
      <div className='selected-works-title taille-grille'>
        <div>
          <h2>Selected Works({selectedWork})</h2>
          <p>A piece from my selection of favorites</p>
        </div>
        <Link to='/works'>
          <Button children='All Works' />
        </Link>
      </div>
      <div>
        {works.slice(0, selectedWork).map((work, index) => (
            <div className='selected-works-full'>
          <div
            className='selected-works-one taille-grille'
            key={work.id}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter(work)}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <h3>{work.titre}</h3>
              <p>{work.category}</p>
            </div>
            <p className='selected-works-one-pagination'>{`/0${index + 1}`}</p>
          </div>
          </div>
        ))}
      </div>
      {hoveredImage && (
        <img
          className='hovered-image'
          src={hoveredImage}
          alt='Hovered Image'
          style={{ left: mousePosition.x, top: mousePosition.y }}
        />
      )}
    </div>
  );
};

export default SelectedWork;