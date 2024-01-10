import React, { Component } from 'react';
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className="destination"> 
        <div className="first-des">
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
          <div className="image"> 
            <img alt="img" src={this.props.img1} className="unique-image-1" />
          </div>
          <div className="image">
            <img alt="img" src={this.props.img2} className="unique-image-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationData;
