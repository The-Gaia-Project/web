import Footer from "../Routings/footer";
import Header from "../Routings/header";
import './css/Favs.css';
export default function HiddenPage () {
    return (
        <>
            <Header/>
            <div id="HolderBox">
                <div id="Favs">
                    <h2>Tools</h2>
                    <ul>
                        <li><a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">chatGPT</a></li>
                    </ul>
                </div>
                <div id="Favs">
                    <h2>Fun</h2>
                    <ul>
                        <li><a href="https://manganato.com/" target="_blank" rel="noopener noreferrer">manganato</a></li>
                        <li><a href="https://9animetv.to/recently-updated" target="_blank" rel="noopener noreferrer">9animetv</a></li>
                    </ul>
                </div>
                <div id="Favs">
                    <h2>Misc</h2>
                    <ul>
                        {/* <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li> */}
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}