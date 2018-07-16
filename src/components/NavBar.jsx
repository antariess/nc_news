import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import 'bulma/css/bulma.css'
import './NavBar.css'
import * as FA from 'react-icons/lib/fa'

import SelectModal from "./Modals/SelectModal";
import NewUSerModal from "./Modals/NewUserModal";

class NavBar extends Component {
  state = {
    isTopicPressed: false,
    isUserPressed: false
  };


  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        <div className='navbar-start'>
          <NavLink exact to="/">
            <figure className="image is-48x48">
              <img src='https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png' alt="nc news logo" id="logo" />
            </figure>
          </NavLink>
          <span className="icon icon is-large" onClick={() => this.handleModal('isUserPressed')}>
            {this.props.avatar ? <img src={this.props.avatar} alt='users avatar'/>: <FA.FaUser size={64}/>} 
          </span>
          {this.state.isUserPressed && <NewUSerModal logIn={this.props.logIn} closeModal = {this.closeModal}/>}
        </div>
        <div className='navbar-end'>
          {this.state.isTopicPressed && <SelectModal closeModal = {this.closeModal}/>}
          <button className="button is-outlined is-medium" onClick={() => this.handleModal('isTopicPressed')}>
            <span>Topics</span>
            <span className="icon is-small">
              <FA.FaAngleDown aria-hidden='true'/>
            </span>
          </button>          
        </div>
      </nav>
    );
  }

 

  handleModal = (name) => {
    this.setState({
      [name]: true
    })
  }

  closeModal = (name) => {
    this.setState({      
      [name]: false
    });
  }
}

export default NavBar;
