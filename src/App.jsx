import { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
} from 'react-router-dom';
import { fetchItems } from './api';
import logo from './assets/logo-grande-D.png';

import './App.css';

import Travesia from './components/Travesia';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contacto from './components/Contacto';

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadItems = async () => {
            try {
                const data = await fetchItems();
                console.log('la data de data ', data);
                setItems(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadItems();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <Router>
            <Navbar items={items} />
            <div
                className='content'
                style={{ minHeight: 'calc(100vh - 100px)' }}>
                <Routes>
                    <Route path='/' element={<Home items={items} />} />

                    {/* Dynamic Route for Item Details */}
                    <Route path='/:id' element={<Travesia items={items} />} />
                    <Route path='/contacto' element={<Contacto />}></Route>
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

const Home = ({ items }) => {
    console.log('items de home', items);
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
        </>
    );
};

export default App;
