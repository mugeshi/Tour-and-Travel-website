import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/tourism_africa-1.jpg"

function Service (){
   return(
    <>
   <Navbar />  
    <Hero 
    cName="hero-mid "
    heroimg={AboutImg}
    tittle="Service"
    
    />
    </>
   )
}

export default Service;