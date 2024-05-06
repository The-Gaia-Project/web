import './css/footer.css';
import Logo from '../Logos/logo.png';
import TwitterLogo from '../Logos/x.svg';
import GithubLogo from '../Logos/github.svg';
import { Link } from 'react-router-dom';
export default function Footer ()  {
    return(
        <>
            <footer>
                <div className='logobox' id='footbox'>
                    <Link to='/'>
                        <img src= {Logo} alt='logo' id='FootDownBad'/>
                    </Link>
                </div>
                    <div className='footbox_sosals'>
                        <div className='sosals_image'>
                        <a href="https://twitter.com/Archneia_" target="_blank" rel="noopener noreferrer"><img src={TwitterLogo} alt='x' id='sosalmedia'/></a>
                        </div>
                        <div className='sosals_image'>
                        <a href="https://github.com/arachneia" target="_blank" rel="noopener noreferrer"><img src={GithubLogo} alt='github' id='sosalmedia'/></a>
                        </div>
                    </div>
                <div className='contacts' id='footbox'>
                    <h2>contacts</h2>
                    <p>Gaia@arachneia.com</p>
                </div>
            </footer>
        </>
    )
}