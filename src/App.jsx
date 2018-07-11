import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import * as api from './api'
import './App.css';

import NavBar from './components/NavBar'
import Articles from './components/Articles'
import Article from './components/Article'

class App extends Component {
  state = {
    articles: []
  }
  
  componentDidMount(){
    api.getAllArticles((newArticles) => {
      this.setState({
        articles: newArticles
      })
    })  
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path='/' render={(props) => <Articles {...props} articles={this.state.articles}/>}/>
        <Route path='/articles/:article_id' component={Article} />
      </div>
    );
  }
}

export default App;
