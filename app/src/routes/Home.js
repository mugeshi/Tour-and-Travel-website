import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Nyika from "../components/Nyika";

function Home (){
   return(
    <>
   <Navbar />  
    <Hero 
    cName="hero"
    heroimg="https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/main-image/2020/09/08/2262826-593670664.png?itok=I_yAn0Ml"
    tittle="THE JOURNEY, NOT THE ARRIVAL, MATTERS."
    text="Choose Your Favorite Destination"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Nyika/>
    <Footer/>
    </>
   )

}

export default Home;