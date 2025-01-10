import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-grande-D.png';

const Navbar = ({ items }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        console.log('click mobile');
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        console.log('click');
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                {/* Logo */}
                <div>
                    <img
                        src={logo}
                        className='navbar-logo'
                        alt='4x4 sin limite logo'
                    />
                </div>

                {/* Mobile menu button */}
                <button className='navbar-toggle' onClick={toggleMobileMenu}>
                    <span className='navbar-icon'>☰</span>
                </button>

                {/* Links */}
                <div
                    className={`navbar-links ${
                        isMobileMenuOpen ? 'navbar-links-active' : ''
                    }`}>
                    <a href='#' className='navbar-link'>
                        <Link to={`/`}>Inicio</Link>
                    </a>
                    <a href='#' className='navbar-link'>
                        About
                    </a>

                    {/* Dropdown */}
                    <div className='navbar-dropdown'>
                        <button
                            onClick={toggleDropdown}
                            className='navbar-link navbar-dropdown-toggle'>
                            Salidas
                        </button>
                        {/* {isDropdownOpen && ( */}
                        <div className='navbar-dropdown-menu'>
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
                        {/* )} */}
                    </div>

                    <a href='#' className='navbar-link'>
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
