import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const openMenu = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
    <header className='bg-white border-b border-gray-400 fixed top-0 z-10 w-full h-[3rem]'>
    <div className='w-full md:max-w-3xl mx-auto pt-2 flex justify-between items-center font-semibold px-2'>
    
    <div>
    <Link to="/">
    <h3 className='text-orange-500 text-2xl font-semibold'>Dev<span className='text-[#0ef]'>Shop</span></h3>
    </Link>
    </div>
    
    <ul className='hidden sm:flex flex-rows justify-between items-center sm:gap-4'>
    <Link to='/'>
    <li>Home</li>
    </Link>
    <Link to='/all-products'>
    <li>All Products</li>
    </Link>
    <li>Mens</li>
    <li>Kids</li>
    </ul>
    
    <div className='flex flex-rows justify-between items-center gap-3'>
    <Link to='/login'>
    <button className='rounded-3xl bg-gray-200 py-1 px-2'>Login</button>
    </Link>
    <Link to='/cart'>
    <p className='cursort-pointer'><FaShoppingCart size='25'/></p>
    </Link>
    <GiHamburgerMenu size='25' onClick={openMenu} className='sm:hidden'/>
    </div>
    </div>
    </header>
    
    {
      isOpen && 
    <ul className='sm:hidden w-2/5 h-screen pl-4 fixed top-0 right-0 z-20 bg-indigo-900'>
    <div className='pt-4 text-white'>
    <RxCross2 size='30' onClick={openMenu}/>
    </div>
    <div className='h-[60%] flex flex-col justify-center gap-y-6 text-white font-medium'>
    <Link to='/'>
    <li>Home</li>
    </Link>
    <Link to='/all-products'>
    <li>Products</li>
    </Link>
    <li>Mens</li>
    <li>Kids</li>
    </div>
    </ul>
    }
    </>
    )
  
}

export default Navbar;