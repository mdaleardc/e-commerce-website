import Layout from "../../components/Layout/Layout"
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";


const AllProducts = () => {

const [allProducts, setAllProducts] = useState([]);
const [originalProducts, setOriginalProducts] = useState([]);
const [productCategory, setProductCategory] = useState([]);
const [selectProduct, setSelectProduct] = useState("");
console.log(selectProduct);

useEffect(()=> {
  const getAllProducts = async () => {
    try {
      const response = await axios("https://dummyjson.com/products");
      setAllProducts(response.data.products);
      setOriginalProducts(response.data.products);
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
    setProductCategory(res.data);
    } catch (err) {
      console.error("Error fetching categories: " + err);
    }
  }
  
  getAllCategories();
},[]);

const filterProducts = (productCategoryName) => {
  setSelectProduct(productCategoryName);
  
  const data = productCategoryName ? originalProducts.filter(item => item.category === productCategoryName) : originalProducts;
  
  setAllProducts(data)
  
}

  return (
    <>
    <Layout>
    <div className='w-full mx-auto mt-[3rem] mb-2 bg-[#008CFF] px-2 py-1 fixed top-0'>
    <div className='w-full sm:w-4/5 flex flex-row justify-between items-center'>
    <div className='w-full flex flex-row justify-center items-center gap-6'>
    <input type='text' placeholder='Search' className='w-[200px] h-[2.3rem] rounded-sm outline-none focus:ring-2 ring-green-500 pl-4'/>
    <button><FaSearch size='25' className="text-white"/></button>
</div>
    
    {/* Product category section */}
    <div className='flex flex-row flex-wrap gap-4 text-white p-2 border-0 outline-none rounded-sm focus:ring-2 ring-green-500'>
    <select onChange={(e)=>filterProducts(e.target.value)} className='h-[2rem] bg-black rounded-md outline-none'>
    <option>Search by category</option>
  {productCategory.filter((categoryName) => !["home-decoration", "kitchen-accessories", "mens shirts", "mens-shoes", "mens-watches", "mobile-accessories", "womens-bags", 'womens-dresses', 'womens-jewellery', 'womens-shoes', 'womens-watches', 'sports-accessories', 'motorcycle', 'vehicle'].includes(categoryName)).map((item, index) => (
    <option key={index} className='text-white bg-black' value={item}>{item}</option>
  ))}
  </select>
</div>
</div>
    </div>

<section  className='min-w-full mt-[7rem] grid grid-cols-2 sm:grid-cols-3 grid-rows-auto justify-center items-center gap-4'>
{
  allProducts.map((allItem, index) => {
  
  const truncatedTitle = allItem.title.length > 20 ? `${allItem.title.slice(0, 20)}...` : allItem.title;
  return (
  <div key={index} className='h-[280px] rounded-lg m-2 bg-gray-200 border-[2px] border-[#A9FFFF] flex flex-col justify-center items-center'>
<img src={allItem.thumbnail} alt={`${allItem.title} image`} className='w-full h-3/5 object-fit rounded-md'/>
<p>{truncatedTitle}</p>
<p>Price: {allItem.price}</p>
<p>Rating: {allItem.rating}</p>
<button className='rounded-md bg-[#00B1FF] px-4 py-1 text-xl font-semibold text-white'>Add to Cart</button>
</div>
  )})
}
</section>
    </Layout>
    </>
  )
}



export default AllProducts;
