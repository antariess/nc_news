import React, { Component } from "react";
import logo from "./nc_news_logo.png";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import SelectModal from "./SelectModal";
import NewUSerModal from "./NewUserModal";

class NavBar extends Component {
  state = {
    isTopicPressed: false,
    isUserPressed: false
  };
  render() {
    return (
      <div className="navBar">
        <div className="left">
          <NavLink exact to="/">
            <img src={logo} alt="nc news logo" id="logo" />
          </NavLink>
        </div>
        <div>
          <button onClick={() => this.handleModal('isTopicPressed')}>Topics</button>
          {this.state.isTopicPressed && <SelectModal closeModal = {this.closeModal}/>}
        </div>
        <div>
          <form>
            <input placeholder="search for article" type="text" />
            <button type="submit">Find!</button>
          </form>
        </div>
        <div>
          <button onClick={() => this.handleModal('isUserPressed')}><img className='image' alt ='button to log in or user avatar' src={this.props.avatar}/></button>
          {this.state.isUserPressed && <NewUSerModal logIn={this.props.logIn} closeModal = {this.closeModal}/>}
        </div>
      </div>
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
