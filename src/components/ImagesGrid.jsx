import React from 'react';

const ImagesGrid = ({ src1, src2 }) => {
    const images = [
        {
            src: src1,
            alt: 'imagen 1',
        },
        {
            src: src2,
            alt: 'imagen 2',
        },
    ];

    return (
        <div className='image-grid'>
            {images.map((img, index) => (
                <div className='image-item' key={index}>
                    <img
                        src={img.src}
                        alt={img.alt || `Logo ${index + 1}`}
                        className='img-x'
                    />
                </div>
            ))}
        </div>
    );
};

export default ImagesGrid;
