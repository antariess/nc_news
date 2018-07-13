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
    userLoggedIn: {
      avatar_url: 'https://cdn3.iconfinder.com/data/icons/black-easy/512/538303-user_512x512.png'
    }
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
        <NavBar logIn={this.logIn} avatar={this.state.userLoggedIn.avatar_url}/>
        <Route exact path='/' render={(props) => <Articles {...props} articles={this.state.articles}/>}/>
        <Route path='/articles/:article_id' render={(props) => <Article  {...props} user={this.state.userLoggedIn}/>}/>
        <Route path='/:topic_slug/articles' render={(props) => <Topic {...props}/>}/>
      </div>
    );
  }  

  logIn = async(e, username) => {
    e.preventDefault()
    const user = await api.getUserInfo(username)
    if(user._id){
      this.setState({
        userLoggedIn: user
      })
    } else {
      console.log('oh noes!!! no such user')
    }    
  }
}

export default App;
