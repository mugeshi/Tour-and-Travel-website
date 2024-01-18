import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/tourism_africa-1.jpg"
import Footer from "../components/Footer";

function Service (){
   return(
    <>
   <Navbar />  
    <Hero 
    cName="hero-mid "
    heroimg={AboutImg}
    tittle="Service"
    
    />
    <Footer/>
    </>
   )
}

export default Service;