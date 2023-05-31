import '../../styles/index.scss'

import Menu from '../../Components/UI/Menu';
import PageTitle from '../../Components/PageTitle';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import Button from '../../Components/UI/Button';
import OpacityText from '../../Components/Animation/OpacityText'
import SlideUpFadeIn from '../../Components/Animation/SlidenUpFadeIn'
import Cursor from '../../Components/UI/Cursor';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';

const PageContent = ({titre, h2, h2Text, imgName, ConclusionText, content, metaDescription}) => {

  return (
    <>
        <Helmet>
            <title>{titre} | LéoCreative Studio</title>
            <meta name="description" content={metaDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow" />
        </Helmet>
        <ToastContainer/>
        <Cursor/>
        <Menu/>
        <main>
        <PageTitle 
            title={titre}
        />
        <div className='page-content-intro taille-grille section-padding'>
            <div className='page-content-intro-img' style={{ backgroundImage: `url(/src/assets/CONTENT/${imgName})`}}></div>
            <SlideUpFadeIn height={-1} className='page-content-intro-text'>
                <h2>{h2}</h2>
                <p>{h2Text}</p>
            </SlideUpFadeIn>
        </div>
        <div className='page-content-text'>
            {content}
            <div className='page-content-text-btn'>
            <a href="#contact"><Button className='btn-contact' children='Prendre contact'/></a>
            </div>
        </div>
        <OpacityText height={1500}>
        <div className='page-content-conclusion taille-grille'>
            <p>{ConclusionText}</p>
        </div>
        </OpacityText>
        <Contact/>
        </main>
        <Footer/>
    </>
  );
};

export default PageContent;