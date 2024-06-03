import './css/header.css';
import Logo from '../Logos/logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Favs from './Favorits';

export default function Header () {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <header>
                <div className='logobox' id='footbox'>
                    <Link to='/'>
                        <img src={Logo} alt='' id='DownBad' />
                    </Link>
                </div>
                <div className='DevLog'>
                    <div className='spacing'>
                        <Link to='../pages/devlog' id='Link'>DevLog</Link>
                    </div>
                    <div className='spacing'>
                        <Link to='../pages/progress-update' id='Link'>Progress Update</Link>
                    </div>
                    <div className='spacing'>
                        <Link to='../pages/projectshub' id='Link'>Projects</Link>
                    </div>
                    <div className='spacing'>
                        <Link to='../pages/ArtHub' id='Link'>Art</Link>
                    </div>
                    <div className='spacing'>
                        <Link to='../pages/about' id='Link'>About</Link>
                    </div>
                </div>
                {/* <button onClick={toggleTheme} className='theme-toggle-button'>
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button> */}
            </header>
            <Favs/>
        </>
    );
}
