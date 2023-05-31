import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Works from './Pages/Works';
import Blogs from './Pages/Blogs';
import NotFound from './Pages/NotFound';
import Work from './Pages/Work';
import PageContent from './Pages/PageContent';
import UIDesign from './Pages/PageContent/UIDesign';
import UXDesign from './Pages/PageContent/UXDesign';
import Developpement from './Pages/PageContent/Developpement';
import Article from './Pages/Article'
import Politique from './Pages/Politique';

import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about-me',
    element: <AboutMe />,
  },
  {
    path: '/works',
    element: <Works />,
  },
  {
    path: '/works/:titre',
    element: <Work />,
  },
  {
    path: '/blogs/:titre',
    element: <Article />,
  },
  {
    path: '/blogs/tendan',
    element: <Article />,
  },
  {
    path: '/blogs',
    element: <Blogs />,
  },
  {
    path: '/ui-design',
    element: <PageContent 
    titre='UI Design'
    imgName='ui-design.png'
    h2='Expert en UI Design : Créez des interfaces utilisateur exceptionnelles pour votre entreprise'
    h2Text={`En tant que professionnel de l'UI Design, je suis passionné par la création d'expériences visuelles attrayantes et intuitives pour les utilisateurs. Mon expertise dans ce domaine me permet de fournir des services de conception d'interfaces utilisateur exceptionnelles pour diverses plateformes et industries.'\n'L'UI Design est essentiel pour garantir une expérience utilisateur agréable et fluide. En travaillant sur votre projet, je m'engage à créer des interfaces esthétiques et fonctionnelles qui répondent aux besoins spécifiques de votreise. Voici plusieurs raisons pour lesquelles je suis qualifié pour effectuer ces compétences :`}
    ConclusionText={`En choisissant mes services en UI Design, vous bénéficierez d'un professionnel passionné, créatif et compétent, prêt à donner vie à vos idées et à fournir des interfaces utilisateur exceptionnelles. N'hésitez pas à me contacter pour discuter de votre projet et commencer notre collaboration fructueuse.`}
    content={<UIDesign/>}
    metaDescription={`En tant que passionné d'UI Design, je partage des connaissances approfondies sur les principes et les meilleures pratiques de conception d'interfaces utilisateur. Découvrez des articles informatifs, des conseils et des ressources pour créer des interfaces visuellement attrayantes, intuitives et axées sur l'expérience utilisateur. Explorez les dernières tendances du design, les techniques de prototypage et bien plus encore pour améliorer vos compétences en UI Design.`}
    />,
  },
  {
    path: '/ux-design',
    element: <PageContent 
    titre='UX Design'
    imgName='ux-design.png'
    h2='Expert en UX Design : Créez des expériences utilisateur exceptionnelles pour le succès de votre produit/service'
    h2Text={`En tant qu'expert en UX Design, je suis passionné par la création d'expériences utilisateur exceptionnelles et intuitives. Mon expertise dans ce domaine me permet de fournir des services de conception d'expérience utilisateur centrée sur l'utilisateur pour diverses plateformes et industries.
    L'UX Design joue un rôle crucial dans la réussite d'un produit ou d'un service. En travaillant sur votre projet, je m'engage à créer des expériences utilisateur engageantes qui répondent aux besoins et aux attentes de votre public cible. Voici plusieurs raisons pour lesquelles je suis qualifié pour effectuer ces compétences :`}
    ConclusionText={`En choisissant mes services en UX Design, vous bénéficierez d'un professionnel passionné, créatif et compétent, prêt à concevoir des expériences utilisateur exceptionnelles pour votre produit ou service. N'hésitez pas à me contacter pour discuter de votre projet et commencer notre collaboration fructueuse.`}
    content={<UXDesign/>}
    metaDescription={`"En tant que passionné d'UX Design, je partage des connaissances approfondies sur les principes et les meilleures pratiques de conception centrée sur l'utilisateur. Découvrez des articles informatifs, des conseils et des ressources pour créer des expériences utilisateur exceptionnelles. Explorez les étapes du processus UX, les techniques de recherche utilisateur, les méthodes de prototypage et bien plus encore pour améliorer vos compétences en UX Design.`}
    />,
  },
  {
    path: '/developpement',
    element: <PageContent 
    titre='Developpement web'
    imgName='dev-web.png'
    h2='Expert en Développement Web : Créez des sites et des applications performants avec React.js, Next.js, Node.js et plus !'
    h2Text={`En tant que développeur web expérimenté, je suis spécialisé dans la création de sites web et d'applications en utilisant des technologies de pointe telles que React.js, Next.js et Node.js. Ma passion pour le développement web combinée à ma maîtrise des langages HTML, CSS et JavaScript me permet de créer des expériences utilisateur modernes et performantes. Voici un aperçu de mes compétences et de mes spécialités :`}
    ConclusionText={`Avec ces compétences et spécialités, je suis en mesure de fournir des solutions complètes en développement web, de la conception initiale à la mise en œuvre finale. Je suis passionné par l'optimisation des performances, la création d'interfaces utilisateur intuitifs et l'adoption des meilleures pratiques de développement.
    Que vous ayez besoin d'un site web d'entreprise, d'une application web ou d'une plateforme e-commerce, je suis prêt à collaborer avec vous pour réaliser votre vision. Contactez-moi dès aujourd'hui pour discuter de votre projet et commencer à créer une présence en ligne exceptionnelle.`}
    content={<Developpement/>}
    metaDescription={`En tant que développeur passionné, je partage des connaissances approfondies sur le développement web. Découvrez des articles informatifs, des tutoriels et des ressources pour améliorer vos compétences en développement. Explorez les langages de programmation, les frameworks et les outils populaires tels que React, JavaScript, CSS, et bien plus encore. Apprenez les meilleures pratiques de codage, les techniques de débogage et les méthodologies de développement pour créer des sites web performants et innovants.`}
    />,
  },
  {
    path: '/politique-confidentialite',
    element: <Politique />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

root.render(
  
  /*   <React.StrictMode> */
    <RouterProvider router={router}>
    </RouterProvider>
  /*   </React.StrictMode> */
);
