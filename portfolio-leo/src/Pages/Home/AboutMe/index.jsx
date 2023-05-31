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
                    <h2>A propos</h2>
                    </SlideUpFadeIn>
                </div>
                <Cards/>
            </div>
            <div className='about-section-quote'>
                <SlideLeftFadeIn height='1500' className='about-section-quote-left'>
                    <img src={quote} alt="icon de citation" />
                    <p>Je crois en une approche personnalisée pour chaque projet, ce qui garantit un site web unique et adapté à vos besoins spécifiques</p>
                </SlideLeftFadeIn>
                <SlideLeftFadeIn height='1500' className='about-section-quote-right'>
                    <p>Le webdesign est pour moi une forme d'art numérique, où chaque ligne de code et chaque élément visuel sont soigneusement pensés pour créer une expérience utilisateur exceptionnelle. J'aime explorer les dernières tendances en matière de design, expérimenter avec des couleurs, des typographies et des mises en page afin de concevoir des interfaces modernes et attrayantes.</p>
                </SlideLeftFadeIn>
            </div>
            <div className='about-section-btn'>
                <a href='/about-me'><Button children='Me découvrir'/></a>
            </div>
        </div>
    )
};

export default AboutMe;