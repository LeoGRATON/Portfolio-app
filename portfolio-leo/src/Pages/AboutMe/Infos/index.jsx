import Link from './Link'
import CardCV from './CardCV'

import imgleo from '../../../assets/ABOUTME/img-leo.png'
import quote from '../../../assets/quote.svg'
import './style.scss'

const Infos = () => {

    const image = 'src/assets/ABOUTME/experience'

    return (
        <div> 
            <div className='infos-about taille-grille'>
                <div className='scrolling-image'>
                    <img src={imgleo} alt="" />
                </div>
            <div>
                <h1>Léo<br/>GRATON</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas. Nam sed mi eleifend. (Poppins)</p>
                <div className='infos-about-link'>
                <Link nom='Github' pseudo='LeoGRATON'/>
                <Link nom='Github' pseudo='LeoGRATON'/>
                <Link nom='Github' pseudo='LeoGRATON'/>
                <Link nom='Github' pseudo='LeoGRATON'/>
                </div>

                <div className='infos-about-infos section-padding'>
                <div>
                <div className='infos-about-infos-quote'>
                <img src={quote} alt="" />
                <h2>Je crois en une approche personnalisée pour chaque projet, ce qui garantit un site web unique et adapté à vos besoins spécifiques</h2>
                </div>
                <p className='infos-about-infos-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. </p>
                </div>
                </div>
                <CardCV
                nom='Experience'
                imglogo={`${image}/logo-nc.png`}
                titleName='FREELANCE - depuis 2022'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas.  Nam sed mi eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
                <CardCV
                imglogo={`${image}/logo-nc.png`}
                titleName='FREELANCE - depuis 2022'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas.  Nam sed mi eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
                <CardCV
                imglogo={`${image}/logo-lpb.png`}
                titleName='ALTERNANCE - 2019-2020'
                className='card-cv-last'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas.  Nam sed mi eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
                <CardCV
                nom='Education'
                imglogo={`${image}/logo-nc.png`}
                titleName='FORMATION DEVELOPPEUR FULLSTACK JS - 6 mois (800h)'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas.  Nam sed mi eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
                <CardCV
                imglogo={`${image}/logo-mds.png`}
                titleName='EXPERT UX / UI DESIGN - CONSULTANT MANAGMENT DE PROJET'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas.  Nam sed mi eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
                <CardCV
                imglogo={`${image}/logo-lpb.png`}
                titleName='BACHELOR WEBDESIGN'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas.  Nam sed mi eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                className='card-cv-last'
                />
                <CardCV
                nom='Skills'
                titleName='Languages'
                />
                <CardCV
                titleName='Framworks'
                />
                <CardCV
                titleName='UI / Webdesign'
                className='card-cv-last'
                />
            </div>
            </div>
        </div>
    )
};

export default Infos;