import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/Africa2.png"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About (){
   return(
    <>
   <Navbar />  
    <Hero 
     cName="hero-mid "
    heroimg={AboutImg}
    tittle="About"
    
    />
    <AboutUs />
    <Footer />
    </>
   )
}

export default About;