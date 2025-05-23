import { useEffect, useLayoutEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from 'react-router-dom';
import { fetchItems } from './api';

import './App.css';

import Travesia from './components/Travesia';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import Home from './components/Home';
import Loading from './components/Loading';
import NotFound from './components/NotFound';

const Wrapper = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
        // Scroll to the top of the page when the route changes
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);

    return children;
};

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadItems = async () => {
            try {
                const data = await fetchItems();
                // console.log('la data de data ', data);
                setItems(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadItems();
    }, []);

    if (loading) return <Loading></Loading>;

    return (
        <Router>
            <Navbar items={items} />
            <div
                className='content'
                style={{ minHeight: 'calc(100vh - 100px)' }}>
                <Wrapper>
                    <Routes>
                        <Route path='/' element={<Home items={items} />} />

                        <Route path='/spin' element={<Loading />} />

                        {/* Dynamic Route for Item Details */}
                        <Route
                            path='/:id'
                            element={<Travesia items={items} />}
                        />
                        <Route path='/contacto' element={<Contacto />}></Route>

                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Wrapper>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
