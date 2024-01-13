import React from "react";
import "./NyikaStyles.css";
import NyikaData from "NyikaData";

function Nyika() {
  return (
    <div className="Nyika">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="nyikacard">
        <NyikaData
        image={}
        />
        
      </div>
    </div>
  );
}

export default Nyika;
