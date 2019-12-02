import React from 'react';
import elf from './images/elf.png';
import decor from './images/decor.png';
import dec1a from './images/dec1a.jpg';
import dec1b from './images/dec1b.jpg';
import dec2a from './images/dec2a.jpg';
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
        <h2>December 2nd 2019</h2>
        <div className="row">
          <img src={dec2a} alt="December 2nd Picture 1" />
        </div>
      </div>
      <div className="day">
        <h2>December 1st 2019</h2>
        <div className="row">
          <img src={dec1a} alt="December 1st Picture 1" />
          <img src={dec1b} alt="December 1st Picture 2" />
        </div>
      </div>
      <footer>
        <img className="elf" src={elf} alt="elf" />
      </footer>
    </div>
  );
}

export default App;
