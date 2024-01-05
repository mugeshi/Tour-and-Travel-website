import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state={clicked: false};
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Nyika</h1>
         <div className="menu-icons" onClick={this.handleclick}>
           <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
         </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a  className = {item.cName}
                href="/">
                  <i className={item.icon}></i>{item.title}
                </a>
              </li>
            );
          })}
          <button>sign up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
