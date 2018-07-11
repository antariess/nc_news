import React, { Component } from 'react';
import logo from './nc_news_logo.png'
import {NavLink} from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {
  state = {
    isTopicSelected: false,
    searchInput: ''
  }
  render() {
    return (
      <div className='navBar'>
        <div className='left'>
          <NavLink exact to='/'><img src={logo} alt='nc news logo' id='logo'/></NavLink>
        </div>
        <div>
          <select>
            {/* must render topics when pressed */}
          </select>
          <form>
            <input placeholder='search for article' type='text'/>
            <button type='submit'>Find!</button>
          </form>
        </div>
        <div>
        <button>UserIcon</button>
        </div>
      </div>
    );
  }
}

export default NavBar;