import './css/header.css';
import Logo from '../Logos/logo.png';
import { Link } from 'react-router-dom';
export default function Header ()  {
    return(
        <>
        {/* <div className='workinporgress'>
            <h2>// Work in progress</h2>
            <h2>// Work in progress</h2>
            <h2>// Work in progress</h2>
            <h2>// Work in progress</h2>
            <h2>// Work in progress</h2>
            <h2>// Work in progress</h2>
            <h2>// Work in progress</h2>
        </div> */}
            <header>
                <div className='logobox' id='footbox'>
                    <Link to='/'>
                        <img src= {Logo} alt='' id='DownBad'/>
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
            </header>
        </>
    )
}