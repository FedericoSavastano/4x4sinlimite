import React from 'react';
import logo from '../assets/logo-grande-D.png';

function Loading() {
    return (
        <div className='loader-container'>
            <img src={logo} className='loader-logo' alt='4x4 sin limite logo' />
            <span className='loader'></span>
        </div>
    );
}

export default Loading;
