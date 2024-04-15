import Logo from "./logo.png";
import { Link } from 'react-router-dom';
import './css/header.css'
export default function Header() {
    return (
        <header>
            <div className="LogoHeader">
                <Link to="/" ><img src={Logo} alt="Main-logo" className="Logo"/></Link>
            </div>
        </header>
    );
  }
  