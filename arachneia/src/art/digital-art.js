import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import '../main.css';
import imagesData from './art.json'; // Adjust the path as necessary

export default function Art() {
  useEffect(() => {
    document.title = "Arachneia - Art Home";
  }, []);

  const groupImages = (images) => {
    return images.reduce((acc, image, index) => {
      const groupIndex = Math.floor(index / 3);
      if (!acc[groupIndex]) acc[groupIndex] = [];
      acc[groupIndex].push(image);
      return acc;
    }, []);
  };

  // Choose the category you want to display, for example, the first one
  const selectedCategory = imagesData[1];

  return (
    <>
      <Header />
      <Sidebar />
      <div className='RowBox' key={selectedCategory.category}>
        <h2 id='NameForBox'>{selectedCategory.category}</h2>
        {groupImages(selectedCategory.images).map((group, index) => (
          <div className="row" key={index}>
            {group.map((image) => (
              <Link to={`/art/ArtPage/${image.id}`} key={image.id} id='ImageLink'>
                <div className="imagebox">
                  <img src={image.previewUrl} alt={image.title} className="image-preview"/>
                  <div className="box-text">
                    <h2 id='ImageTitle'>{image.title}</h2>
                    <p id='Date'>{image.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
