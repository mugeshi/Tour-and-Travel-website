import Moutain1 from "../assets/zambezi.jpg"
import Moutain2 from "../assets/zambezi2.jpg"
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to have an unforgettable experience.</p>
            <div className="first-des">
                <div className="des-text">
                    <h2>Victoria Falls, Zimbabwe/Zambia</h2>
                    <p>
                        Victoria Falls, known as "Mosi-oa-Tunya" in the local language, translates to "The Smoke That Thunders." This natural wonder sits on the border between Zimbabwe and Zambia.
                        The sheer power and beauty of the falls are awe-inspiring, with a width of 1,708 meters (5,604 feet) and a height of 108 meters (354 feet). The mist rising from the falls
                        creates a microclimate, supporting a rainforest ecosystem with diverse flora and fauna. Visitors can experience the falls through various activities, from adrenaline-pumping
                        bungee jumping or white-water rafting to serene sunset cruises on the Zambezi River.
                    </p>
                </div>
                <div className="image">
                    <img alt="img" src={Moutain1} />
                </div>
                <div className="image">
                    <img alt="img" src={Moutain2} />
                </div>
            </div>
        </div>
    );
};

export default Destination;