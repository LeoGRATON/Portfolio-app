import Cards from './Cards/Cards';

import {Link} from 'react-router-dom'
import '../../../styles/index.scss'
import quote from '../../../assets/quote.svg'
import Button from '../../../Components/UI/Button';

const AboutMe = () => {

    return (
        <div className='about-section taille-grille section-padding'>
            <div>
                <div className='filigrane-about-me'>
                    <h2>About me</h2>
                </div>
                <Cards/>
            </div>
            <div className='about-section-quote'>
                <div className='about-section-quote-left'>
                    <img src={quote} alt="" />
                    <p>Je crois en une approche personnalisée pour chaque projet, ce qui garantit un site web unique et adapté à vos besoins spécifiques</p>
                </div>
                <div className='about-section-quote-right'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. </p>
                </div>
            </div>
            <div className='about-section-btn'>
                <a href='/about-me'><Button children='Me découvrir'/></a>
            </div>
        </div>
    )
};

export default AboutMe;