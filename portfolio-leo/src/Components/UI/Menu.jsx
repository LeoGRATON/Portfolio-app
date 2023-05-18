import { Link } from 'react-router-dom'

import './style.scss'

const Menu = () => {

    return (
        <div className='menu'>
            <ul className='menu-lists'>
                <Link to='/'><li className='menu-list-active'>Home</li></Link>
                <Link to='/works'><li>Works</li></Link>
                <Link to='/about-me'><li>About me</li></Link>
                <Link to='/blogs'><li>Blog</li></Link>
                <Link to='#'><li>Contact</li></Link>
                <li>
                    <select name="langue" id="langue" className='menu-list-select'>
                        <option value="english">EN</option>
                        <option value="french">FR</option>
                    </select>
                </li>
            </ul>
        </div>
    )
};

export default Menu;