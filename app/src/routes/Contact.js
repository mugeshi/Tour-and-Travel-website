import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/Africa2.png"

function Contact (){
   return(
    <>
   <Navbar />  
    <Hero 
    cName="hero-mid "
    heroimg={AboutImg}
    tittle="Contact"
    
    />
    </>
   )
}

export default Contact;