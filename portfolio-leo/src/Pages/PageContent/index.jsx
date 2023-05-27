import '../../styles/index.scss'

import Menu from '../../Components/UI/Menu';
import PageTitle from '../../Components/PageTitle';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import Button from '../../Components/UI/Button';
import UIDesign from './UIDesign';

const PageContent = ({titre, h2, h2Text, imgName, ConclusionText, content}) => {

  return (
    <>
        <Menu/>
        <main>
        <PageTitle 
            title={titre}
        />
        <div className='page-content-intro taille-grille section-padding'>
            <div className='page-content-intro-img' style={{ backgroundImage: `url(/src/assets/CONTENT/${imgName})`}}>

            </div>
            <div className='page-content-intro-text'>
                <h2>{h2}</h2>
                <p>{h2Text}</p>
            </div>
        </div>
        <div className='page-content-text'>
            {content}
            <div className='page-content-text-btn'>
            <a href="#contact"><Button className='btn-contact' children='Prendre contact'/></a>
            </div>
        </div>
        <div className='page-content-conclusion taille-grille'>
            <p>{ConclusionText}</p>
        </div>
        <Contact/>
        </main>
        <Footer/>
    </>
  );
};

export default PageContent;