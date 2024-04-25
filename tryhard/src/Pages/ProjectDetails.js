import { useLocation } from 'react-router-dom';

import './css/project.css'
import Header from '../Routings/header';
import Footer from '../Routings/footer';
export default function ProjectDetails() {
    

    const location = useLocation();
    console.log("Received state:", location.state);  // Check the received state

    const content = location.state?.details?.content;

    if (!content) {
        return <div>No details available</div>;
    }
    
    return (
    <>
        <Header />
        <div>
            <h1 id='ProjectDetailsH1'>Project Details</h1>
            {content.map((item, index) => (
                item.type === 'text' ? (
                    <p key={index} id='ProjectDetailsP'>{item.value}</p>
                ) : (
                    <img key={index} src={item.value} alt={`Detail ${index}`} id='ProjectDetailsImg'/>
                )
            ))}
        </div>
        <Footer/>
    </>
    );
}
