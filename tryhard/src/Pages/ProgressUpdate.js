import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Routings/header';
import Footer from '../Routings/footer';
import ProgressUpdatesData from '../Pages/json/ProgressUpdate.json'; // Import JSON data
import './css/Pages.css';

export default function ProgressUpdate() {
    const navigate = useNavigate();
    const [ProgressUpdateRows, setProgressUpdateRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4;

    useEffect(() => {
        // Sort ProgressUpdates by ID in descending order
        const sortedProgressUpdates = ProgressUpdatesData.sort((a, b) => b.id - a.id);
        // Group ProgressUpdates into rows of 3
        const rows = [];
        for (let i = 0; i < sortedProgressUpdates.length; i += 3) {
            rows.push(sortedProgressUpdates.slice(i, i + 3));
        }
        setProgressUpdateRows(rows);
    }, []);

    const totalPages = Math.ceil(ProgressUpdateRows.length / rowsPerPage);

    // Handle click to redirect to ProgressUpdate details
    const handleProgressUpdateClick = (ProgressUpdate) => {
        console.log("Navigating with ProgressUpdate:", ProgressUpdate);  // Check what is being passed
        navigate('/ProgressUpdateDetails', { state: { details: ProgressUpdate } });
    };
    

    // Pagination handlers
    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        document.title = "Arachneia - Progress Update";
      }, []);

    return (
        <>
            <Header />
            {ProgressUpdateRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, index) => (
                <div className='row' key={index}>
                    {row.map(ProgressUpdate => (
                        <div key={ProgressUpdate.id} className='Pagescontainer' onClick={() => handleProgressUpdateClick(ProgressUpdate)}>
                            <div className='Pagesbox'>
                                <div className='imagebox'>
                                    <img src={ProgressUpdate.image} alt={ProgressUpdate.title} id='previewimage' />
                                </div>
                            </div>
                            <div>
                                <h2>{ProgressUpdate.title}</h2>
                                <p>{ProgressUpdate.shortDescription}</p>
                                <p>{ProgressUpdate.date}</p>
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
