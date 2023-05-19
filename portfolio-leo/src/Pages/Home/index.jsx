import Menu from '../../Components/UI/Menu';
import Hero from './Hero'
import SelectedWork from './SeletedWork';
import AboutMe from './AboutMe';
import Client from './Client';

import '../../styles/index.scss'

const Home = () => {

    return (
        <div>
            <Menu/>
            <Hero/>
            <SelectedWork/>
            <AboutMe/>
            <Client/>
        </div>
    )
};

export default Home;