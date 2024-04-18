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
                        <img src= {Logo} alt='' id='DownBad'/>
                    </Link>
                </div>
                    <div className='footbox_sosals'>
                        <div className='sosals_image'>
                            <img src={TwitterLogo} alt='x' id='sosalmedia'/>
                        </div>
                        <div className='sosals_image'>
                            <img src={GithubLogo} alt='github' id='sosalmedia'/>
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