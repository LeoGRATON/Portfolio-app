import Menu from '../../Components/UI/Menu';
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import Infos from './Infos';

import { Helmet } from 'react-helmet'

import '../../styles/index.scss'

const AboutMe = () => {

    return (
        <main>
            <Helmet>
                <title>A propos de Léo | LéoCreative Studio</title>
                <meta name="description" content="Description de ma page" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
            </Helmet>
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