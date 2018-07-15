import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'
import * as api from './api'
import './App.css';

import NavBar from './components/NavBar'
import Articles from './components/Articles'
import Article from './components/Article'
import Topic from './components/Topic'
import Footer from './components/Footer';
import Error404 from './components/errorHandling/Error404'
import Error400 from './components/errorHandling/Error400'
import ErrorLogIn from './components/errorHandling/ErrorLogIn'



class App extends Component {
  state = {
    articles: [],
    userLoggedIn: {
      incorrectUsername: false,
      avatar_url: 'https://cdn3.iconfinder.com/data/icons/black-easy/512/538303-user_512x512.png'
    },
    invalidUrl: false
  }
  
  componentDidMount(){
    api.getAllArticles()
      .then(res => {
        const newArticles = res.data.articles
        newArticles.sort((a, b) => {
          const aScore = a.votes + a.comments
          const bScore = b.votes + b.comments
          return bScore - aScore
        })
        this.setState({
          articles: newArticles
        })
      })
      .catch(err => {
        this.setState({
          invalidUrl: true
        })
      })
  }

  render() {
    return this.state.invalidUrl 
    ? <Redirect to="/404" /> 
    : this.state.userLoggedIn.incorrectUsername
    ? <Redirect to='/401'/>
    : (
      <div className="App">
        <NavBar logIn={this.logIn} avatar={this.state.userLoggedIn.avatar_url}/>
        <Route exact path='/' render={(props) => <Articles {...props} articles={this.state.articles}/>}/>
        <Route path='/articles/:article_id' render={(props) => <Article  {...props} user={this.state.userLoggedIn}/>}/>
        <Route path='/:topic_slug/articles' render={(props) => <Topic {...props} user={this.state.userLoggedIn}/>}/>

        <Route path="/404" component={Error404} />
        <Route path="/400" component={Error400} />
        <Route path="/401" component={ErrorLogIn} />

        <Footer/>
      </div>
    )
  }  

  logIn = async(e, username) => {
    e.preventDefault()
    const user = await api.getUserInfo(username)
    if(user){
      this.setState({
        userLoggedIn: user
      })
    } else {
      this.setState({
        userLoggedIn: {
          incorrectUsername: true
        }
      })
    }    
  }
}

export default App;
