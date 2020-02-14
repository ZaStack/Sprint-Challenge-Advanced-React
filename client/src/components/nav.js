import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode.js';
import './nav.css'

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode('Dark Mode', false);

    const toggleBtn = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    }

    const lightMoon = (
        <span role='img' aria-label="light mode moon emoji">
            {'\u{1F642}'}
        </span>
    );
    
    const darkMoon = (
        <span role='img' aria-label='dark mode moon emoji'>
            {'\u{1F311}'}	
        </span>
    );
    
    return(
        <div className="navbar">
            <h1 className="nav-title">Soccer Players</h1>
            <button onClick={toggleBtn}>{darkMode ? lightMoon : darkMoon}</button>
        </div>
    );
};

export default Nav;

