import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <About />
      </div>
    );
  }
}

export default App;
