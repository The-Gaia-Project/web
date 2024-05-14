import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Routings/header';
import Footer from '../Routings/footer';
import devlogsData from './json/DevLog.json'; // Import JSON data
import './css/Pages.css';

export default function DevLog() {
    const navigate = useNavigate();
    const [devlogRows, setdevlogRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4;

    useEffect(() => {
        // Sort devlogs by ID in descending order
        const sorteddevlogs = devlogsData.sort((a, b) => b.id - a.id);
        // Group devlogs into rows of 3
        const rows = [];
        for (let i = 0; i < sorteddevlogs.length; i += 3) {
            rows.push(sorteddevlogs.slice(i, i + 3));
        }
        setdevlogRows(rows);
    }, []);

    const totalPages = Math.ceil(devlogRows.length / rowsPerPage);

    // Handle click to redirect to devlog details
    const handledevlogClick = (devlog) => {
        console.log("Navigating with devlog:", devlog);  // Check what is being passed
        navigate('/DevLogDetails', { state: { details: devlog } });
    };
    

    // Pagination handlers
    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        document.title = "Arachneia - DevLog";
      }, []);

    return (
        <>
            <Header />
            {devlogRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, index) => (
                <div className='row' key={index}>
                    {row.map(devlog => (
                        <div key={devlog.id} className='Pagescontainer' onClick={() => handledevlogClick(devlog)}>
                            <div className='Pagesbox'>
                                <div className='imagebox'>
                                    <img src={devlog.image} alt={devlog.title} id='previewimage' />
                                </div>
                            </div>
                            <div>
                                <h2>{devlog.title}</h2>
                                <p>{devlog.shortDescription}</p>
                                <p>{devlog.date}</p>
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
