import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/Login/Login";


const App = () => {

  return (
    <div>
    
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Home />}/>
    <Route path='/cart' element={<Cart />}/>
    <Route path='/all-products' element={<AllProducts />}/>
    <Route path='/login' element={<Login/>}/>

    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
