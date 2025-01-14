import React from 'react';
import logo from '../assets/logo-grande-D.png';
import { Link } from 'react-router-dom';
import Form from './Form';

function Home({ items }) {
    return (
        <>
            <h1>4x4 Sin Limite</h1>
            <img src={logo} className='logo' alt='4x4 sin limite logo' />
            <h4>sitio en renovación</h4>
            <div>
                <h1>Salidas</h1>
                <ul>
                    {items.map((item) => (
                        <li key={item.url}>
                            <Link to={`/${item.url}`}>{item.url}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <span>
                <h5 className='contact-send-message'>Envianos un mensaje</h5>
                <Form nametravesia='inicio'></Form>
            </span>
        </>
    );
}

export default Home;
