import React from 'react';
import LazyImage from './components/LazyImage';
import Ipsum from './components/Ipsum';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Lazy Loading Images</h2>
      </header>
      <main>
        <LazyImage src="http://lorempixel.com/700/700/abstract" />
        <Ipsum />
        <LazyImage src="http://lorempixel.com/500/700/abstract" />
        <Ipsum />
        <LazyImage src="http://lorempixel.com/700/600/abstract" />
        <Ipsum />
        <LazyImage src="http://lorempixel.com/400/700/abstract" />
        <Ipsum />
        <LazyImage src="http://lorempixel.com/700/500/abstract" />
        <Ipsum />
        <LazyImage src="http://lorempixel.com/400/700/abstract" />
        <Ipsum />
        <LazyImage src="http://lorempixel.com/700/300/abstract" />
        <Ipsum />
        <LazyImage src="http://lorempixel.com/600/700/abstract" />
        <Ipsum />
        <LazyImage src="http://lorempixel.com/700/650/abstract" />
        <Ipsum />
        <LazyImage src="http://lorempixel.com/750/700/abstract" />
        <Ipsum />
        <LazyImage src="http://lorempixel.com/700/750/abstract" />
      </main>
    </div>
  );
}

export default App;
