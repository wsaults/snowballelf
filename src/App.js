import React from 'react';
import elf from './images/elf.png';
import decor from './images/decor.png';
import dec1a from './images/dec1a.jpg';
import dec1b from './images/dec1b.jpg';
import dec2a from './images/dec2a.jpg';
import dec3a from './images/dec3a.jpg';
import dec4a from './images/dec4a.jpg';
import dec5a from './images/dec5a.jpg';
import dec5b from './images/dec5b.jpg';
import dec6a from './images/dec6a.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Snowball the Elf</h1>
        <img className="decor" src={decor} alt="decor" />
      </header>

      <div className="row">
        <p>
          Welcome to the page that's all about Snowball the Elf! Check back here daily to see what he's been up to.
        </p>
      </div>

      <div className="day">
        <h2>December 6th 2019</h2>
        <div className="row">
          <img src={dec6a} alt="December 6th" />
        </div>
        <p className="subtext">Let's hang out :)</p>
      </div>
      <div className="day">
        <h2>December 5th 2019</h2>
        <div className="row">
          <img src={dec5a} alt="December 5th" />
          <img src={dec5b} alt="December 5th" />
        </div>
        <p className="subtext">Is Snowball worthy to weild the mighty Mjölnir?</p>
      </div>
      <div className="day">
        <h2>December 4th 2019</h2>
        <div className="row">
          <img src={dec4a} alt="December 4th" />
        </div>
        <p className="subtext">Don't forget to brush!</p>
      </div>
      <div className="day">
        <h2>December 3rd 2019</h2>
        <div className="row">
          <img src={dec3a} alt="December 3rd" />
        </div>
        <p className="subtext">Napping in Isaac's bed</p>
      </div>
      <div className="day">
        <h2>December 2nd 2019</h2>
        <div className="row">
          <img src={dec2a} alt="December 2nd" />
        </div>
        <p className="subtext">Diving into Zander's stocking</p>
      </div>
      <div className="day">
        <h2>December 1st 2019</h2>
        <div className="row">
          <img src={dec1a} alt="December 1st" />
          <img src={dec1b} alt="December 1st" />
        </div>
        <p className="subtext">Snowball has arrived!</p>
      </div>
      <footer>
        <img className="elf" src={elf} alt="elf" />
      </footer>
    </div>
  );
}

export default App;
