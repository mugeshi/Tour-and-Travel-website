import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/Giraffes.jpg"
import Footer from "../components/Footer";

function Contact (){
   return(
    <>
   <Navbar />  
    <Hero 
    cName="hero-mid "
    heroimg={AboutImg}
    tittle="Contact"
    
    />
     <Footer />
    </>
   )
}

export default Contact;