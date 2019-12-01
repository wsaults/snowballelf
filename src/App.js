import React from 'react';
import elf from './images/elf.png';
import decor from './images/decor.png';
import dec1a from './images/dec1a.jpg';
import dec1b from './images/dec1b.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Snowball the Elf Update!</h1>
        <img className="decor" src={decor} alt="decor" />
      </header>
      <div className="day">
        <h2>December 1st</h2>
        <div className="row">
          <img src={dec1a} alt="December 1st Picture 1" />
          <img src={dec1b} alt="December 1st Picture 2" />
        </div>
      </div>
      <div className="day">
        <h2>December 2nd</h2>
        <p>Coming soon!</p>
      </div>
      <div className="day">
        <h2>December 3rd</h2>
        <p>Coming soon!</p>
      </div>
      <footer>
        <img className="elf" src={elf} alt="elf" />
      </footer>
    </div>
  );
}

export default App;
