import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import imageData from './images.json';

export default function Home() {
    useEffect(() => {
        document.title = "Arachneia - Home";
      }, []);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Update currentImageIndex to the next image, cycling back to 0 at the end of the array
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
        }, 10000); // Ensure this timing matches with CSS animations for smooth transitions

        return () => clearInterval(interval);
    }, []); // Removed nextImageIndex from dependency array to avoid unnecessary re-renders

    // Calculate nextImageIndex based on currentImageIndex for seamless transitions
    const nextImageIndex = (currentImageIndex + 1) % imageData.length;

    return (
        <>
            <Header />
            <Sidebar />
            <div className="banner">
                {/* Adjust the key prop to force re-render and restart the animation */}
                <img src={imageData[currentImageIndex].url} alt="Current" className="HomeImage slide" key={currentImageIndex} />
                <img src={imageData[nextImageIndex].url} alt="Next" className="HomeImage slide next" key={nextImageIndex} />
            </div>

            <div className="main-content">
                <div className="content">
                    <h2>About me!</h2>
                    <ul>
                        <li>I am 23 years old.</li><br/>
                        <li>My dream is to become a robotic engeneer, or a game develuper.</li><br/>
                        <li>I mod and create games for fun in my free time.</li><br/>
                        <li>I have also started do make programs in python for fun.</li><br/>
                    </ul>
                </div>
                <div className="content">
                    <h2>My hobbies</h2>
                    <ul>
                        <li>Game Development / Game modding</li><br/>
                        <li>Drawing / Photoshop</li><br/>
                        <li>3D Designing / 3D Printing</li><br/>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}
