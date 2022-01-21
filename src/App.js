import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <p>test test and just test</p>
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
