import Menu from '../../Components/UI/Menu';
import Hero from './Hero'
import SelectedWork from './SeletedWork';
import AboutMe from './AboutMe';
import Client from './Client';
import SliderLogo from './SliderLogo';
import Contact from '../../Components/UI/Contact';
import Footer from '../../Components/UI/Footer'

import '../../styles/index.scss'
import '../../styles/responsive.scss'

const Home = () => {

    return (
        <div>
            <Menu/>
            <Hero/>
            <SelectedWork/>
            <AboutMe/>
            <Client/>
            <SliderLogo/>
            <Contact/>
            <Footer/>
        </div>
    )
};

export default Home;