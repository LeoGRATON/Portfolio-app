import Menu from '../../Components/UI/Menu';
import Hero from './Hero'
import SelectedWork from './SeletedWork';
import AboutMe from './AboutMe';
import Client from './Client';
import SliderLogo from './SliderLogo';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer'

import '../../styles/index.scss'
import '../../styles/responsive.scss'

const Home = () => {

    return (
        <>
            <Menu/>
            <Hero/>
            <main>
                <SelectedWork/>
                <AboutMe/>
                <Client/>
                <SliderLogo/>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
};

export default Home;