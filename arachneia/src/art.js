import React from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import './main.css';
import { useEffect } from 'react';
export default function Art () {
    useEffect(() => {
        document.title = "Arachneia - Art";
      }, []);
      
    return(
        <>
            <Header />
            <Sidebar />
            <Footer />
        </>
    )
}