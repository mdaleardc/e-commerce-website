import Layout from "../../components/Layout/Layout";
import cartpng from "../../assets/cartpng.jpg"



const Cart = () => {
  
  
  
  return (
    <div className="pt-[3rem]">
    <Layout>
    <div>
    <img src={cartpng} alt='Cart Banner' />
    </div>
    </Layout>
    </div>
    )
}

export default Cart;