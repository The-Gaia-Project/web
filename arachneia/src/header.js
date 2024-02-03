import Logo from "./logo.png";
import Profile from './Gaia.png';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header>
            <div className="LogoHeader">
                <Link to="/" ><img src={Logo} alt="logo" className="Logo"/></Link>
            </div>
            <div className="header-text">
                <h1>Arachneia</h1>
            </div>
            <div className="ProfileHeader">
                <img src={Profile} alt="Profile" className="Profile"/>
            </div>
        </header>
    );
  }
  