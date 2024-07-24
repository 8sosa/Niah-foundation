import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';

import NavBar from './Navbar';
import Footer from './Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Events from '../Pages/Events';
import Team from '../Pages/Team';
import Volunteer from '../Pages/Volunteer';
import Publications from '../Pages/Publications';
import Workshops from '../Pages/Workshops';
import Community from '../Pages/Community';
import Contact from '../Pages/Contact';

export default function NiahRouter() {
    return (
        <Router>
            <div className="wrapper">
                <NavBar />
                    <div className="content">
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
                    </div>
                <Footer />
            </div>
        </Router>
    )
}