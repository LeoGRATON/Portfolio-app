import '../../styles/index.scss'

import CardContent from '../../Pages/PageContent/CardContent'

const UXDesign = () => {

  return (
    <div className='page-content-text-cards taille-grille'>
                <CardContent
                iconName='loader-outline'
                h3Title='Expérience approfondie'
                h3Text={`Fort d'une expérience solide dans le domaine de l'UX Design, j'ai travaillé avec de nombreuses entreprises pour concevoir des expériences utilisateur optimales. J'ai collaboré sur des projets allant des applications mobiles aux sites web, en passant par les produits logiciels et les interfaces pour les objets connectés.`}
                />
                <CardContent
                iconName='search-outline'
                h3Title={`Recherche utilisateur approfondie`}
                h3Text={`Je crois en une approche basée sur des données concrètes et des recherches approfondies. Avant de commencer la conception, j'effectue des études d'utilisabilité, des entretiens utilisateurs et des analyses de l'expérience existante. Cela me permet de comprendre les besoins, les motivations et les défis de vos utilisateurs, ce qui me guide dans la création d'une expérience utilisateur optimale.`}
                />
                <CardContent
                iconName='cube-outline'
                h3Title={`Architecture de l'information et wireframing`}
                h3Text={`Je suis compétent dans la création d'architectures de l'information claires et intuitives pour vos produits. Je développe des wireframes détaillés qui définissent la structure et la navigation du produit, garantissant une expérience utilisateur fluide et cohérente.`}
                />
                <CardContent
                iconName='smartphone-outline'
                h3Title='Prototypage interactif'
                h3Text={`Je crée des prototypes interactifs qui vous permettent de visualiser et de tester votre produit avant son développement complet. Cela nous permet d'itérer rapidement et d'apporter des améliorations basées sur les retours d'utilisateurs, optimisant ainsi l'expérience utilisateur finale.`}
                />
    </div>
  );
};

export default UXDesign;