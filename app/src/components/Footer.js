import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Nyika</h1>
          <p>Choose Your Favorite Destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fab fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Project</h4>
            <a href="/">chagelog</a>
            <a href="/">status</a>
            <a href="/">License</a>
            <a href="/">All versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">projects</a>
            <a href="/">twitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
        
        </div>
        <div>
            <h4>Others</h4>
            <a href="/">Terms of services</a>
            <a href="/">privacy policy</a>
            <a href="/">License</a>
           
        </div>
      </div>
    </div>
  );
}

export default Footer;
