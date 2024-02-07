import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import '../main.css';
import { useEffect } from 'react';
export default function Art () {
    useEffect(() => {
        document.title = "Arachneia - Projects";
      }, []);
      
    return(
        <>
            <Header />
            <Sidebar />
            <div className='RowBox'>
                <h2 id='NameForBox'>Projects</h2>
                <div class="row">
                    <div class="imagebox">
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                </div>{/* end of row */}
                <div class="row">
                    <div class="imagebox">
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                </div>{/* end of row */}
                <div class="row">
                    <div class="imagebox">
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                </div>{/* end of row */}
                <div class="row">
                    <div class="imagebox">
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                </div>{/* end of row */}
                <div class="row">
                    <div class="imagebox">
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                </div>{/* end of row */}
                <div class="row">
                    <div class="imagebox">
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                    <div class="imagebox" >
                        <img src="" alt="Image" />
                        <div class="box-text" >
                            <h2 id='ImageTittle'>Filler text</h2>{/* do not use more then 45 letters */}
                            <p id='Date'>00.00.0000</p>
                        </div>
                    </div>
                </div>{/* end of row */}
            </div>
            <Footer />
        </>
    )
}