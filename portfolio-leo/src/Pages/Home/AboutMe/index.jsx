import Cards from './Cards/Cards';

import {Link} from 'react-router-dom'
import '../../../styles/index.scss'
import quote from '../../../assets/quote.svg'
import Button from '../../../Components/UI/Button';
import SlideUpFadeIn from '../../../Components/Animation/SlidenUpFadeIn';
import SlideLeftFadeIn from '../../../Components/Animation/SlideLeftFadeIn';

const AboutMe = () => {

    return (
        <div className='about-section taille-grille section-padding'>
            <div>
                <div className='filigrane-about-me'>
                    <SlideUpFadeIn height='1400'>
                    <h2>About me</h2>
                    </SlideUpFadeIn>
                </div>
                <Cards/>
            </div>
            <div className='about-section-quote'>
                <SlideLeftFadeIn height='1500' className='about-section-quote-left'>
                    <img src={quote} alt="" />
                    <p>Je crois en une approche personnalisée pour chaque projet, ce qui garantit un site web unique et adapté à vos besoins spécifiques</p>
                </SlideLeftFadeIn>
                <SlideLeftFadeIn height='1500' className='about-section-quote-right'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. </p>
                </SlideLeftFadeIn>
            </div>
            <div className='about-section-btn'>
                <a href='/about-me'><Button children='Me découvrir'/></a>
            </div>
        </div>
    )
};

export default AboutMe;