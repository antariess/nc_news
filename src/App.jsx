import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar'
import Articles from './components/Articles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path='/' component={Articles}/>
      </div>
    );
  }
}

export default App;
