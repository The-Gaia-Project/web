import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export default function Sidebar() {
    // State to manage sidebar and collapsible sections visibility
    const [isArtOpen, setArtOpen] = useState(false);
    const [isProjectsOpen, setProjectsOpen] = useState(false);
    const [isFavoritesOpen, setFavoritesOpen] = useState(false);

    // Functions to toggle each section
    const toggleArt = () => setArtOpen(!isArtOpen);
    const toggleProjects = () => setProjectsOpen(!isProjectsOpen);
    const toggleFavorites = () => setFavoritesOpen(!isFavoritesOpen);

    // Define favorite URLs
    const links = {
      art: [
        { name: 'Art Home', url: '/art/art-home' },
        { name: 'Physical art', url: '/art/physical-art' },
        { name: 'Digital Art', url: '/art/digital-art' },
        { name: '3D', url: '/art/3d' },
        // Add more art links as needed
      ],
      projects: [
          { name: 'Projects', url: '/projects/projects-home' },
          // Add more project links as needed
      ],
      favorites: [
        { name: '9anime', url: 'https://9animetv.to/home'  },
        { name: 'animania', url: 'https://animania.co.uk/' },
        { name: 'manganato', url: 'https://manganato.com/' },
        // Add more links as needed
      ],
    };

    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(); // Ref to the sidebar for measuring its height

    // Function to toggle the sidebar
    const toggleSidebar = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            // Assuming your header has a fixed height or you can dynamically calculate it
            const header = document.querySelector('header'); // Adjust the selector as needed
            const headerBottom = header.getBoundingClientRect().bottom;

            // Adjust the top style of the sidebar based on the header's bottom edge
            const sidebar = sidebarRef.current;
            if (sidebar) {
                sidebar.style.top = `${headerBottom}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <button onClick={toggleSidebar} className="toggle-btn">
                    {isOpen ? <h2>X</h2> : <h2>≡</h2>}
                </button>




          <nav>
              <ul>
                  <li><h2>Home</h2></li>
                  <li>
                      <button onClick={toggleArt} className='ToggleButton'>Art</button>
                      {isArtOpen && (
                          <div>
                              {links.art.map(link => (
                                  <div key={link.name}>
                                      <Link to={link.url} onClick={toggleSidebar} className='ToggleButton'>{link.name}</Link>
                                  </div>
                              ))}
                          </div>
                      )}
                  </li>
                  <li>
                      <button onClick={toggleProjects}>Projects</button>
                      {isProjectsOpen && (
                          <div>
                              {links.projects.map(link => (
                                  <div key={link.name}>
                                      <Link to={link.url} onClick={toggleSidebar}>{link.name}</Link>
                                  </div>
                              ))}
                          </div>
                      )}
                  </li>
                  <li>
                      <button onClick={toggleFavorites} className='ToggleButton'>Favorites</button>
                      {isFavoritesOpen && (
                          <div>
                              {links.favorites.map(link => (
                                  <div key={link.name}>
                                      <Link to={link.url} target="_blank" onClick={toggleSidebar} className='ToggleButton'>{link.name}</Link>
                                  </div>
                              ))}
                          </div>
                      )}
                  </li>
              </ul>
          </nav>
      </div>
  </>
);
}


