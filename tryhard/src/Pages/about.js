import Header from '../Routings/header';
import Footer from '../Routings/footer';
import './css/about.css'
import React, { useEffect } from 'react';
export default function About () {

    useEffect(() => {
        document.title = "Arachneia - About";
      }, []);

    return(
        <>
            <Header />
            <div className='BigFrontImage'>
                <img src='https://github.com/GaiaAlfine/Images/blob/main/Void-fix.png?raw=true' alt='Placeholder' id='bigimage'/>
                <h1>Welcome to Archneia</h1>
            </div>
                <div className='RowBoxForAbout'>
                    <div >
                        {/* <h2>1</h2> */}
                        <p>This website is dedicated to showcasing my creative projects, ranging from innovative applications to captivating websites and engaging games. Dive into the world of possibilities.</p>
                    </div>
                    <div>
                        {/* <h2>2</h2> */}
                        <p>Explore my mesmerizing art collection where 3D masterpieces, digital wonders, and tangible creations come to life. Witness the fusion of technology and artistry at its finest.</p>
                    </div>
                </div>
            <Footer />
        </>
    )
} 