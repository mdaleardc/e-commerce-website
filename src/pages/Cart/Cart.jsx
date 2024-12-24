import cartpng from "../../assets/cartpng.jpg"
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";


const Cart = ({ cart, handleDec, handleInc, handleRemove, totalCost, applyPromoCode, setPromoCode, promoCode, invalidPromo, promoApplied }) => {
  const navigate = useNavigate();
  
  return (
    <div className="pt-[3rem]">
    <div>
    <img src={cartpng} alt='Cart Banner' className='w-full h-[200px] object-cover'/>
    
    
<section className="bg-white text-black py-8 md:py-10">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 grid grid-cols-1 md:grid-cols-7 gap-2 justify-center items-center">
    <div className='col-span-5'>
  <div className='flex flex-row justify-between items-center border-b-[2px] border-gray-400 text-2xl font-medium'>
    <h2>Shopping Cart</h2>
    <h2>{cart.length} Items</h2>
  </div>
  <div className='w-full grid grid-rows gap-4 '>
    <div className='w-full flex flex-row justify-between items-center border-b py-4 text-xl font-semibold'>
      <h3>Product Details</h3>
      <h3>Quantity</h3>
      <h3>Price</h3>
      <h3>Total</h3>
    </div>
    
    {
      cart.map((cartItem) => {
      
      const priceFixedToDecPoint = (cartItem.price * 209.8247).toFixed(2)
      
        return (
        <div key={cartItem.id} className='text-black bg-gray-300 grid grid-cols-12 justify-center items-center border p-2 rounded'>
      <div className='col-span-4 grid grid-cols-2'>
      <img src={cartItem.thumbnail} alt='product thumbnail' className='w-[60px] h-[60px]'/>
        <div>
        <p>{cartItem.title}</p>
        <p>{cartItem.category}</p>
        <button className='flex flex-row items-center justify-center gap-2 text-red-400' onClick={()=>handleRemove(cartItem.id)} aria-label="Remove item"><RxCross2 /> Remove</button>
        </div>
      </div>
      <div className='col-span-8 grid grid-cols-2 justify-center items-center'>
        <div className='mx-auto flex flex-row justify-between items-center gap-4'>
          <button aria-label="Decrease quantity" onClick={()=>handleDec(cartItem.id)}>-</button>
          <p>{cartItem.quantity}</p>
          <button aria-label="Increase quantity" onClick={()=>handleInc(cartItem.id)}>+</button>
        </div>
            <div className='flex flex-row justify-between items-center gap-4'>
              <p>{priceFixedToDecPoint} <span className='text-[10px] font-bold'>MMK</span></p>
              <p>{(priceFixedToDecPoint * cartItem.quantity).toFixed(2)} <span className='text-[10px] font-bold'>MMK</span></p>
            </div>
      </div>
    </div>
        )
      })
    }
      <button className='text-left flex flex-row items-center gap-2  text-blue-400' onClick={()=>navigate("/all-products")}><FaArrowLeft size='30' className=' text-[blue]' aria-label="Continue to hopping"/> Continue Shopping</button>
  </div>
  </div>
  
  {/*Order Summary*/}
  
  
  <div className='h-fit mx-auto text-center col-span-2 rounded-md text-black p-2 border-[1px] border-red-800  bg-gray-300'>
    <h2 className='w-fit mx-auto text-2xl font-semibold text-center border-b'>Order Summary</h2>
    <div className='flex flex-row justify-between p-2'>
      <h4>ITEMS {cart.length}</h4>
      <h4>{ totalCost }</h4>
    </div>
    
    <div>
    <h3 className='w-fit mx-auto text-xl font-semibold text-center text-blue-400 p-2'>Shipping</h3>
    <div className='flex flex-col gap-1'>
      <p>Standard Shipping _ $10</p>
      <h4>Promo Code</h4>
      <input type="text" placeholder="Enter your code" className='w-4/5 h-[2rem] pl-2 outline-none rounded' value={promoCode} onChange={(e)=>setPromoCode(e.target.value)}/>
        <span className={`text-sm ${invalidPromo ? "text-[#ee0000]" : "text-green-600"}`}>{invalidPromo || (promoApplied && "Applied promo code successfully!")}</span>
      <button type="button" className='text-white bg-[#ff1234] px-1 rounded-md w-2/5 text-xl font-medium' onClick={applyPromoCode}>Apply</button>
      <div className='flex flex-row justify-between items-center w-4/5'>
        <p>Total Cost</p>
        <p>{cart.length ? (Number(totalCost) + 10).toFixed(2) :  0.00}</p>
      </div>
        <button className='text-white bg-[green] mx-auto px-1 rounded-md w-3/5 text-xl font-medium'>Checkout</button>
    </div>
  </div>
  </div>
  
  </div>
</section>
    
    
    
    </div>
    <Modal />
    </div>
    )
}

export default Cart;