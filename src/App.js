import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <About />
       <Portfolio />
       <Contact/>
      </div>
    );
  }
}

export default App;
