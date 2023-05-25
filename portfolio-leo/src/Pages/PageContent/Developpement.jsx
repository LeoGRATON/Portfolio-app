import '../../styles/index.scss'

import CardContent from '../../Pages/PageContent/CardContent'

const Developpement = () => {

  return (
    <div className='page-content-text-cards taille-grille'>
                <CardContent
                iconName='code-outline'
                h3Title='React.js'
                h3Text={`Avec une expertise approfondie dans React.js, je peux créer des interfaces utilisateur interactives et réactives pour vos applications web. Que ce soit pour une application simple ou une application web complexe, React.js me permet de construire des composants réutilisables et de gérer efficacement l'état de l'application.`}
                />
                <CardContent
                iconName='code-outline'
                h3Title={`Next.js`}
                h3Text={`En tant que framework basé sur React.js, Next.js offre des fonctionnalités avancées pour le développement web, telles que le rendu côté serveur (SSR) et la génération de pages statiques. Je peux exploiter la puissance de Next.js pour créer des sites web rapides, optimisés pour le référencement et offrant une excellente expérience utilisateur.`}
                />
                <CardContent
                iconName='code-outline'
                h3Title='Node.js'
                h3Text={`En utilisant Node.js, je peux développer des applications web côté serveur évolutives et performantes. Que ce soit pour la création d'APIs, la gestion de bases de données ou le déploiement d'applications en temps réel, Node.js est une technologie polyvalente qui me permet de répondre à vos besoins en matière de développement back-end.`}
                />
                <CardContent
                iconName='code-outline'
                h3Title='HTML, CSS et JavaScript'
                h3Text={`En tant que langages de base du développement web, maîtriser HTML, CSS et JavaScript est essentiel pour créer des sites web fonctionnels et esthétiques. Je peux transformer vos idées en réalité en utilisant ces langages pour structurer vos pages, styliser vos éléments et ajouter des fonctionnalités interactives.`}
                />
    </div>
  );
};

export default Developpement;