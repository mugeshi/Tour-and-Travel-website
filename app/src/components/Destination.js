import Moutain1 from "../assets/zambezi.jpg";
import Moutain2 from "../assets/zambezi2.jpg";
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
        text="The Serengeti is an iconic African safari destination, renowned for 
        its vast savanna teeming with wildlife. It's the stage for the annual migration of 
        millions of wildebeest, zebra, and gazelle, following the rains in search of fresh grazing grounds.
         The park offers exceptional opportunities for game drives, witnessing the Big Five (lions, elephants, 
         buffalo, leopards, and rhinos), and experiencing the breathtaking landscapes, including acacia-dotted 
         plains and kopjes (rock formations)."
/>
        </div>
        
      

  );
};

export default Destination;
