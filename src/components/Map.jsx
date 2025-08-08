import React from 'react';

function Map({ value }) {
    let srcValue;

    // Determine the srcValue based on the value prop
    switch (value) {
        case 'la-rioja':
            srcValue =
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6968.005278847806!2d-67.49221612464395!3d-29.164594475378383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969d64655de22455%3A0x850ec9704eea6c51!2sACA%20(Autom%C3%B3vil%20Club%20Argentino)%20Chilecito!5e0!3m2!1ses-419!2sus!4v1737385750088!5m2!1ses-419!2sus';
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
        case 'villa-pehuenia-agosto':
            srcValue =
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.4525365121635!2d-71.18808602567672!3d-38.88835474859986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9612e2838afc47b5%3A0x68760b10fa9cd350!2sAmarras%20Hosteria%20%26%20Caba%C3%B1as!5e0!3m2!1ses-419!2sus!4v1736377109273!5m2!1ses-419!2sus';
            break;
        case 'mendoza':
            srcValue =
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6584508193687!2d-68.34192492441433!3d-34.61279727295097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679080602c66143%3A0xfb0fbbe46f032e64!2sTower%20Inn%20%26%20Suites!5e0!3m2!1sen!2sar!4v1748014192970!5m2!1sen!2sar';
            break;

        case 'saltacatamarca':
            srcValue =
                'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d924763.485897091!2d-66.1647239!3d-25.1236062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941c1e69dd665d57%3A0xac649dc931c1a299!2sYPF%20ACA%20Cachi!5e0!3m2!1sen!2sar!4v1749153962598!5m2!1sen!2sar';
            break;
        case 'pinamar-septiembre':
            srcValue =
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.838227150518!2d-56.88094332429756!3d-37.1089681721607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9d273d0d8e4b%3A0xd9f0bfa98bd456da!2sShell!5e0!3m2!1ses-419!2sus!4v1736376981757!5m2!1ses-419!2sus';
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
