import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const SingleProduct = () => {

const {id} = useParams();

const [singleItem, setSingleItem] = useState([])


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
		<div className='mt-[3rem] py-[1rem] px-2 text-white bg-gray-500'>
		{
		 
		    <div key={singleItem.id} className='w-full grid grid-cols-2 justify-center item-center gap-4'>
		    <div className='w-full h-full bg-gray-900 h-[300px]'>
		    <img src={singleItem.images} alt={`${singleItem.title} image`}  className='w-full h-full object-cover'/>
		    </div>
		    <div className='flex flex-col gap-2 align-middle'>
		    <p><span>Brand:</span> <span>{singleItem.brand}</span></p>
		    <p><span>ProductName:</span> <span>{singleItem.title}</span></p>
		    <p className='text-ms'>{singleItem.description}</p>
		    <p><span>Price:</span> <span>{singleItem.price}</span></p>
		    <p><span>Stock:</span> <span>{singleItem.availabilityStatus}</span></p>
		    <p><span>EstimatedDelivery:</span> <span>{singleItem.shippingInformation}</span></p>
		    <p><span>Rating:</span> <span>{singleItem.rating}</span></p>
		    </div>
		    </div>
		    
		}
		</div>
		</>
	)
}

export default SingleProduct;
