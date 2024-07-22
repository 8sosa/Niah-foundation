import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';

import NavBar from './Navbar';
import Footer from './Footer';
import Home from './Home';

export default function NiahRouter() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path = "/" element={<Home/>} exact/>
            </Routes>
            <Footer />
        </Router>
    )
}