import Button from '../../../Components/UI/Button';
import ClientCard from './ClientCard';
import AppearTextInBackground from '../../../Components/Animation/AppearTextInBackground';

import '../../../styles/index.scss'
import SlideUpFadeIn from '../../../Components/Animation/SlidenUpFadeIn';

const Client = () => {

    const image = 'src/assets/HOME/client'

    return (
        <div className='client-section taille-grille section-padding'>
            <AppearTextInBackground>
            <div className='client-section-title'>
                <h2><span className='white poppins'>Que disent</span><br/><span>mes clients ?</span></h2>
                <p>Ces témoignages sont issus principalement des avis récoltés sur Google suite à un projet ou à des travaux réalisés en équipe.</p>
            </div>
            </AppearTextInBackground>
            <div className='client-section-cards'>
                <SlideUpFadeIn height='2600'>
                <ClientCard
                iconCount={5}
                imgSrc={`${image}/logo-1.svg`}
                title='Création d’un interface de gestion de cuisine ou restaurant'
                testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget ipsum in neque gravida dignissim. Pellentesque quam risus, facilisis nec dolor eget, semper ultrices velit. Integer luctus lobortis tortor ut pellentesque. Vivamus ultricies tortor mattis, vestibulum orci sit amet, vestibulum purus. Phasellus eget vulputate libero. Proin accumsan libero sed nisl placerat, non placerat nisi rhoncus. '
                imgClient={`${image}/client-exemple-1.png`} 
                clientName='John Doe'
                clientDescriptionName='Entrepreneur chez Cuist’o'
                />
                </SlideUpFadeIn>
                <SlideUpFadeIn height='2600'>
                <ClientCard
                iconCount={5}
                imgSrc={`${image}/logo-2.svg`}
                title='Réfection d’un site avec Wordpress avec création de maquette'
                testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget ipsum in neque gravida dignissim. Pellentesque quam risus, facilisis nec dolor eget, semper ultrices velit. Integer luctus lobortis tortor ut pellentesque. Vivamus ultricies tortor mattis, vestibulum orci sit amet, vestibulum purus. Phasellus eget vulputate libero. Proin accumsan libero sed nisl placerat, non placerat nisi rhoncus. '
                imgClient={`${image}/client-exemple-2.png`}
                clientName='Marie Doe'
                clientDescriptionName='Créatrice de mode'
                />
                </SlideUpFadeIn>
            </div>
            <div className='about-section-btn'>
                <Button children='Voir tous mes avis'/>
            </div>
        </div>
    )
};

export default Client;