// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './main.css'; // Assuming you have a separate CSS file for styling

function Sidebar() {
  // State to manage sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button onClick={toggleSidebar} className="toggle-btn">
          {isOpen ? 'X' : ' ☰'}
        </button>
        <nav>
          <ul>
            <li><h2>Home</h2></li>
            <li><Link to="/art" onClick={toggleSidebar}>Art</Link></li>
            <li><Link to="/projects" onClick={toggleSidebar}>Projects</Link></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
