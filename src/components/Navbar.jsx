import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-grande-D.png';

function Navbar({ items }) {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleClickLink = () => {
        setDropdownOpen(!isDropdownOpen);
        showNavbar && setShowNavbar(false);
    };

    return (
        <nav className='navbar'>
            <div className='container'>
                <div>
                    <Link className='navbar-item' to='/'>
                        <Logo />
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <Link className='navbar-item' to='/'>
                                Inicio
                            </Link>
                        </li>
                        <li className='mobile-element'>
                            <div className='navbar-dropdown'>
                                <div
                                    className='navbar-link navbar-dropdown-toggle navbar-item'
                                    onClick={toggleDropdown}>
                                    Salidas
                                </div>
                                {isDropdownOpen && (
                                    <div className='navbar-dropdown-menu'>
                                        {items.map((item) => (
                                            <a key={item.url}>
                                                <Link
                                                    className='navbar-dropdown-item'
                                                    onClick={handleClickLink}
                                                    to={`/${item.url}`}>
                                                    {item.data[0].nombre}
                                                </Link>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </li>

                        <li className='desktop-element'>
                            <div className='navbar-dropdown'>
                                <div className='navbar-link navbar-dropdown-toggle btn-hov navbar-item'>
                                    Salidas
                                </div>

                                <div className='navbar-dropdown-menu-desktop'>
                                    {items.map((item) => (
                                        <a key={item.url}>
                                            <Link
                                                className='navbar-dropdown-item'
                                                to={`/${item.url}`}>
                                                {item.data[0].nombre}
                                            </Link>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link className='navbar-item' to='/projects'>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

const Hamburger = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='52'
        height='24'
        viewBox='0 0 52 24'>
        <g id='Group_9' data-name='Group 9' transform='translate(-294 -47)'>
            <rect
                id='Rectangle_3'
                data-name='Rectangle 3'
                width='42'
                height='4'
                rx='2'
                transform='translate(304 47)'
                fill='#574c4c'
            />
            <rect
                id='Rectangle_5'
                data-name='Rectangle 5'
                width='42'
                height='4'
                rx='2'
                transform='translate(304 67)'
                fill='#574c4c'
            />
            <rect
                id='Rectangle_4'
                data-name='Rectangle 4'
                width='52'
                height='4'
                rx='2'
                transform='translate(294 57)'
                fill='#574c4c'
            />
        </g>
    </svg>
);

const Logo = () => (
    <img src={logo} className='navbar-logo' alt='4x4 sin limite logo' />
);
