import React from 'react';

function VideosGrid() {
    const videos = [
        {
            src: 'https://youtu.be/kQkBb-1YemU?si=zZTxY8FlxtA5Rk0-',
        },
        {
            src: 'https://www.youtube.com/embed/H7zJHtQM4y0?si=2DgJucSD3_tu0DAz',
        },
        {
            src: 'https://www.youtube.com/embed/axunSOv3Gn4?si=AnBQmtARzDba1s7N',
        },
        {
            src: 'https://www.youtube.com/embed/TdDlZyXMBcY?si=iczdASSGeOe9Ao5t',
        },
        {
            src: 'https://www.youtube.com/embed/MN-DIzh9eug?si=AjDKFOX-VLVXk-Ku',
        },
    ];
    return (
        <div className='video-grid'>
            {videos.map((video) => (
                <iframe
                    key={video.src}
                    width='100%'
                    height='300'
                    src={video.src}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen></iframe>
            ))}
        </div>
    );
}

export default VideosGrid;
