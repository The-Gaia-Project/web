import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Routings/header';
import Footer from '../Routings/footer';
import WorkInProgress from '../Routings/WorkInProgrss';
import './project.css';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/project.json')
            .then(response => response.json())
            .then(data => {
                // Sort projects by id in ascending order
                const sortedProjects = data.sort((a, b) => a.id - b.id);
                setProjects(sortedProjects);
            })
            .catch(error => console.error('Error loading the projects:', error));
    }, []);

    return (
        <>
            <WorkInProgress />
            <Header />
            <div className='row'>
                {projects.map(project => (
                    <div key={project.id} className='projectcontainer' onClick={() => navigate(`/project/${project.id}`)}>
                        <div className='projectbox'>
                            <div className='imagebox'>
                                <img src={project.imageUrl} alt={project.title} id='previewimage' />
                            </div>
                            <h2>{project.title}</h2>
                            <p>{project.shortDescription}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}
