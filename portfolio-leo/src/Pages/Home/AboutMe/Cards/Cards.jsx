import Card from './Card';
import SlideUpFadeIn from '../../../../Components/Animation/SlidenUpFadeIn';

import '../../../../styles/index.scss'

const Cards = () => {

    return (
        <div className='cards'>
            <SlideUpFadeIn height='1450' className='card-width'>
            <Card 
            number='01.'
            title='UI Design'
            description={`En tant que professionnel de l'UI Design, je suis passionné par la création d'expériences visuelles attrayantes et intuitives pour les utilisateurs.`}
            url='/ui-design'
            />
            </SlideUpFadeIn>
            <SlideUpFadeIn height='1450' className='card-width'>
            <Card 
            number='02.'
            title='Developement'
            description={`En tant que développeur web, je suis spécialisé dans la création de sites web et d'applications en utilisant des technologies de pointe telles que React.js, Next.js et Node.js. `}
            url='/developpement'
            />
            </SlideUpFadeIn>
            <SlideUpFadeIn height='1450' className='card-width'>
            <Card 
            number='03.'
            title='UX Design'
            description={`En tant qu'expert en UX Design, je suis passionné par la création d'expériences utilisateur exceptionnelles et intuitives. Mon expertise dans ce domaine me permet de fournir des services de conception.`}
            url='/ux-design'
            />
            </SlideUpFadeIn>
        </div>
    )
};

export default Cards;