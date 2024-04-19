import { Link } from 'react-router-dom';
import './App.css';
import ArtHub from './Pages/arthub';
import Footer from './Routings/footer';
import Header from './Routings/header';

function App() {
  return (
    <>
      <Header />
        <div>
          <div className='BigFrontImage'>
            <img src='https://github.com/GaiaAlfine/Images/blob/main/Void-fix.png?raw=true' alt='Placeholder' id='bigimage'/>
            <h1>Welcome to Archneia</h1>
            {/* <button>About</button> */}
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
            <div className='TextBox'>
              <h2>Progress update.</h2>
              <h3>Arachneia Project Progress Update - 04/18/2024</h3>
              <h3>Overview</h3>
              <p>We are excited to provide you with the latest progress update on the ongoing projects at Arachneia. As of today, our team of dedicated developers and designers continues to work diligently to bring innovative solutions to life.</p>
              <h3>Development Highlights</h3>
              <ul>
                <li>Applications: Our team is focused on refining the user experience of the applications we are building. We have made significant strides in optimizing performance and adding new features based on user feedback.</li>
                <li>Websites: Several website projects are nearing completion, with attention to detail being paid to ensure seamless functionality across different devices and browsers.</li>
                <li>Games: Progress on our latest game development endeavors remains steady. We are fine-tuning gameplay mechanics and integrating captivating visuals to deliver an engaging gaming experience.</li>
              </ul>
              <h3>Artistic Endeavors</h3>
              <ul>
                <li>3D Art: Our artists have been experimenting with new techniques to create visually stunning 3D art pieces. From intricate sculptures to immersive environments, we are pushing the boundaries of creativity.</li>
                <li>Digital Art: The digital art projects at Arachneia are flourishing, with a focus on blending traditional art principles with digital mediums to produce captivating and original artworks.</li>
                <li>Physical Art: We are excited to announce upcoming physical art showcases where our handmade creations will be on display for art enthusiasts to explore and appreciate.</li>
              </ul>
              <h3>Technology Stack</h3>
              <p>At Arachneia, we leverage the power of Python to bring our projects to life. The versatility and efficiency of Python allow us to develop robust applications, interactive websites, and captivating games with ease</p>
              <h3>Looking Ahead</h3>
              <p>As we move forward, our commitment to excellence and innovation remains unwavering. We are dedicated to delivering high-quality projects that push the boundaries of technology and artistry.</p>
              <p>Thank you for your continued support and interest in Arachneia. Stay tuned for more updates as we strive to bring our vision to reality. </p>
              <p>Sincerely, [Your Name] Arachneia Team</p>
              <Link to='/pages/progress-update' id='button'>All Progress Update</Link>
            </div>
            <div className='TextBox'>
              <h2>DevLog</h2>
              <h3>Arachneia Development Log - 04/18/2024</h3>
              <h3>Overview</h3>
              <p>In this week's development log, we made significant progress on multiple fronts in our pursuit of excellence. Our team continued to work tirelessly to bring our projects to life and push the boundaries of creativity and innovation.</p>
              <h3>Projects</h3>
              <h3>Applications</h3>
              <ul>
                <li>Developed a new productivity application designed to streamline task management and increase efficiency.</li>
                <li>Implemented user feedback to enhance the user experience and meet the evolving needs of our audience.</li>
                <li>Conducted extensive testing to ensure optimal performance and functionality.</li>
              </ul>
              <h3>Websites</h3>
              <ul>
                <li>Revamped the design of a client's website, incorporating modern trends and responsive layouts.</li>
                <li>Optimized website loading times and SEO performance for improved search engine visibility.</li>
                <li>Implemented advanced security measures to safeguard against potential threats and ensure data protection.</li>
              </ul>
              <h3>Games</h3>
              <ul>
                <li>Created a concept for a new game that combines immersive storytelling with engaging gameplay mechanics.</li>
                <li>Collaborated with artists to bring the game world to life through stunning visuals and captivating animations.</li>
                <li>Conducted playtesting sessions to gather feedback and refine gameplay elements for a polished gaming experience.</li>
              </ul>
              <h3>Python Coding</h3>
              <ul>
                <li>Continued to hone our Python coding skills through ongoing learning and practice sessions.</li>
                <li>Implemented new libraries and modules to enhance the functionality of our projects and improve coding efficiency.</li>
                <li>Engaged with the Python developer community to exchange knowledge, seek advice, and stay up-to-date on the latest industry trends.</li>
              </ul>
              <p>This concludes our development log for the week. Stay tuned for more exciting updates and milestones as we continue our journey of creativity and innovation at Arachneia.</p>
              <Link to='/pages/devlog' id='button'>All Devlogs</Link>
            </div>
          </div>{/* content-box */}
        </div>
      <Footer />
    </>
  );
}
export default App;
