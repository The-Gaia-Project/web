import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Routings/header';
import Footer from '../Routings/footer';
import WorkInProgress from '../Routings/WorkInProgrss';
import projectsData from '../Pages/projects.json'; // Import JSON data
import './project.css';

export default function Projects () {
    const navigate = useNavigate(); // Use useNavigate here
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Sort projects by ID in ascending order and set to state
        const sortedProjects = projectsData.sort((a, b) => a.id - b.id);
        setProjects(sortedProjects);
    }, []);

    // Handle click to redirect to project details
    const handleProjectClick = (details) => {
        // Navigate to the details page, passing state
        navigate('/project-details', { state: { details } });
    };


    return(
        <>
            <WorkInProgress />
            <Header />
            <div className='row'>
                {projects.map(project => (
                    <div key={project.id} className='projectcontainer' onClick={() => handleProjectClick(project.details)}>
                        <div className='projectbox'>
                            <div className='imagebox'>
                                <img src={project.image} alt={project.title} id='previewimage' />
                            </div>
                        </div>
                        <div>
                            <h2>{project.title}</h2>
                            <p>{project.shortDescription}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}
