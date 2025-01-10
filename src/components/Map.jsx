import React from 'react';

function Map({ value }) {
    let srcValue;

    // Determine the srcValue based on the value prop
    switch (value) {
        case 'la-rioja':
            srcValue =
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27936.585537823794!2d-67.54257827128319!3d-28.925877182338937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969d825df9fefc37%3A0xfc089f4bcb85c5c!2sFamatina%2C%20La%20Rioja%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1736353986360!5m2!1ses-419!2sus';
            break;
        case 'necochea':
            srcValue =
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.690394732007!2d-58.72181611575102!3d-38.563946499078185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958f97f25ad22837%3A0x880a441fe22ec76b!2zQ2FtcGluZyB5IENhYmHDsWFzICJSaW8gUXVlcXXDqW4i!5e0!3m2!1ses-419!2sar!4v1736354865033!5m2!1ses-419!2sar';
            break;
        case 'pinamar':
            srcValue =
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.838227150518!2d-56.88094332429756!3d-37.1089681721607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9d273d0d8e4b%3A0xd9f0bfa98bd456da!2sShell!5e0!3m2!1ses-419!2sus!4v1736376981757!5m2!1ses-419!2sus';
            break;
        case 'villa-pehuenia-primera':
            srcValue =
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.4525365121635!2d-71.18808602567672!3d-38.88835474859986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9612e2838afc47b5%3A0x68760b10fa9cd350!2sAmarras%20Hosteria%20%26%20Caba%C3%B1as!5e0!3m2!1ses-419!2sus!4v1736377109273!5m2!1ses-419!2sus';
            break;
        case 'villa-pehuenia-segunda':
            srcValue =
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.4525365121635!2d-71.18808602567672!3d-38.88835474859986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9612e2838afc47b5%3A0x68760b10fa9cd350!2sAmarras%20Hosteria%20%26%20Caba%C3%B1as!5e0!3m2!1ses-419!2sus!4v1736377109273!5m2!1ses-419!2sus';
            break;
        default:
            srcValue = 'Default Derived Value';
            break;
    }

    return (
        <div>
            <iframe
                src={srcValue}
                style={{ border: '0', width: '76vw', height: '30vh' }}
                loading='lazy'></iframe>
        </div>
    );
}

export default Map;
