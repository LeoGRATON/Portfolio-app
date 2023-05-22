import { useLocation } from 'react-router-dom';
import './style.scss';

const Menu = () => {
    const location = useLocation();

    return (
        <div className='menu'>
            <ul className='menu-lists'>
                <li className={location.pathname === '/' ? 'menu-list-active' : ''}>
                    <a href='/'>Home</a>
                </li>
                <li className={location.pathname === '/works' ? 'menu-list-active' : ''}>
                    <a href='/works'>Works</a>
                </li>
                <li className={location.pathname === '/about-me' ? 'menu-list-active' : ''}>
                    <a href='/about-me'>About me</a>
                </li>
                <li className={location.pathname === '/blogs' ? 'menu-list-active' : ''}>
                    <a href='/blogs'>Blog</a>
                </li>
                <li className={location.pathname === '/contact' ? 'menu-list-active' : ''}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;