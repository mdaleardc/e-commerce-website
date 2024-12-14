import Layout from "../../components/Layout/Layout"
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";


const AllProducts = () => {
// states
const [allProducts, setAllProducts] = useState([]);
const [cate, setCate] = useState([]);
const [products, setProducts] = useState([]);
const [selectProduct, setSelectProduct] = useState("");
const [showProduct, setShowProduct] = useState(false);

useEffect(()=> {
  const getAllProducts = async () => {
    try {
      const response = await axios("https://dummyjson.com/products");
      setAllProducts(response.data.products);
    } catch (error) {
      console.error("From get all products: " + error)
    }
  }
  getAllProducts();
},[])

useEffect(()=> {
  const getAllCategories = async () => {
    try {
    const res = await axios("https://dummyjson.com/products/category-list");
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
        const res = await axios(`https://dummyjson.com/products/category/${allProducts}`);
      setProducts(res.data.products);
      }
      
    } catch (error) {
      console.error("Error fetching products: " + error);
    }
  }
  getProducts();
}, [allProducts, selectProduct]);

  
const filterProducts = (products) => {
  setSelectProduct(products);
  setShowProduct(true);
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
    <select onChange={(e)=>filterProducts(e.target.value)} className='h-[2rem] bg-black rounded-md outline-none'>
    <option>Search by category</option>
  {cate.filter((item) => !["Home Decoration", "Kitchen Accessories", "Mens Shirts", "Mens Shoes", "Mens Watches", "Mobile Accessories", "Womens Bags", 'Womens Dresses', 'Womens Jewellery', 'Womens Shoes', 'Womens Watches', 'Skin Care', 'Sports Accessories', 'Motorcycle', 'Vehicle', 'Furniture'].includes(item)).map((item, index) => (
    <option key={index} className='text-white bg-black' value={item}>{item}</option>
  ))}
  </select>
</div>

{
showProduct ? 
<div className='grid grid-cols-2 md:grid-cols-3 grid-rows-auto justify-center items-center gap-4'>
{
products.map((item, index) =>(
<div key={index} className='rounded-lg border border-[red] bg-white flex flex-col justify-center items-center'>
<img src={item.thumbnail} alt={`${item.title} image`} className='object-fit bg-white rounded-md'/>
<p>Title: {item.title}</p>
<p>Price: {item.price}</p>
<p>Rating: {item.rating}</p>
</div>
))
}</div>
:
<section  className='grid grid-cols-2 sm:grid-cols-3 grid-rows-auto justify-center items-center gap-4'>
{
  allProducts.map((allItem, index) =>(
  <div key={index} className='rounded-lg border border-[red] bg-white flex flex-col justify-center items-center'>
<img src={allItem.thumbnail} alt={`${allItem.title} image`} className='object-fit bg-white rounded-md'/>
<p>Title: {allItem.title}</p>
<p>Price: {allItem.price}</p>
<p>Rating: {allItem.rating}</p>
</div>
  ))
}
</section>
}

    </Layout>
    </>
  )
}



export default AllProducts;
