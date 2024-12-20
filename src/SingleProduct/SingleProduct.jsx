import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import toast from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";


const SingleProduct = ({addToCart}) => {

const {id} = useParams();

const [singleItem, setSingleItem] = useState({})
console.log(singleItem);

useEffect(()=>{
  const singleProduct = async () => {
    try {
      const response = await axios(`https://dummyjson.com/products/${id}`);
      setSingleItem(response.data);
    } catch (err) {
      console.error("From Single Product:" + err);
    }
  }
  singleProduct();
},[id]);

		
	return(
		<>
		<div className='mt-[3rem] py-[1rem] px-2 text-black'>
		<Link to="/all-products">
		<span className='block p-4 text-[#FF2000]'><RxCross2 size='30'/></span>
		</Link>
		    <div key={singleItem.id} className='w-full grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-4'>
		    <div className='w-full h-full bg-gray-900 h-[300px] rounded-md text-white'>
		    <img src={singleItem.images?.[0]} alt={`${singleItem.title} image`}  className='w-full h-[300px] object-cover rounded-sm'/>
		    </div>
		    <div className='flex flex-col gap-2 align-middle'>
		    <p className='text-gray-500 uppercase text-xs font-medium tracking-wider'>{singleItem.brand}</p>
		    <p className='text-xl font-medium'>{singleItem.title}</p>
		    <p className='text-sm'>{singleItem.description}</p>
        <p><span className='text-gray-500'>Price:</span> <span>${singleItem.price}</span></p>
        <p><span className='text-gray-500'>Stock:</span> <span>{singleItem.availabilityStatus}</span></p>
        <p><span className='text-gray-500'>Shipping:</span> <span>{singleItem.shippingInformation}</span></p>
        <p><span className='text-gray-500'>Rating:</span> <span  className="bg-[#B5CAFF] px-1 font-bold text-[#0082FF] rounded-md">{singleItem.rating}</span></p>
		    <div className='flex flex-row items-center gap-8'>
		    <button className="rounded-md bg-[#008CFF] px-2 text-xl font-medium text-white"
		    onClick={()=> {
		    addToCart(singleItem)
		    toast.success("Product added to cart!");
		    }}>Add to Cart</button>
		    <span className='#D6005B'><FaRegHeart size='25'/></span>
		    </div>
		    </div>
		    </div>
		</div>
		</>
	)
}

export default SingleProduct;
