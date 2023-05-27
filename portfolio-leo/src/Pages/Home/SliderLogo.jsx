import React from 'react';
import '../../styles/index.scss';

const SliderLogo = () => {
  const image = 'src/assets/HOME/slider-logo';

  return (
    <div className='slider-logo taille-grille section-padding'>
      <div className='slider-track'>
        <img src={`${image}/logo-github.png`} alt='' />
        <img src={`${image}/logo-wordpress.png`} alt='' />
        <img src={`${image}/logo-figma.png`} alt='' />
        <img src={`${image}/logo-react.png`} alt='' />
        <img src={`${image}/logo-adobe.png`} alt='' className='last-child'/>
      </div>
      <div className='slider-track'>
        <img src={`${image}/logo-github.png`} alt='' />
        <img src={`${image}/logo-wordpress.png`} alt='' />
        <img src={`${image}/logo-figma.png`} alt='' />
        <img src={`${image}/logo-react.png`} alt='' />
        <img src={`${image}/logo-adobe.png`} alt='' className='last-child'/>
      </div>
      <div className='slider-track'>
        <img src={`${image}/logo-github.png`} alt='' />
        <img src={`${image}/logo-wordpress.png`} alt='' />
        <img src={`${image}/logo-figma.png`} alt='' />
        <img src={`${image}/logo-react.png`} alt='' />
        <img src={`${image}/logo-adobe.png`} alt='' className='last-child'/>
      </div>
    </div>
  );
};

export default SliderLogo;