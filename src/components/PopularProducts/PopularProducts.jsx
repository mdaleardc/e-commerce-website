import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";




const PopularProducts = ({ addToCart }) => {
  
  const [popularItem, setPopularItem] = useState([]);
  
  useEffect(()=>{
    const fecthPopularProducts = async () => {
      try {
        const response = await axios("https://dummyjson.com/products/category/laptops")
        setPopularItem(response.data.products);
      } catch (err) {
        return toast.error(err.message);
      }
    }
    fecthPopularProducts();
  }, [])
  
  return (
    <>
    <div>
<section className="text-gray-600 body-font pb-10">
  <div className="container px-5 mx-auto">
  <h2 className='text-2xl font-medium tracking-widest text-center title-font py-10'>Popular Products</h2> 
    <div className="mx-auto text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6 w-full">
    {
    popularItem.map((item)=>{
      
      return (
      <div className="mx-auto w-full border-[2px] border-gray-300 rounded-md min-h-[200px] h-[330px] overflow-hidden" key={item.id}>
        <div className="rounded overflow-hidden w-full h-3/5">
        <Link to={`/single-item/${item.id}`}>
          <img alt="ecommerce" className="w-full h-full mx-auto object-cover block overflow-hidden bg-[#555555]" src={item.thumbnail}/>
        </Link>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
          <div className='flex flex-row justify-between px-2'>
          <p className="mt-1">${item.price}</p>
          <button
                  className="rounded-md bg-[#008CFF] px-2 font-medium text-white"
                  onClick={() => {
                  addToCart(item)
                  toast.success("Product added to cart!");
                  }}
                >
                  Add to Cart
                </button>
          </div>
        </div>
      </div>
      )
    })
      }
    </div>
  </div>
</section>
    </div>
    </>
    )
}

export default PopularProducts;