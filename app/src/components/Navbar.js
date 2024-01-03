import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Nyika</h1>
        <ul className="nav-menu">
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
        </ul>
      </nav>
    );
  }
}

export default Navbar;
