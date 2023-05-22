import Menu from '../../Components/UI/Menu';
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import Infos from './Infos';

import '../../styles/index.scss'

const AboutMe = () => {

    return (
        <div>
            <Menu/>
            <Infos/>
            <Contact/>
            <Footer/>
        </div>
    )
};

export default AboutMe;