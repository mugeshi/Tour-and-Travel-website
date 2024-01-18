import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/tourism_africa-1.jpg"
import Footer from "../components/Footer";
import Nyika from "../components/Nyika";

function Service (){
   return(
    <>
   <Navbar />  
    <Hero 
    cName="hero-mid "
    heroimg={AboutImg}
    tittle="Service"
    
    />
    <Nyika />
    <Footer/>
    </>
   )
}

export default Service;