import React, { Component } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';
// import logo from './logo.svg';
// import './App.css';
import './css/normalize.css';
import './css/skeleton.css';
import './css/custom.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar />
        </div>
        <div className="container">
          <div className="row">
            <Body />
            <SideBar />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
