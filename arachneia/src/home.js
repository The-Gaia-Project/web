import './main.css';
import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import imageData from './images.json';
export default function Home() {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="banner">
                {imageData.map((image) => ( // Use imageData directly
                    <div key={image.id}>
                        <img src={image.url} alt={image.title} className='HomeImage'/>
                    </div>
                ))}
            </div>

            <div className="main-content">
                <div className="content">
                    <h2>Lorem ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ultricies turpis... </p>
                </div>
                <div className="content">
                    <h2>Lorem ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ultricies turpis... </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
