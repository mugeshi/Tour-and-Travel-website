import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/Giraffes.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact (){
   return(
    <>
   <Navbar />  
    <Hero 
    cName="hero-mid "
    heroimg={AboutImg}
    tittle="Contact"
    
    />
     <ContactForm />
     <Footer />
    </>
   )
}

export default Contact;