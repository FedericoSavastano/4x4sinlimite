import React from 'react';
import logo from '../assets/logo-grande-D.png';
import { Link } from 'react-router-dom';
import Form from './Form';
import fondo from '../assets/fond1.jpg';

function Home({ items }) {
    console.log('items en home ', items);
    return (
        <>
            <p></p>
            <div className='container-banner'>
                <img className='home-img-banner' src={fondo} alt='Snow' />
                <img
                    src={logo}
                    className=' logo-home'
                    alt='4x4 sin limite logo'
                />

                {/* <h1 className='centered-date'>4x4 Sin Límite</h1> */}
            </div>

            <p className='subtitulo-home'>
                Recorriendo todo el país desde hace más de 20 años. <br></br>
                Viví una travesía 4x4 con amigos o en familia, ¡sumate!
            </p>

            <div>
                <h1 className='titulo-home'>Próximas Salidas</h1>
                <div className='salidas-container'>
                    {items.map((item, index) => (
                        <div key={item.data[0].url} className='salidas-item'>
                            <Link to={`/${item.data[0].url}`}>
                                <img
                                    src={item.data[0].imagen_home}
                                    alt={
                                        item.data[0].url || `Logo ${index + 1}`
                                    }
                                    className='img-x'
                                />
                                <h3 className='salidas-titulo'>
                                    {item.data[0].nombre}{' '}
                                </h3>
                                <span className='salidas-subtitulo'>
                                    {item.data[0].subnombre}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <span>
                <h5 className='contact-send-message'>Envianos un mensaje</h5>
                <Form nametravesia='inicio'></Form>
            </span>
        </>
    );
}

export default Home;
