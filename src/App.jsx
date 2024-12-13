import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";


const App = () => {

  return (
    <div>
    
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Home />}/>
    <Route path='/cart' element={<Cart />}/>
    <Route path='/all-products' element={<AllProducts />}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>

    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
