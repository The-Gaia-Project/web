import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Routings/footer';
import Header from './Routings/header';
import React, { useState, useEffect } from 'react';
import DevLogData from './Pages/json/DevLog.json';
import ProgressUpdatesData from './Pages/json/ProgressUpdate.json';
import Favs from './Routings/Favorits';
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
          <div className='Arachneia-Script-Host'>
              <h2>Script-Host</h2>
              <h3>Arachneia Script Host Technical Documentation</h3>
              <h3>Download</h3>
              <a href='https://github.com/GaiaAlfine/Arachneia-ScriptHost/releases/download/Script-Host/Arachneia-ScriptHost.V0.8.1.zip'>Download Arachneia Script Host</a>
              <h3>Overview</h3>
              <p>The Arachneia Script Host is a script hosting application designed for running and managing Python scripts with a user-friendly graphical interface. It is built using PyQt5. The application allows for the easy addition, removal, and execution of scripts, providing a centralized location for managing script execution on a Windows system.</p>
              <p>Note: The application might trigger Windows Defender alerts due to the nature of script execution and file manipulation capabilities. Rest assured, the script host and its scripts are safe, and no data is uploaded to the web. Dependencies are downloaded only when required by the scripts.</p>
              <h3>Features</h3>
              <ul>
                <li>Script Management: Add, remove, and execute Python scripts.</li>
                <li>Dependency Handling: Automatically installs missing Python packages required by the scripts.</li>
                <li>Error Handling: Displays error messages for incompatible scripts and other runtime issues.</li>
              </ul>
              <h3>Known Bugs and Errors</h3>
              <ul>
                <li>Bug: If there is an error during startup, multiple instances of the program's error windows may appear sequentially.</li>
                <li>Bug: If an incompatible script is imported and an error window is shown, the script will not appear in the script remover list. The user needs to manually delete the script from the script folder.</li>
                <li>Error: Scripts using the pandas library cannot be imported. This will be fixed in the next update.</li>
                <li>Error: Scripts using the charmap library cannot be imported. This will be fixed in the next update.</li>
              </ul>
              <h3>Installation and Setup</h3>
              <ol>
                <li>Download the Executable: Obtain the Arachneia-ScriptHost.exe from the official release page.</li>
                <li>Run the Application: Double-click the Arachneia-ScriptHost.exe file to launch the application.</li>
              </ol>
              <h3>Using the Application</h3>
              <h4>Adding a Script</h4>
              <ol>
                <li>Click on the "+" tab.</li>
                <li>In the file dialog, select the Python script (.py) you wish to add.</li>
                <li>The script will be added to the list of available scripts.</li>
              </ol>
              <h4>Removing a Script</h4>
              <ol>
                <li>Select the script from the script list on the Home tab.</li>
                <li>Click the "Remove" button.</li>
                <li>The script will be removed from the list and deleted from the scripts folder.</li>
              </ol>
              <h4>Running a Script</h4>
              <ol>
                <li>Select the script from the list on the Home tab.</li>
                <li>The script will open in a new tab and execute within the application.</li>
              </ol>
              <h3>Handling Errors and Bugs</h3>
              <h4>Startup Error Bug</h4>
              <p>If multiple error windows appear during startup:</p>
              <ul>
                <li>Close each error window individually.</li>
                <li>Check for any startup issues or misconfigured scripts.</li>
              </ul>
              <h4>Incompatible Script Error</h4>
              <p>If an error occurs while importing a script:</p>
              <ul>
                <li>The script will not appear in the script remover list.</li>
                <li>Manually navigate to the scripts folder and delete the problematic script.</li>
              </ul>
              <h4>Library Import Errors</h4>
              <p>Currently, scripts using pandas or charmap libraries cannot be imported. This issue will be addressed in the next update.</p>
              <h4>Version</h4>
              <p>Current Version: V0.8.1</p>
              <h4>Future Improvements</h4>
              <ul>
                <li>Fix for the multiple error window issue during startup.</li>
                <li>Enhanced error handling for incompatible scripts.</li>
                <li>Support for scripts using pandas and charmap libraries.</li>
              </ul>
              <h3>Contact and Support</h3>
              <p>For any issues or support requests, please contact the developer at [support@arachneia.com].</p>
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
