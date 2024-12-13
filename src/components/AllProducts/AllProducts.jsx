import Layout from "../../components/Layout/Layout"
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";


const AllProducts = () => {
// states
const [cate, setCate] = useState([]);
const [products, setProducts] = useState([]);
const [selectProduct, setSelectProduct] = useState("");



useEffect(()=> {
  const getAllCategories = async () => {
    try {
    const res = await axios("https://dummyjson.com/products/categories");
    setCate(res.data);
    } catch (err) {
      console.error("Error fetching categories: " + err);
    }
  }
  
  getAllCategories();
},[]);



useEffect(() => {
  const getProducts = async () => {
    try {
      if(selectProduct) {
      const res = await axios(`https://dummyjson.com/products/category/${selectProduct}`);
      setProducts(res.data.products);
      } else {
        const res = await axios(`https://dummyjson.com/products/category/tops`);
      setProducts(res.data.products);
      }
      
    } catch (error) {
      console.error("Error fetching products: " + error);
    }
  }
  getProducts();
}, [selectProduct]);

  
const filterProducts = (products) => {
  setSelectProduct(products);
}


  return (
    <>
    <Layout>
    <div className='w-5/6 mx-auto mt-[4rem] mb-2 bg-[#008CFF] px-2 py-1 rounded-md flex flex-row justify-between items-center gap-6'>
    <div className='flex flex-row gap-4'>
    <input type='text' placeholder='Search' className='h-[2.3rem] rounded-sm outline-none focus:ring-2 ring-green-500'/>
    <button><FaSearch size='25' className="text-white"/></button>
</div>
    </div>
    
    {/* Product category section */}
    <div className='flex flex-row flex-wrap gap-4 bg-red-400 text-white p-2 border-0 outline-none rounded-sm focus:ring-2 ring-green-500'>
  {cate.filter((item) => !["Home Decoration", "Kitchen Accessories", "Mens Shirts", "Mens Shoes", "Mens Watches", "Mobile Accessories", "Womens Bags", 'Womens Dresses', 'Womens Jewellery', 'Womens Shoes', 'Womens Watches', 'Skin Care', 'Sports Accessories', 'Motorcycle', 'Vehicle', 'Furniture'].includes(item.name)).map((item, index) => (
    <button key={index} className='text-white bg-black' onClick={()=>filterProducts(item.name)}>{item.name}</button>
  ))}
</div>

{/*products render section*/}
<div className='grid grid-cols-3 grid-rows-auto justify-center items-center gap-4'>{
products.map((item, index) =>(
<div key={index} className='rounded-lg border border-[red] bg-white flex flex-col justify-center items-center'>
<img src={item.thumbnail} alt={`${item.title} image`} className='object-fit bg-white rounded-md'/>
<p>Title: {item.title}</p>
<p>Price: {item.price}</p>
<p>Brand: {item.brand}</p>
<p>Rating: {item.rating}</p>
</div>
))
}</div>

    </Layout>
    </>
  )
}



export default AllProducts;
