import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '../../Components/UI/Button';
import Loading from '../../Components/UI/Loading';

import '../../styles/index.scss';

const SelectedWork = () => {
  const [works, setWorks] = useState([]);
  const [selectedWork, setSelectedWork] = useState(4);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Nouvelle variable d'état


  useEffect(() => {
    axios
      .get('http://api-portfolio-app.leo-graton.fr/works')
      .then(response => {
        setWorks(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des travaux :', error);
      });
      const handleScroll = () => {
        const height = window.scrollY;
        setScrollHeight(height);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const handleMouseEnter = (work) => {
    setHoveredImage(`src/assets/REALISATONS/${work.img_ref}`);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const imageOffset = -80; // Distance entre le curseur et l'image
    const newPosition = {
      x: clientX - imageOffset,
      y: clientY + scrollHeight - 200,
    };
    setMousePosition(newPosition);
  };

  return (
    <div className='selected-works section-padding'>
      {isLoading ? ( // Afficher le composant Loading lorsque isLoading est true
        <Loading />
      ) : (
        <>
      <div className='selected-works-title taille-grille'>
        <div>
          <h2>Selected Works({selectedWork})</h2>
          <p>A piece from my selection of favorites</p>
        </div>
        <a href='/works'>
          <Button children='All Works' />
        </a>
      </div>
      <div>
        {works.slice(0, selectedWork).map((work, index) => (
          <Link to={`/works/${work.titre}`}>
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
          </Link>
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
      </>
      )}
    </div>
  );
};

export default SelectedWork;