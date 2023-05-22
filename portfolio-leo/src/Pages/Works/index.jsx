import Menu from '../../Components/UI/Menu';
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import PageTitle from '../../Components/PageTitle';

import '../../styles/index.scss'

const Works = () => {

    return (
        <div>
            <Menu/>
            <PageTitle 
            title='Works'
            descriptionPage='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas. Nam sed mi eleifend. (Poppins)'
            />
            <Contact/>
            <Footer/>
        </div>
    )
};

export default Works;