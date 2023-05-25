import '../../styles/index.scss'

import CardContent from '../../Pages/PageContent/CardContent'

const UIDesign = () => {

  return (
    <div className='page-content-text-cards taille-grille'>
                <CardContent
                iconName='loader-outline'
                h3Title='Expérience approfondie'
                h3Text={`Fort d'une expérience solide dans le domaine de l'UI Design, j'ai collaboré avec de nombreuses entreprises pour concevoir des interfaces convaincantes. J'ai travaillé sur des projets allant des applications mobiles aux sites web, en passant par les logiciels et les interfaces pour les objets connectés.`}
                />
                <CardContent
                iconName='person-outline'
                h3Title={`Compréhension de l'utilisateur`}
                h3Text={`Je place toujours les utilisateurs au centre de mon processus de conception. Je m'efforce de comprendre leurs besoins, leurs attentes et leurs comportements afin de créer des interfaces qui leur sont adaptées. J'utilise des techniques telles que les tests utilisateurs et les cartes d'empathie pour obtenir des informations précieuses et créer des expériences utilisateur optimales.`}
                />
                <CardContent
                iconName='bulb-outline'
                h3Title='Créativité et sensibilité esthétique'
                h3Text={`Je suis constamment à l'affût des dernières tendances en matière de design et je m'efforce de créer des interfaces visuellement attrayantes. Mon sens esthétique me permet de choisir des combinaisons de couleurs harmonieuses, des typographies adaptées et des éléments visuels percutants pour donner vie à vos interfaces.`}
                />
                <CardContent
                iconName='scissors-outline'
                h3Title='Maîtrise des outils et technologies'
                h3Text={`Je suis familier avec les principaux outils de conception tels que Sketch, Figma et Adobe XD, ce qui me permet de créer des maquettes et des prototypes interactifs de haute qualité. Je reste également à jour avec les avancées technologiques et les meilleures pratiques de l'industrie pour garantir des résultats optimaux.`}
                />
    </div>
  );
};

export default UIDesign;