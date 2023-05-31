import React from 'react';
import '../../styles/index.scss';

const SliderLogo = () => {
  const image = 'src/assets/HOME/slider-logo';

  return (
    <div className='slider-logo taille-grille section-padding'>
      <div className='slider-track'>
        <img src={`${image}/logo-github.png`} alt='logo de git hub' />
        <img src={`${image}/logo-wordpress.png`} alt='logo de wordpress' />
        <img src={`${image}/logo-figma.png`} alt='logo de figma' />
        <img src={`${image}/logo-react.png`} alt='logo de react' />
        <img src={`${image}/logo-adobe.png`} alt='logo de adobe' className='last-child'/>
      </div>
      <div className='slider-track'>
      <img src={`${image}/logo-github.png`} alt='logo de git hub' />
        <img src={`${image}/logo-wordpress.png`} alt='logo de wordpress' />
        <img src={`${image}/logo-figma.png`} alt='logo de figma' />
        <img src={`${image}/logo-react.png`} alt='logo de react' />
        <img src={`${image}/logo-adobe.png`} alt='logo de adobe' className='last-child'/>
      </div>
      <div className='slider-track'>
      <img src={`${image}/logo-github.png`} alt='logo de git hub' />
        <img src={`${image}/logo-wordpress.png`} alt='logo de wordpress' />
        <img src={`${image}/logo-figma.png`} alt='logo de figma' />
        <img src={`${image}/logo-react.png`} alt='logo de react' />
        <img src={`${image}/logo-adobe.png`} alt='logo de adobe' className='last-child'/>
      </div>
    </div>
  );
};

export default SliderLogo;