import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import Icon from 'react-eva-icons';
import './style.scss';

const Menu = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false)

    const handleMenuBurger = () => {
        setIsOpen(!isOpen)
      }

    return (
        <div>
          {isOpen && (
                <div className='menu-overlay'>
                    <ul className='overlay-menu-lists'>
                        <li className='overlay-menu-lists-close' onClick={handleMenuBurger}>
                            <Icon
                            name="close"
                            size="medium"
                            fill="#fff"
                            />
                        </li>
                        <li className={location.pathname === '/' ? 'overlay-menu-list-active' : 'overlay-menu-list'}>
                            <a href='/'>Home</a>
                        </li>
                        <li className={location.pathname === '/works' ? 'overlay-menu-list-active' : 'overlay-menu-list'}>
                            <a href='/works'>Works</a>
                        </li>
                        <li className={location.pathname === '/about-me' ? 'overlay-menu-list-active' : 'overlay-menu-list'}>
                            <a href='/about-me'>About me</a>
                        </li>
                        <li className={location.pathname === '/blogs' ? 'overlay-menu-list-active' : 'overlay-menu-list'}>
                            <a href='/blogs'>Blog</a>
                        </li>
                        <li className={location.pathname === '/contact' ? 'overlay-menu-list-active' : 'overlay-menu-list'}>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            )}  
        <div className='menu'>
            <ul className='menu-lists'>
                <li className='menu-burger' onClick={handleMenuBurger}>
                    <Icon
                        name="menu-outline"
                        size="medium"
                        fill="#fff"
                    />
                </li>
                <li className={location.pathname === '/' ? 'menu-list-active' : 'menu-list'}>
                    <a href='/'>Home</a>
                </li>
                <li className={location.pathname === '/works' ? 'menu-list-active' : 'menu-list'}>
                    <a href='/works'>Works</a>
                </li>
                <li className={location.pathname === '/about-me' ? 'menu-list-active' : 'menu-list'}>
                    <a href='/about-me'>About me</a>
                </li>
                <li className={location.pathname === '/blogs' ? 'menu-list-active' : 'menu-list'}>
                    <a href='/blogs'>Blog</a>
                </li>
                <li className={location.pathname === '/contact' ? 'menu-list-active' : 'menu-list'}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Menu;