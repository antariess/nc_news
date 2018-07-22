import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'
import * as FA from 'react-icons/lib/fa'

import SelectModal from "./Modals/SelectModal";
import NewUserModal from "./Modals/NewUserModal";
import UserConetext from '../context'

class NavBar extends Component {
  state = {
    isTopicPressed: false,
    isUserPressed: false
  };


  render() {
    return (
      <nav className="navbar flex" aria-label="main navigation">
        <div className='navbar-start flex'>
          <NavLink exact to="/">
            <figure className="image is-48x48">
              <img src='https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png' alt="nc news logo" id="logo" />
            </figure>
          </NavLink>
          <span className="icon icon is-large" onClick={() => this.handleModal('isUserPressed')}>
          <UserConetext.Consumer>
            {user => user.avatar_url ? <img src={user.avatar_url} alt='users avatar'/>: <FA.FaUser size={64}/>}
          </UserConetext.Consumer>
          </span>
          {this.state.isUserPressed && <NewUserModal logOut={this.props.logOut} logIn={this.props.logIn} closeModal = {this.closeModal}/>}
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
