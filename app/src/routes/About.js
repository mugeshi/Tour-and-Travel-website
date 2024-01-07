import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/tourism_africa-1.jpg"


function About (){
   return(
    <>
   <Navbar />  
    <Hero 
    cName=".hero1"
    heroimg={AboutImg}
    tittle="About"
   
    />
    </>
   )

}

export default About;