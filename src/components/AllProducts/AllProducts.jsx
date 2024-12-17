import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { motion } from "motion/react";

const AllProducts = ({ addToCart }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      {/* Search and Filter Section */}
      <div className="w-full mx-auto mt-[3rem] mb-2 bg-[#c08CFF] px-2 py-1 fixed top-0 z-50">
        <div className="w-full sm:w-4/5 flex flex-row justify-between items-center">
          <div className="w-full flex flex-row justify-center items-center gap-6">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] h-[2.3rem] rounded-sm outline-none focus:ring-2 ring-green-500 pl-4"
            />
            <button>
              <FaSearch size="25" className="text-white" />
            </button>
          </div>

          {/* Product category section */}
          <div className="flex flex-row flex-wrap gap-4 text-white p-2 border-0 outline-none rounded-sm focus:ring-2 ring-green-500">
            <select
              onChange={(e) => filterProducts(e.target.value)}
              className="h-[2rem] bg-black rounded-md outline-none"
            >
              <option>Search by category</option>
              {productCategory
                .filter(
                  (categoryName) =>
                    ![
                      "home-decoration",
                      "kitchen-accessories",
                      "mens shirts",
                      "mens-shoes",
                      "mens-watches",
                      "mobile-accessories",
                      "womens-bags",
                      "womens-dresses",
                      "womens-jewellery",
                      "womens-shoes",
                      "womens-watches",
                      "sports-accessories",
                      "motorcycle",
                      "vehicle",
                    ].includes(categoryName)
                )
                .map((item, index) => (
                  <option key={index} className="text-white bg-black" value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      
      <section className="min-w-full mt-[7rem] grid grid-cols-2 sm:grid-cols-3 grid-rows-auto justify-center items-center gap-4">
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
                className="h-[280px] rounded-lg m-2 bg-gray-200 border-[2px] border-[#A9FFFF] flex flex-col justify-center items-center"
                whileHover= {{
                  scale: 1.1,
                  rotate: 1,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0. 0.2)" 
                }}
                transition= {{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <img
                  src={allItem.thumbnail}
                  alt={`${allItem.title} image`}
                  className="w-full h-3/5 object-cover rounded-md"
                />
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