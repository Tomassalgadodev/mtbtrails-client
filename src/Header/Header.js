import React from 'react';
import './Header.css';
import headerLogo from '../assets/header-logo.png';

const Header = () => {
    return (
        <header>
            <img src={headerLogo} />
            <div className='nav-button-container'>
                <a>Explore</a>
                <a>Community</a>
                <a>Saved</a>
                <a>Shop</a>
            </div>
            <button>Log in</button>
        </header>
    )
}

export default Header;