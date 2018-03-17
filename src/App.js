import React, { Component } from 'react';
import logo from './logo.svg';
import CustomNavbar from  './Components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import About from './Components/About';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/>
      </div>
    </Router>
    );
  }
}

export default App;
