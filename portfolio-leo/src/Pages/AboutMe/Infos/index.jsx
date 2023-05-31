import Link from './Link'
import CardCV from './CardCV'

import Icon from 'react-eva-icons'
import imgleo from '../../../assets/ABOUTME/img-leo.png'
import quote from '../../../assets/quote.svg'
import './style.scss'
import SlideUpFadeIn from '../../../Components/Animation/SlidenUpFadeIn'
import AppearTextInBackground from '../../../Components/Animation/AppearTextInBackground'

const Infos = () => {

    const image = 'src/assets/ABOUTME/experience'

    return (
        <div> 
            <div className='infos-about taille-grille'>
                <div className='scrolling-image'>
                    <img src={imgleo} alt="" />
                </div>
            <div>
                <SlideUpFadeIn height='-100' className='infos-about-nom'>
                <AppearTextInBackground>
                <h1>Léo<br/>GRATON</h1>
                </AppearTextInBackground>
                <p>Ce qui me passionne le plus dans le webdesign et le développement web, c'est la possibilité de créer des solutions innovantes qui peuvent avoir un impact positif sur les gens. Que ce soit en concevant une plateforme conviviale pour une entreprise, en développant une application qui facilite la vie quotidienne des utilisateurs, ou en créant un site web inspirant qui partage des idées et des connaissances, je trouve une immense satisfaction à contribuer à la transformation digitale.</p>
                <div className='infos-about-link'>
                <Link link='https://github.com/LeoGRATON' nom='Github' pseudo='LeoGRATON'/>
                <Link link='#' nom='Instagram' pseudo='LeoGRATON'/>
                <Link link='https://www.linkedin.com/in/l%C3%A9o-graton-67940a193/' nom='Linkedin' pseudo='LeoGRATON'/>
                </div>
                </SlideUpFadeIn>
                <SlideUpFadeIn height='200' className='infos-about-infos section-padding'>
                <div>
                <div className='infos-about-infos-quote'>
                <img src={quote} alt="" />
                <h2>Je crois en une approche personnalisée pour chaque projet, ce qui garantit un site web unique et adapté à vos besoins spécifiques</h2>
                </div>
                <p className='infos-about-infos-p'>Depuis mon plus jeune âge, j'ai été fasciné par l'immense potentiel du monde numérique et de l'Internet. Cette fascination s'est rapidement transformée en une véritable passion pour le webdesign et le développement web.<br/><br/>Le webdesign est pour moi une forme d'art numérique, où chaque ligne de code et chaque élément visuel sont soigneusement pensés pour créer une expérience utilisateur exceptionnelle. J'aime explorer les dernières tendances en matière de design, expérimenter avec des couleurs, des typographies et des mises en page afin de concevoir des interfaces modernes et attrayantes.<br/><br/>Mais le webdesign ne se limite pas seulement à l'aspect visuel. Il s'agit également de trouver le juste équilibre entre esthétique et fonctionnalité. J'apprécie l'aspect challengeant de la conception de sites web interactifs, où je peux donner vie à des idées et créer des expériences engageantes pour les utilisateurs.<br/><br/>D'autre part, le développement web me permet de donner vie à mes créations en utilisant des langages de programmation tels que HTML, CSS et JavaScript. J'apprécie le processus de construction, de résolution de problèmes et de collaboration avec d'autres développeurs pour créer des sites web dynamiques et fonctionnels. Chaque ligne de code que j'écris me rapproche un peu plus de la concrétisation d'une idée et de la réalisation d'un projet complet.<br/><br/>Chaque jour, je m'efforce d'apprendre et de me perfectionner dans ce domaine en constante évolution. Je suis constamment à l'affût des nouvelles technologies, des frameworks et des tendances émergentes. Mon objectif est de repousser mes limites créatives et techniques, d'explorer de nouvelles approches et de créer des expériences uniques qui marqueront les esprits.</p>
                </div>
                </SlideUpFadeIn>
                <SlideUpFadeIn height='500'>
                <CardCV
                nom='Experience'
                titleName='FREELANCE - depuis 2022'
                description='Création de site web wordpress, Création graphique, dévelopement web React.js/ Node.js et Intégration de maquette (HTML,CSS,JS)'
                />
                <CardCV
                imglogo={`${image}/logo-nc.png`}
                titleName='ALTERNANCE - 2020 / 2022'
                description='Création de webdesign pour des projets de siteweb. Création de site web sur Wordpress et autres création graphique. Intégration de site HTML / CSS'
                />
                <CardCV
                imglogo={`${image}/logo-lpb.png`}
                titleName='ALTERNANCE - 2019-2020'
                className='card-cv-last'
                description='Alternance pour le bachelor Webdesign & Webmarketing. Développement d’un site vitrine sous Wordpress, Création d’affiches design pour les événements de l’entreprise.'
                />
                </SlideUpFadeIn>
                <SlideUpFadeIn height='1400'>
                <CardCV
                nom='Education'
                imglogo={`/src/assets/icon-education.png`}
                titleName='FORMATION DEVELOPPEUR FULLSTACK JS - 6 mois (800h)'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas.  Nam sed mi eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
                <CardCV
                imglogo={`/src/assets/icon-education.png`}
                titleName='EXPERT UX / UI DESIGN - CONSULTANT MANAGMENT DE PROJET'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas.  Nam sed mi eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                />
                <CardCV
                imglogo={`/src/assets/icon-education.png`}
                titleName='BACHELOR WEBDESIGN'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas.  Nam sed mi eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                className='card-cv-last'
                />
                </SlideUpFadeIn>
            </div>
            </div>
        </div>
    )
};

export default Infos;