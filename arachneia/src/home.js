import React, { useState, useEffect, useRef } from 'react';

import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import './css/home.css';
export default function Home() {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='PageBox'>
                PageBox
                <div className='HomeImagebox'>
                    
                    <img 
                        src='https://github.com/GaiaAlfine/Images/blob/main/GaiaHAlfine.png?raw=true' 
                        alt='HomeImage'
                    />
                    <div className='HomeTextBox'>
                        <ul>
                            <li>text</li>
                        </ul>
                    </div>{/* HomeTextBox */}
                </div>{/* HomeImageBox */}
                <div className='TextBoxHomeImage'>
                    TextBoxHomeImage
                </div>{/* TextBoxHomeImage */}
                <div className='ArtBox'>
                    ArtBox
                    <div className='ArtTextBox'>
                        ArtTextBox
                    </div>{/* ArtTextBox */}
                    <div className='ArtImageBox'>
                        ArtImageBox
                    </div>{/* ArtImageBox */}
                </div>{/* ArtBox */}
                <div className='ProjectBox'>
                    ProjectBox
                    <div className='ProjcetImageBox'>
                        ProjcetImageBox
                    </div>{/* ProjectImageBox */}
                    <div className='ProjectTextBox'>
                        ProjectTextBox
                    </div>{/* ProjectTextBox */}
                </div>{/* ProjectBox */}
            </div>{/* PageBox */}
            <Footer />
        </>
    );
}
