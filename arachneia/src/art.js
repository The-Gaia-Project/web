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
            <div class="row">
                <div class="imagebox">
                    <div class="box-text" >
                        <h2 >Filler text</h2>{/* do not use more then 45 letters */}
                    </div>
                </div>
                <div class="imagebox" >
                    <div class="box-text" >
                        <h2>Filler text</h2>{/* do not use more then 45 letters */}
                    </div>
                </div>
                <div class="imagebox" >
                    <div class="box-text" >
                        <h2>Filler text</h2>{/* do not use more then 45 letters */}
                    </div>
                </div>
            </div>{/* end of row */}
            <div class="row">
                <div class="imagebox">
                    <div class="box-text" >
                        <h2 >Filler text</h2>{/* do not use more then 45 letters */}
                    </div>
                </div>
                <div class="imagebox" >
                    <div class="box-text" >
                        <h2>Filler text</h2>{/* do not use more then 45 letters */}
                    </div>
                </div>
                <div class="imagebox" >
                    <div class="box-text" >
                        <h2>Filler text</h2>{/* do not use more then 45 letters */}
                    </div>
                </div>
            </div>{/* end of row */}
            <Footer />
        </>
    )
}