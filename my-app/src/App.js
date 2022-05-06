import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/Home' exact element={<Home/>} />
                    <Route path='/About' exact element={<About/>} />
                </Routes>
            </Router>
        </div>
    )
} 

export default App