import React from "react";
import NyikaData from './NyikaData';
import "./NyikaStyles.css";
import Nyika1 from "../assets/massaimara1.jpeg"
import Nyika2 from "../assets/massaimara1.jpeg"
import Nyika3 from "../assets/massaimara1.jpeg"

import Nyika4 from "../assets/giraffe1.jpg"

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
     <NyikaData
        image={Nyika4}
        heading="Destination to Giraffe Centre"
        text="

The Giraffe Centre, situated in Nairobi, Kenya, is a conservation and educational center 
dedicated to the endangered Rothschild's giraffe. Established by the African Fund for 
Endangered Wildlife in 1979, the center provides a unique opportunity for visitors to 
interact closely with these graceful creatures. Guests can hand-feed and observe giraffes 
from a raised platform, gaining insight into their behavior and conservation efforts. Beyond its 
role in giraffe preservation, the Giraffe Centre plays a crucial part in environmental education, 
ostering awareness and appreciation for wildlife conservation among visitors of all ages. 
The center's commitment to sustainable practices and wildlife protection makes it a noteworthy 
destination for those interested in both giraffe conservation and environmental education."
        />
         <NyikaData
        image={Nyika4}
        heading="Destination to Giraffe Centre"
        text="

The Giraffe Centre, situated in Nairobi, Kenya, is a conservation and educational center 
dedicated to the endangered Rothschild's giraffe. Established by the African Fund for 
Endangered Wildlife in 1979, the center provides a unique opportunity for visitors to 
interact closely with these graceful creatures. Guests can hand-feed and observe giraffes 
from a raised platform, gaining insight into their behavior and conservation efforts. Beyond its 
role in giraffe preservation, the Giraffe Centre plays a crucial part in environmental education, 
ostering awareness and appreciation for wildlife conservation among visitors of all ages. 
The center's commitment to sustainable practices and wildlife protection makes it a noteworthy 
destination for those interested in both giraffe conservation and environmental education."
        />
      </div>
    </div>
  );
}

export default Nyika;
