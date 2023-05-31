import '../styles/index.scss'
import { Helmet } from 'react-helmet';

import Menu from '../Components/UI/Menu';
import Footer from '../Components/Footer';
import Cursor from '../Components/UI/Cursor';

const Politique = () => {

  return (
    <>
        <Helmet>
                <title>Politique de confidentialité</title>
                <meta name="description" content="Description de ma page" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
            </Helmet>
        <Cursor/>
        <Menu/>
        <main>
            <div className='politique taille-grille'>
            <h1>Politique de confidentialité</h1>
            <p>Cette politique de confidentialité définit la manière dont notre site collecte, utilise, protège et divulgue les informations personnelles des utilisateurs. Nous nous engageons à respecter la vie privée de nos utilisateurs et à protéger les informations qu'ils nous fournissent. Veuillez lire attentivement cette politique avant d'utiliser notre site.</p>
            <h2>Collecte d'informations personnelles</h2>
            <p>Nous pouvons collecter des informations personnelles telles que votre nom, votre adresse e-mail et d'autres informations lorsque vous vous inscrivez sur notre site, remplissez un formulaire ou interagissez avec notre site d'une manière quelconque.</p>
            <h2>Utilisation des informations collectées</h2>
            <p>Les informations que nous collectons peuvent être utilisées de différentes manières, notamment pour :</p>
            <ul>
                <li>Personnaliser votre expérience sur notre site et fournir un contenu qui correspond à vos intérêts.</li>
                <li>Améliorer notre site et nos services en fonction des commentaires que vous nous fournissez.</li>
                <li>Envoyer des e-mails périodiques contenant des informations, des mises à jour et des nouvelles relatives à notre site et à nos services.</li>
            </ul>
            <h2>Protection des informations</h2>
            <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, toute altération, toute divulgation ou toute destruction.</p>
            <h2>Divulgation à des tiers</h2>
            <p>Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers sans votre consentement, sauf dans les cas suivants :</p>
            <ul>
                <li>Lorsque cela est nécessaire pour fournir un service que vous avez demandé.</li>
                <li>Lorsque cela est exigé par la loi ou pour se conformer à une procédure légale.</li>
            </ul>
            <h2>Cookies</h2>
            <p>Notre site peut utiliser des cookies pour améliorer l'expérience des utilisateurs. Les cookies sont de petits fichiers texte stockés sur le disque dur de l'utilisateur par le navigateur Web. Les cookies permettent de mémoriser les préférences de l'utilisateur et de fournir des fonctionnalités améliorées. Vous pouvez choisir de désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités de notre site.</p>
            <h2>Liens externes</h2>
            <p>Notre site peut contenir des liens vers des sites externes. Nous n'avons aucun contrôle sur le contenu ou les pratiques de confidentialité de ces sites et nous déclinons toute responsabilité à leur égard.</p>
            <h2>Consentement</h2>
            <p>En utilisant notre site, vous consentez à notre politique de confidentialité et acceptez ses conditions.</p>
            <h2>Mise à jour de la politique de confidentialité</h2>
            <p>Nous nous réservons le droit de mettre à jour ou de modifier notre politique de confidentialité à tout moment. Toute modification sera publiée sur cette page.</p>
            </div>
        </main>
        <Footer/>
    </>
  );
};

export default Politique;