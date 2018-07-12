import React, { Component } from "react";
import logo from "./nc_news_logo.png";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

import SelectModal from "./SelectModal";

class NavBar extends Component {
  state = {
    isTopicPressed: false
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
          <button onClick={this.toggleClick}>Topics</button>
          {this.state.isTopicPressed && <SelectModal/>}
        </div>
        <div>
          <form>
            <input placeholder="search for article" type="text" />
            <button type="submit">Find!</button>
          </form>
        </div>
        <div>
          <button>UserIcon</button>
        </div>
      </div>
    );
  }

  toggleClick = e => {
    if(this.state.isTopicPressed){
      this.setState({      
        isTopicPressed: false
      })
    } else {
      this.setState({      
        isTopicPressed: true
      });
    }
  };
}

export default NavBar;
