import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/Africa2.png"

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