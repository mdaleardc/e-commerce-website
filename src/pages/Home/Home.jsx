import Hero from "../../components/Hero/Hero";
import Service from "../../components/Service/Service";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Testemonials from "../../components/Testemonials/Testemonials"
import Gallery from "../../components/Gallery/Gallery";

const Home = ({ addToCart }) => {
  
  
  
  return (
    <div>
    <Hero />
    <Service />
    <PopularProducts addToCart={addToCart}/>
    <Testemonials />
    <Gallery />
    </div>
    )
}

export default Home;