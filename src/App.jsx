import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import * as api from './api'
import 'bulma/css/bulma.css'
import UserContext from './context'

import NavBar from './components/NavBar'
import Articles from './components/Articles'
import Article from './components/Article'
import Topic from './components/Topic'
import Footer from './components/Footer';
import Error404 from './components/errorHandling/Error404'
import Error400 from './components/errorHandling/Error400'
import Error401 from './components/errorHandling/Error401'

class App extends Component {
  state = {
    articles: [],
    incorrectUsername: false,
    userLoggedIn: {},
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
    : this.state.incorrectUsername
    ? <Redirect to='/401'/>
    : (
       <div className="App">
        <UserContext.Provider value={this.state.userLoggedIn}>
            <NavBar logIn={this.logIn}/>
            <Switch>
              <Route path='/articles/:article_id' component={Article}/>
              <Route path='/:topic_slug/articles' component={Topic}/>
              <Route path="/404" component={Error404} />
              <Route path="/400" component={Error400} />
              <Route path="/401" component={Error401} />
              <Route path='/' render={(props) => <Articles {...props} articles={this.state.articles}/>}/>
              <Route component={Error404}></Route>
            </Switch>
          <Footer/>
        </UserContext.Provider>
      </div>
    )
  }  

  logIn = async(e, username) => {
    e.preventDefault()
    await api.getUserInfo(username)
      .then(res => {
        const user = res.data.user
        this.setState({
          userLoggedIn: user
        })
      })
      .catch(err => {
        this.setState({
          incorrectUsername: true
        })
      })  
  }
}

export default App;
