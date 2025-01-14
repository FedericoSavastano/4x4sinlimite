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
import Home from './components/Home';

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

export default App;
