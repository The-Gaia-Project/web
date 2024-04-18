import './css/header.css';
import Logo from '../Logos/logo.png';
import { Link } from 'react-router-dom';
export default function Header ()  {
    return(
        <>
            <header>
                <div className='logobox' id='footbox'>
                    <Link to='/'>
                        <img src= {Logo} alt='' id='DownBad'/>
                    </Link>
                </div>
                <div className='DevLog'>
                    <div className='spacing'>
                        <Link to='devlog-hud' id='Link'>DevLog</Link>
                    </div>
                    <div className='spacing'>
                        <Link to='progress-update-hud' id='Link'>Progress Update</Link>
                    </div>
                    <div className='spacing'>
                        <Link to='projects-hud' id='Link'>Projects</Link>
                    </div>
                    <div className='spacing'>
                        <Link to='art-hud' id='Link'>Art</Link>
                    </div>
                    <div className='spacing'>
                        <Link to='about' id='Link'>About</Link>
                    </div>
                </div>
            </header>
        </>
    )
}