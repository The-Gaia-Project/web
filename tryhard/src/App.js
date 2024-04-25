import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Routings/footer';
import Header from './Routings/header';
import React, { useState, useEffect } from 'react';
import DevLogData from './Pages/json/DevLog.json';
import ProgressUpdatesData from './Pages/json/ProgressUpdate.json';
function App() {
  useEffect(() => {
    document.title = "Arachneia - Home";
  }, []);

  const [devLog, setDevLog] = useState(null);
  const [progressUpdate, setProgressUpdate] = useState(null);

  useEffect(() => {
    // Find the log with the highest id
    const highestIdLog = DevLogData.reduce((prev, current) => (prev.id > current.id) ? prev : current, DevLogData[0]);
    setDevLog(highestIdLog); // Load the log with the highest id into state
  }, []);

  useEffect(() => {
    const highestIdProgressUpdate = ProgressUpdatesData.reduce((prev, current) => (prev.id > current.id) ? prev : current, ProgressUpdatesData[0]);
    setProgressUpdate(highestIdProgressUpdate); // Load the progress update with the highest id into state
  }, []);

  return (
    <>
      <Header />
        <div>
          <div className='BigFrontImage'>
            <img src='https://github.com/GaiaAlfine/Images/blob/main/Void-fix.png?raw=true' alt='Placeholder' id='bigimage'/>
            <h1>Welcome to Archneia</h1>
          </div>
          <div className='content-box'>
            <div className='TextBox'>
              <h2>Discover the Art of Possibility</h2>
              <p>Welcome to my digital canvas, where creativity meets craftsmanship in a vibrant display of digital, 3D, and physical art. My artistic journey is a continuous exploration of form and color, as I strive to master not one, but three diverse art styles.</p>
              <h4>Exploring Realism</h4>
              <p>Delve into my realistic creations where every stroke and pixel captures the essence of the subject. From the subtle play of light and shadow to the intricate details of textures, each piece is a testament to precision and patience.</p>
              <h4>Embracing Cartoon</h4>
              <p>Step into a whimsical world where bold lines and bright colors come alive. My cartoon-style art is all about expression and emotion, inviting viewers to connect with the playful side of life.</p>
              <h4>Crafting Pixel Art</h4>
              <p>Experience the nostalgic charm of pixel art, where I blend retro aesthetics with modern themes. Each composition is carefully crafted, pixel by pixel, to evoke memories and create new ones.</p>
              <p>Join me on this multifaceted artistic endeavor, where each piece tells a story and every story paints a picture.</p>
              <Link to='pages/arthub' id='button'>All art</Link>
            </div>
            <div className='ImageBox'>
              <img src='https://raw.githubusercontent.com/GaiaAlfine/Images/main/DALL%C2%B7E%202024-04-15%2010.13.43%20-%20A%20hand-drawn%20sketch%20depicting%20a%20black%20hole%2C%20using%20a%20wide%20aspect%20ratio.%20The%20image%20should%20emphasize%20the%20dramatic%20pull%20of%20gravity%2C%20with%20light%20bending%20aro.webp' alt='Placeholder' id='imageshowcase'/>
            </div>
          </div>

          <div className='content-box'>
            <div className='ImageBox'>
              <img src='https://github.com/GaiaAlfine/Images/blob/main/Skjermbilde%202024-04-18%20081848.png?raw=true' alt='Placeholder' id='imageshowcase'/>
            </div>
            <div className='TextBox'>
              <h2>Exploring Technology Through Projects</h2>
              <p>Welcome to my digital workshop! I'm diving into the world of technology by developing a diverse range of projects encompassing apps, websites, games, and software programs. My journey is fueled by a passion for innovation and the drive to understand and harness the power of different programming languages.</p>
              <p>Currently, I'm focusing on:</p>
              <ul>
                <li>Python: With its versatility and simplicity, Python allows me to build everything from quick scripts to complex machine learning models.</li>
                <li>JavaScript: The backbone of the web, JavaScript enables me to create dynamic and responsive web applications.</li>
              </ul>
              <p>Join me as I navigate through these technologies, sharing both my successes and learning experiences along the way.</p>
              <Link to='pages/projectshub' id='button'>All projects</Link>
            </div>
          </div>{/* content-box */}

          <div className='content-box'>
          <div className='TextBox' id='ProgressUpdate'>
              <h2>Progress Update</h2>
              {progressUpdate ? (
                <div>
                  <h3>{progressUpdate.title} - {progressUpdate.date}</h3>
                  {progressUpdate.content.map((item, index) => (
                    item.type === 'text' ? <p key={index}>{item.value}</p> :null
                  ))}
                </div>
              ) : <p>Loading Progress Update...</p>}
              <Link to='/pages/progress-update' id='button'>All ProgressUpdate</Link>
            </div>
            <div className='TextBox' id='devloghomepage'>
              <h2>DevLog</h2>
              {devLog ? (
                <div>
                  <h3>{devLog.title} - {devLog.date}</h3>
                  {devLog.content.map((item, index) => (
                    item.type === 'text' ? <p key={index}>{item.value}</p> :null
                  ))}
                </div>
              ) : <p>Loading dev log...</p>}
              <Link to='/pages/devlog' id='button'>All Devlogs</Link>
              </div>
          </div>{/* content-box */}
        </div>
      <Footer />
    </>
  );
}
export default App;
