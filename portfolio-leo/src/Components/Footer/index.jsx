import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Icon from 'react-eva-icons';
import './style.scss'

const Footer = () => {

    return (
        <footer className='footer'>
            <p>Made by <span>Léo GRATON</span> 2023</p>
            <a href="politique-confidentialite" className='footer-link'>Politique de confidentialité</a>
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
            <a href="https://www.instagram.com/leogratonwebdesigner/" target="_blanck" className='footer-social'>
            <FaInstagram style={{ color: 'black' }} />
            </a>
            <a href="https://www.linkedin.com/in/l%C3%A9o-graton-67940a193/" target="_blanck" className='footer-social'>
            <FaLinkedin style={{ color: 'black' }} />
            </a>
        </footer>
    )
};

export default Footer;