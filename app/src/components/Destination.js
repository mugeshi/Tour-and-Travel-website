import Moutain1 from "../assets/zambezi.jpg";
import Moutain2 from "../assets/zambezi2.jpg";
import Moutain3 from "../assets/seregeti.jpeg";
import Moutain4 from "../assets/seregeti2.jpeg";

import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to have an unforgettable experience.</p>
      
        <DestinationData         
        heading ="Victoria Falls, Zimbabwe/Zambia
"
        text="Victoria Falls, known as Mosi-oa-Tunya in the local language, translates to The Smoke That Thunders.
        This natural wonder sits on the border between Zimbabwe and Zambia. The sheer power and beauty of the 
        falls are awe-inspiring, with a width of 1,708 meters (5,604 feet) and a height of 108 meters 
        (354 feet). The mist rising from the falls creates a microclimate, supporting a rainforest ecosystem 
        with diverse flora and fauna. Visitors can experience the falls through various activities, from adrenaline-pumping 
        bungee jumping or white-water rafting to serene sunset cruises on the Zambezi River."
         img1={Moutain1}
         img2={Moutain2}
/>

<DestinationData         
        heading ="Serengeti National Park, Tanzania
"
        text="The Serengeti is an iconic African safari destination, renowned for 
        its vast savanna teeming with wildlife. It's the stage for the annual migration of 
        millions of wildebeest, zebra, and gazelle, following the rains in search of fresh grazing grounds.
         The park offers exceptional opportunities for game drives, witnessing the Big Five (lions, elephants, 
         buffalo, leopards, and rhinos), and experiencing the breathtaking landscapes, including acacia-dotted 
         plains and kopjes (rock formations)."
         img1={Moutain3}
         img2={Moutain4}
/>
        </div>
        
     
  );
};

export default Destination;
