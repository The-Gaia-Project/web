import React, { useState, useEffect, useRef } from 'react';

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
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const nextImageIndex = (currentImageIndex + 1) % imageData.length;

    const bannerRef = useRef(null);

    useEffect(() => {
        updateBannerHeight(); // Call updateBannerHeight on component mount
        const interval = setInterval(updateBannerHeight, 1); // Update banner height every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentImageIndex]); // Re-run effect when currentImageIndex changes

    const updateBannerHeight = () => {
        if (bannerRef.current) {
            const currentImg = bannerRef.current.querySelector('.HomeImage:not(.next)');
            if (currentImg) {
                const height = currentImg.offsetHeight;
                bannerRef.current.style.height = `${height}px`;
            }
        }
    };

    useEffect(() => {
        const img = new Image();
        img.onload = updateBannerHeight;
        img.src = imageData[currentImageIndex].url;
    }, [currentImageIndex]);

    return (
        <>
            <Header />
            <Sidebar />
            <div className="banner" ref={bannerRef}>
                <img src={imageData[currentImageIndex].url} alt="Current" className="HomeImage slide" key={currentImageIndex} onLoad={updateBannerHeight} />
                <img src={imageData[nextImageIndex].url} alt="Next" className="HomeImage slide next" key={nextImageIndex} onLoad={updateBannerHeight} />
            </div>

            <div className="main-content">
                <div className="content">
                    <h2>About me!</h2>
                    <ul>
                        <li>I am 23 years old.</li><br/>
                        <li>My dream is to become a robotic engineer, or a game developer.</li><br/>
                        <li>I mod and create games for fun in my free time.</li><br/>
                        <li>I have also started to make programs in python for fun.</li><br/>
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
