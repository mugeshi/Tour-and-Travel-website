import React, { Component } from 'react';
import Moutain1 from "../assets/zambezi.jpg";
import Moutain2 from "../assets/zambezi2.jpg";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className="destination"> {/* The main container with the class "destination" */}
        <div className="first-des">
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
          <div className="image"> {/* Each image container should have a class "image" */}
            <img alt="img" src={Moutain1} className="unique-image-1" />
          </div>
          <div className="image">
            <img alt="img" src={Moutain2} className="unique-image-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationData;
