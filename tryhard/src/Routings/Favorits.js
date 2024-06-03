import './css/Favs.css';
import { useNavigate } from 'react-router-dom';


export default function Favs () {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('../pages/HiddenPage');
    };
  
    return(
        <>  
            <button id='HiddenButton' onClick={handleClick}></button>
        </>
    )
};