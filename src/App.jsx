import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";



function App() {

  return (
    <div className='bg-gray-300'>
    
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Home />}/>
    <Route path='/cart' element={<Cart />}/>
    
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
