import Layout from "../../components/Layout/Layout";
import cartpng from "../../assets/cartpng.jpg"
import { RxCross2 } from "react-icons/rx";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";


const Cart = ({ cart }) => {
  
  
  
  return (
    <div className="pt-[3rem]">
    <Layout>
    <div>
    <img src={cartpng} alt='Cart Banner' />
    
    
<section className="bg-white py-8 dark:bg-gray-900 md:py-10">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 text-white grid grid-cols-1 md:grid-cols-7 gap-2">
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
      
        return (
        <div key={cartItem.id} className='grid grid-cols-12 justify-center items-center border border-[blue] p-2 rounded'>
      <div className='col-span-4 grid grid-cols-2'>
      <img src={cartItem.thumbnail} alt='product thumbnail' className='w-[60px] h-[60px]'/>
        <div>
        <p>{cartItem.title}</p>
        <p>{cartItem.category}</p>
        <button className='flex flex-row items-center justify-center gap-2 text-red-400'><RxCross2 /> Remove</button>
        </div>
      </div>
      <div className='col-span-8 grid grid-cols-2 justify-center items-center'>
        <div className='mx-auto flex flex-row justify-between items-center gap-4'>
          <button>-</button>
          <p>{cartItem.quantity}</p>
          <button>+</button>
        </div>
            <div className='flex flex-row justify-between items-center gap-4'>
              <p>{cartItem.price}</p>
              <p>{cartItem.price * cartItem.quantity}</p>
            </div>
      </div>
    </div>
        )
      })
    }
    
      <button className='text-left flex flex-row gap-2  text-blue-400'><HiMiniArrowUturnLeft size='30' className=' text-[gold]'/> Continue Shopping</button>
  </div>
  </div>
  
  {/*Order Summary*/}
  
  <div className='col-span-2'>
    <h2 className='w-fit mx-auto text-2xl font-semibold text-center border-b'>Order Summary</h2>
    <div className='flex flex-row justify-between p-2'>
      <h4>Total</h4>
      <h4>$567</h4>
    </div>
    
    <div>
    <h3 className='w-fit mx-auto text-xl font-semibold text-center text-blue-400'>Shipping</h3>
    <div className='flex flex-col items-center gap-2'>
      <p>Standard Shipping _ $10</p>
      <h4>Promo Code</h4>
      <input type="number" placeholder="Enter your code" className='w-4/5 outline-none rounded'/>
      <button type="button" className='bg-[#00ff33] p-1 rounded-3xl w-4/5 text-2xl font-medium'>Apply</button>
      <div className='flex flex-row justify-between items-center w-4/5'>
        <p>Total Cost</p>
        <p>$0.00</p>
      </div>
        <button className='bg-[#00ffff] p-1 rounded-3xl w-4/5 text-2xl font-medium'>Checkout</button>
    </div>
  </div>
  </div>
  </div>
</section>
    
    
    
    </div>
    </Layout>
    </div>
    )
}

export default Cart;