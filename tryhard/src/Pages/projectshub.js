import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Routings/header';
import Footer from '../Routings/footer';
import projectsData from '../Pages/json/projects.json'; // Import JSON data
import './css/project.css';

export default function Projects() {
    const navigate = useNavigate();
    const [projectRows, setProjectRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4;

    useEffect(() => {
        // Sort projects by ID in descending order
        const sortedProjects = projectsData.sort((a, b) => b.id - a.id);
        // Group projects into rows of 3
        const rows = [];
        for (let i = 0; i < sortedProjects.length; i += 3) {
            rows.push(sortedProjects.slice(i, i + 3));
        }
        setProjectRows(rows);
    }, []);

    const totalPages = Math.ceil(projectRows.length / rowsPerPage);

    // Handle click to redirect to project details
    const handleProjectClick = (project) => {
        console.log("Navigating with project:", project);  // Check what is being passed
        navigate('/ProjectDetails', { state: { details: project } });
    };
    

    // Pagination handlers
    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        document.title = "Arachneia - Projects";
      }, []);
      
    return (
        <>
            <Header />
            {projectRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, index) => (
                <div className='row' key={index}>
                    {row.map(project => (
                        <div key={project.id} className='projectcontainer' onClick={() => handleProjectClick(project)}>
                            <div className='projectbox'>
                                <div className='imagebox'>
                                    <img src={project.image} alt={project.title} id='previewimage' />
                                </div>
                            </div>
                            <div className='TextBox'>
                                <h2>{project.title}</h2>
                                <p>{project.shortDescription}</p>
                                <p>{project.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <div className="pagination">
                {currentPage > 1 && (
                    <button onClick={goToPreviousPage}>Previous</button>
                )}
                {currentPage < totalPages && (
                    <button onClick={goToNextPage}>Next</button>
                )}
            </div>
            <Footer />
        </>
    );
}
