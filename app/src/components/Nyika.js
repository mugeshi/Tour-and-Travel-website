import React from "react";
import "./NyikaStyles.css";
import NyikaData from "NyikaData";
import Nyika1 from "../asserts/massaimara1.jpeg"
import Nyika2 from "../asserts/massaimara1.jpeg"
import Nyika3 from "../asserts/massaimara1.jpeg"
import Nyika4 from "../asserts/massaimara1.jpeg"


function Nyika() {
  return (
    <div className="Nyika">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="nyikacard">
        <NyikaData
        image={Nyika1}
        heading="A Tour In MaasaiMara National Park"
        text="
Maasai Mara National Reserve, located in southwestern Kenya, is renowned for its breathtaking landscapes 
and rich biodiversity. Spanning over 1,500 square kilometers, the reserve is characterized by vast open 
grasslands, dotted with acacia trees and traversed by the Mara River. It is a haven for wildlife 
enthusiasts, offering the chance to witness the annual Great Migration of wildebeest, zebras, and other 
herbivores. The reserve is home to a diverse array of animals, including the Big Five – lions, 
elephants, buffalo, leopards, and rhinoceros. The Maasai Mara also hosts a vibrant Maasai community, 
adding cultural significance to the natural splendor of the region. Visitors can experience a unique blend 
of wildlife and traditional Maasai culture in this iconic African safari destination."
        />
        
      </div>
    </div>
  );
}

export default Nyika;
