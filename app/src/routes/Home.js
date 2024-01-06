import Hero from "../components/Hero";
import Navbar from "../components/Navbar"

function Home (){
   return(
    <>
   <Navbar />  
    <Hero 
    cName="hero"
    heroimg="https://econreview.berkeley.edu/wp-content/uploads/2023/09/safari-truck-giraffes-micato-safaris-SAFARIGUIDETIPS0721-2549bb165aa34dc193cb8b6f3958654b-e1694024338105.jpg"
    tittle="THE JOURNEY, NOT THE ARRIVAL, MATTERS."
    text="Choose Your Favorite Destination"
    

    />
    </>
   )

}

export default Home;