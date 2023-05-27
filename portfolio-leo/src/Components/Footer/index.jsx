import Icon from 'react-eva-icons';
import './style.scss'

const Footer = () => {

    return (
        <footer className='footer'>
            <p>Made by <span>Léo GRATON</span> 2023</p>
            <a href="#" className='footer-link'>Plan du site</a>
            <a href="https://github.com/LeoGRATON" target="_blanck" className='footer-social'>
            <Icon 
                name="github-outline"
                size="medium"     // small, medium, large, xlarge
                fill="#000"
                animation={{
                    type: "zoom",  // zoom, pulse, shake, flip
                    hover: true,
                    infinite: false 
                  }}
            />
            </a>
            <a href="https://www.linkedin.com/in/l%C3%A9o-graton-67940a193/" target="_blanck" className='footer-social'>
            <Icon 
                name="linkedin-outline"
                size="medium"     // small, medium, large, xlarge
                fill="#000"
                animation={{
                    type: "zoom",  // zoom, pulse, shake, flip
                    hover: true,
                    infinite: false 
                  }}
            />
            </a>
            <a href="https://www.linkedin.com/in/l%C3%A9o-graton-67940a193/" target="_blanck" className='footer-social'>
            <Icon 
                name="linkedin-outline"
                size="medium"     // small, medium, large, xlarge
                fill="#000"
                animation={{
                    type: "zoom",  // zoom, pulse, shake, flip
                    hover: true,
                    infinite: false 
                  }}
            />
            </a>
        </footer>
    )
};

export default Footer;