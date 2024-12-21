import Hero from "../../components/Hero/Hero";
import Service from "../../components/Service/Service";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Gallery from "../../components/Gallery/Gallery";

const Home = ({ addToCart }) => {
  
  
  
  return (
    <div>
    <Hero />
    <Service />
    <PopularProducts addToCart={addToCart}/>
    <Gallery />
    </div>
    )
}

export default Home;