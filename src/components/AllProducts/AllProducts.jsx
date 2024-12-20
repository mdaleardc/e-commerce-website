import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router-dom"

const AllProducts = ({ addToCart }) => {
  
  const [allProducts, setAllProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios("https://dummyjson.com/products");
        setAllProducts(response.data.products);
        setOriginalProducts(response.data.products);
      } catch (error) {
        console.error("From get all products: " + error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/category-list");
        setProductCategory(res.data);
      } catch (err) {
        console.error("Error fetching categories: " + err);
      }
    };
    getAllCategories();
  }, []);

  const filterProducts = (productCategoryName) => {
    const data = productCategoryName
      ? originalProducts.filter((item) => item.category === productCategoryName)
      : originalProducts;

    setAllProducts(data);
  };
  
  const handleSearchItem = () => {
    
    const searchProduct = originalProducts.filter(item=> {
      return (
        item.title.toLowerCase().includes(searchItem.toLowerCase())
        )
    })
    setAllProducts(searchProduct);
    setSearchItem("");
  }
  
  const productByPrice = () => {
    
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);
    
    const filteredProductByPrice = originalProducts.filter(item=> (
        (!min || item.price >= min) && (!max || item.price <= max)
        ))
    setAllProducts(filteredProductByPrice);
  }
  
  
  
  return (
    <>
      
      <div className="w-full mx-auto mt-[3rem] mb-2 bg-[#c08CFF] px-2 py-1 fixed top-0 z-20">
        <div className="w-full sm:w-4/5 flex flex-row justify-between items-center">
          <div className="w-full flex flex-row justify-center items-center gap-6">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] h-[2.3rem] rounded-sm outline-none focus:ring-2 ring-green-500 pl-4"
              value={searchItem}
              onChange={(e)=>setSearchItem(e.target.value)}
              onKeyDown={(e)=> e.key === "Enter" && handleSearchItem()}/>
            <button onClick={handleSearchItem}>
              <FaSearch size="25" className="text-white" />
            </button>
          </div>

          {/* Product category section */}
          <div className="flex flex-row flex-wrap gap-4 text-white p-2 border-0 outline-none rounded-sm focus:ring-2 ring-green-500">
            <select
              onChange={(e) => filterProducts(e.target.value)}
              className="h-[2rem] bg-black rounded-md outline-none"
            >
              <option value="">Search by category</option>
              {productCategory
                .slice(0, 4)
                .map((item, index) => (
                  <option key={index} className="text-white bg-black" value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className='w-full mx-auto text-center grid grid-cols-3 sm:grid-cols-6 justify-end gap-2 px-2'>
        <input
        type='number'
        placeholder="Mix price"
        className='sm:col-start-4 pl-2 outline-none rounded-sm focus:ring-2 ring-green-500'
        value={minPrice}
        onChange={(e)=>setMinPrice(e.target.value)}/>
        <input
        type='number'
        placeholder='Max price'
        className='pl-2 outline-none rounded-sm focus:ring-2 ring-green-500'
        value={maxPrice}
        onChange={(e)=>setMaxPrice(e.target.value)}/>
        <button className="text-white bg-black rounded-md p-1" onClick={productByPrice}>Filter by price</button>
        </div>
      </div>

      
      <section className="min-w-full mt-[8.5rem] grid grid-cols-2 sm:grid-cols-3 grid-rows-auto justify-center items-center gap-4">
        {loading ? (
          // Loader Animation
          Array(6)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-300 rounded-md p-4 h-[280px] flex flex-col justify-center items-center"
              >
              <div className="w-full h-3/5 bg-gray-400 rounded-md"></div>
                <p className="h-4 bg-gray-400 rounded w-3/4 mt-2"></p>
                <p className="h-4 bg-gray-400 rounded w-1/2 mt-1"></p>
              </div>
            ))
        ) : (
          // Render Products
          allProducts.map((allItem, index) => {
            const truncatedTitle =
              allItem.title.length > 20
                ? `${allItem.title.slice(0, 20)}...`
                : allItem.title;
            const price = Number(allItem.price);
            const convertedPrice = (price * 209.8247).toFixed(0);
            return (
              <motion.div
                key={index}
                className="h-[280px] rounded-lg m-2 bg-gray-200 border-[2px] border-[#A9FFFF] flex flex-col items-center"
                whileHover= {{
                  scale: 1.1,
                  rotate: 1,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" 
                }}
                transition= {{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
              <Link to={`/single-item/${allItem.id}`} className="w-full h-3/5 bg-gray-700 rounded-md">
                <img
                  src={allItem.thumbnail}
                  alt={`${allItem.title} image`}
                  className='mx-auto text-center h-full object-cover'/>
              </Link>
                <p>{truncatedTitle}</p>
                <p className="bg-[#B5CAFF] px-1 font-bold text-[#0082FF] rounded-md">
                  {allItem.rating}
                </p>
                <p className="font-bold">
                  {convertedPrice} <span className="text-[10px] font-bold">MMK</span>
                </p>
                <button
                  className="rounded-md bg-[#008CFF] px-2 text-xl font-medium text-white"
                  onClick={() => addToCart(allItem)}
                >
                  Add to Cart
                </button>
              </motion.div>
            );
          })
        )}
      </section>
    </>
  );
};

export default AllProducts;