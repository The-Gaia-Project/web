import React from 'react';
import { useParams } from 'react-router-dom';
import artData from './art.json'; // Make sure the path is correct
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';

const placeholderImage = 'https://github.com/The-Gaia-Project/Images/blob/main/NoImage.png?raw=true';

function ArtPage() {
    const { id } = useParams();
  
    let image = null;
    for (const category of artData) {
      image = category.images.find(img => img.id === id);
      if (image) break; // Stop searching once the image is found
    }
  
    return (
        <>
        <Header />
        <Sidebar />
      <div className='ImagePageImage'>
        {image ? (
          <>
            <h1>{image.title || 'Image Title'}</h1> {/* Use a default title if none is found */}
            <img src={image.path} alt={image.title || 'Placeholder Image'} id='ImagePageImage' />
          </>
        ) : (
          <>
            <h1>Image Not Found</h1>
            <img src={placeholderImage} alt="Placeholder" id='ImagePageImage'/>
          </>
        )}
      </div>
        <Footer />
      </>
    );
  }
  
  export default ArtPage;
  