import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import * as api from './api'
import './App.css';

import NavBar from './components/NavBar'
import Articles from './components/Articles'
import Article from './components/Article'
import Topic from './components/Topic'

class App extends Component {
  state = {
    articles: [],
    userLoggedIn: ''
  }
  
  async componentDidMount(){
    const newArticles = await api.getAllArticles()
    this.setState({
      articles: newArticles
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar handleTopicSelect={this.handleTopicSelect}/>
        <Route exact path='/' render={(props) => <Articles {...props} articles={this.state.articles}/>}/>
        <Route path='/articles/:article_id' render={(props) => <Article  {...props} user={this.state.userLoggedIn}/>}/>
        <Route path='/:topic_slug/articles' render={(props) => <Topic {...props}/>}/>
      </div>
    );
  }  
}

export default App;
