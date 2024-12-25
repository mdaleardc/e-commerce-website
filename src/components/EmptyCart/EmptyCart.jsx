import emptyCartPng from "../../assets/empty-cart.png";
import { Link } from "react-router-dom";


const EmptyCart = () => {
  
  
  return (
    <div className='w-full'>
    <div className='w-3/5 mx-auto flex flex-col justify-center items-center rounded bg-[#D5D5D5] m-4 p-4'>
    <img src={emptyCartPng} className='w-[200px] h-[150px]'/>
    <h3>Is your cart empty?</h3>
    <Link to='/'>
    <button className='w-full px-2 bg-[#FF3323] text-white rounded-md hover:bg-[#e47e00] transition-all duration-200'>Go to Home</button>
    </Link>
    </div>
    </div>
    )
}


export default EmptyCart;