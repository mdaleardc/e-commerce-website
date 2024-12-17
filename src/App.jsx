import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";


const App = () => {
  
  
  const [cart, setCart] = useState([]);
  
  const [promoCode, setPromoCode] = useState('');
  
  const [discount, setDiscount] = useState(0);
  
  const [invalidPromo, setInvalidPromo] = useState("");
  
  const [promoApplied, setPromoApplied] = useState(false);
  
  
  
  const addToCart = (product) => {
    
    const isProductExist = cart.find((findItem) => findItem.id === product.id);
    
    if(isProductExist) {
      
      const updateCart = cart.map((item) =>(
          item.id === product.id ? {...item, quantity:item.quantity+1}:item
          ))
      setCart(updateCart);
    } else {
      
    setCart([...cart, {...product, quantity: 1}]);
    setCartCount(cart.length);
    }
  }
  
  
  const handleInc = (id) => {
    
    const incQty = cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item);
    setCart(incQty);
  }
  
  
  const handleDec = (id) => {
    
    const decQty = cart.map(item => item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item);
    setCart(decQty)
  }
  
  
  const handleRemove = (id) => {
    
    const isConfirm = window.confirm("Remove?");
    
    if(isConfirm) {
      const updateItem = cart.filter(fltItem => fltItem.id !== id);
    setCart(updateItem);
    }
  }
  
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0) - discount;
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  
  const applyPromoCode = () => {
    if(promoApplied) {
      setInvalidPromo("The promo already applied!");
      return;
    }
    
    if (promoCode === "promo10") {
      setDiscount(totalCost * 0.1);
      setPromoCode("");
      setInvalidPromo('');
      setPromoApplied(true);
    } else {
     
      setInvalidPromo('Invalid promo code!');
      setPromoCode("");
    }
    
  }
  
  
  return (
    <div>
    
    <BrowserRouter>
    <Navbar cartCount={cartCount}/>
    <Routes>
    
    <Route path='/' element={<Home />}/>
    <Route path='/cart' element={<Cart cart={cart} handleDec={handleDec} handleInc={handleInc} handleRemove={handleRemove} totalCost={totalCost.toFixed(2)} setPromoCode={setPromoCode} applyPromoCode={applyPromoCode} promoCode={promoCode} invalidPromo={invalidPromo} promoApplied={promoApplied}/>}/>
    <Route path='/all-products' element={<AllProducts addToCart={addToCart} />}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>

    </Routes>
    <Footer />
    </BrowserRouter>
    
    </div>
  )
}

export default App
