import Menu from '../../Components/UI/Menu';
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import Infos from './Infos';
import Cursor from '../../Components/UI/Cursor';
import { ToastContainer } from 'react-toastify';

import { Helmet } from 'react-helmet'

import '../../styles/index.scss'


const AboutMe = () => {

    return (
        <main>
            <Helmet>
                <title>A propos de Léo | LéoCreative Studio</title>
                <meta name="description" content="Je suis passionné par le webdesign et le développement web. Avec une expérience solide dans la création de sites web et le design graphique, je suis déterminé à fournir des solutions web de qualité. Découvrez mon parcours, mes compétences et ma philosophie de travail. Contactez-moi pour discuter de votre projet et créer une présence en ligne qui vous démarquera." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <ToastContainer/>
            <Cursor/>
            <Menu/>
            <main>
                <Infos/>
                <Contact/>
            </main>
            <Footer/>
        </main>
    )
};

export default AboutMe;