import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';

import NavBar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Events from './Events';
import Team from './Team';
import Volunteer from './Volunteer';
import Publications from './Publications';
import Workshops from './Workshops';
import Community from './Community';
import Contact from './Contact';

export default function NiahRouter() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path = "/" element={<Home/>} exact/>
                <Route path = "/about-us" element={<About/>} exact/>
                <Route path = "/events" element={<Events/>} exact/>
                <Route path = "/the-team" element={<Team/>} exact/>
                <Route path = "/volunteer" element={<Volunteer/>} exact/>
                <Route path = "/publications" element={<Publications/>} exact/>
                <Route path = "/workshops" element={<Workshops/>} exact/>
                <Route path = "/community" element={<Community />} exact/>
                <Route path = "/contact-us" element={<Contact/>} exact/>
            </Routes>
            <Footer />
        </Router>
    )
}