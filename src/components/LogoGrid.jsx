import React from 'react';
import diefer from '../assets/logos/diefer.png';
import rm from '../assets/logos/rm.png';
import cafivel from '../assets/logos/cafi.png';
import shine from '../assets/logos/shine.png';
import ypf from '../assets/logos/ypf.jpg';
import weekend from '../assets/logos/weekend.webp';

const LogoGrid = () => {
    const logos = [
        {
            src: diefer,
            alt: 'Diefer',
            url: 'https://diefer.com.ar/',
        },
        {
            src: rm,
            alt: 'Resortes RM',
            url: 'https://www.resortesrm.com/',
        },
        {
            src: cafivel,
            alt: 'Cafivel',
            url: 'https://www.cafivel.com.ar/',
        },
        {
            src: ypf,
            alt: 'YPF',
            url: 'https://www.instagram.com/ypfraulealonso/',
        },
        {
            src: shine,
            alt: 'Shine Freak',
            url: 'https://www.instagram.com/shinefreak_detailing/',
        },
        {
            src: weekend,
            alt: 'Weekend',
            url: 'https://weekend.perfil.com/',
        },
    ];

    const imageSize = 120;

    return (
        <div className='logo-grid'>
            {logos.map((logo, index) => (
                <div className='logo-item' key={index}>
                    <a href={logo.url} target='_blank'>
                        <img
                            src={logo.src}
                            alt={logo.alt || `Logo ${index + 1}`}
                            style={{
                                width: `${imageSize}px`,
                                height: `${imageSize}px`,
                            }}
                            className='img-x'
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default LogoGrid;
