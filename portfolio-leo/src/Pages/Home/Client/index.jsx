import Button from '../../../Components/UI/Button';
import ClientCard from './ClientCard';

import '../../../styles/index.scss'
import imagelogo1 from '../../../assets/HOME/client/logo-1.svg'

const Client = () => {

    const image = 'src/assets/HOME/client'

    return (
        <div className='client-section taille-grille section-padding'>
            <div className='client-section-cards'>
                <ClientCard
                imgSrc={`${image}/logo-1.svg`}
                title='Création d’un interface de gestion de cuisine ou restaurant'
                testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget ipsum in neque gravida dignissim. Pellentesque quam risus, facilisis nec dolor eget, semper ultrices velit. Integer luctus lobortis tortor ut pellentesque. Vivamus ultricies tortor mattis, vestibulum orci sit amet, vestibulum purus. Phasellus eget vulputate libero. Proin accumsan libero sed nisl placerat, non placerat nisi rhoncus. '
                imgClient={`${image}/client-exemple-1.png`}
                clientName='John Doe'
                clientDescriptionName='Entrepreneur chez Cuist’o'
                />
                <ClientCard
                imgSrc={`${image}/logo-2.svg`}
                title='Réfection d’un site avec Wordpress avec création de maquette'
                testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget ipsum in neque gravida dignissim. Pellentesque quam risus, facilisis nec dolor eget, semper ultrices velit. Integer luctus lobortis tortor ut pellentesque. Vivamus ultricies tortor mattis, vestibulum orci sit amet, vestibulum purus. Phasellus eget vulputate libero. Proin accumsan libero sed nisl placerat, non placerat nisi rhoncus. '
                imgClient={`${image}/client-exemple-2.png`}
                clientName='Marie Doe'
                clientDescriptionName='Créatrice de mode'
                />
            </div>
            <div className='about-section-btn'>
                <Button children='More testimonials'/>
            </div>
        </div>
    )
};

export default Client;