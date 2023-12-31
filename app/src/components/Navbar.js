import { Component } from "react";
import "./NavbarStyle.css";
import {Link} from "react-router-dom"

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems" >
                <h1 className = "navbar-logo">Nyika</h1>
                <ul className = "nav-menu"></ul>
                  <li>
                    <link>
                    <i class="fa-solid fa-house"></i>Home
                    </link>
                  </li>


            </nav>
        )

    }
}

export default Navbar;