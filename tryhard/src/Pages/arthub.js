import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Routings/header';
import Footer from '../Routings/footer';
import artsData from '../Pages/json/Art.json'; // Import JSON data
import './css/Pages.css';

export default function ArtHub() {
    const navigate = useNavigate();
    const [artRows, setartRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4;

    useEffect(() => {
        // Sort arts by ID in descending order
        const sortedarts = artsData.sort((a, b) => b.id - a.id);
        // Group arts into rows of 3
        const rows = [];
        for (let i = 0; i < sortedarts.length; i += 4) {
            rows.push(sortedarts.slice(i, i + 4));
        }
        setartRows(rows);
    }, []);

    const totalPages = Math.ceil(artRows.length / rowsPerPage);

    // Handle click to redirect to art details
    const handleartClick = (art) => {
        console.log("Navigating with art:", art);  // Check what is being passed
        navigate('/art-details', { state: { details: art } });
    };
    

    // Pagination handlers
    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        document.title = "Arachneia - Art";
      }, []);

    return (
        <>
            <Header />
            {artRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, index) => (
                <div className='row' key={index}>
                    {row.map(art => (
                        <div key={art.id} className='Pagescontainer' onClick={() => handleartClick(art)}>
                            <div className='Pagesbox'>
                                <div className='imagebox'>
                                    <img src={art.image} alt={art.title} id='previewimage' />
                                </div>
                            </div>
                            <div>
                                <h2>{art.title}</h2>
                                <p>{art.shortDescription}</p>
                                <p>{art.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <div className="pagination">
                {currentPage > 1 && (
                    <button onClick={goToPreviousPage} id='NextButtonForContent'>Previous</button>
                )}
                {currentPage < totalPages && (
                    <button onClick={goToNextPage} id='NextButtonForContent'>Next</button>
                )}
            </div>
            <Footer />
        </>
    );
}
