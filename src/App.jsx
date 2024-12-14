import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";


const App = () => {
  
  
  const [cart, setCart] = useState([]);
  
  
  const addToCart = (product) => {
    
    const isProductExist = cart.find((findItem) => findItem.id === product.id);
    
    if(isProductExist) {
      
      const updateCart = cart.map((item) =>(
          item.id === product.id ? {...item, quantity:item.quantity+1}:item
          ))
      setCart(updateCart);
    } else {
      
    setCart([...cart, {...product, quantity: 1}]);
    
    }
    
  }
  
  
  return (
    <div>
    
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Home />}/>
    <Route path='/cart' element={<Cart cart={cart}/>}/>
    <Route path='/all-products' element={<AllProducts addToCart={addToCart}/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>

    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
