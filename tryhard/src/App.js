import './App.css';
import Footer from './Routings/footer';
import Header from './Routings/header';
function App() {
  return (
    <>
      <Header />
        <div>
          <div className='BigFrontImage'>
            <img src='' alt='Placeholder' />
            <h1>Welcome to Archneia</h1>
            <button>About</button>
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
              <button>more</button>
            </div>
            <div className='ImageBox'>
              <img src='' alt='Placeholder' />
            </div>
          </div>{/* content-box */}

          <div className='content-box'>
            <div className='ImageBox'>
              <img src='' alt='Placeholder' />
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
              <button>more</button>
            </div>
          </div>{/* content-box */}

          <div className='content-box'>
            <div className='TextBox'>
              <h2>Placeholder</h2>
              <p>Placeholder</p>
              <button>more</button>
            </div>
            <div className='TextBox'>
              <h2>Placeholder</h2>
              <p>Placeholder</p>
              <button>more</button>
            </div>
          </div>{/* content-box */}
        </div>
      <Footer />
    </>
  );
}

export default App;
