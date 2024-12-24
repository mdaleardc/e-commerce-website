import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion } from "motion/react";
import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
import { toast } from "react-hot-toast";

const Navbar = ({ cartCount, userName }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const openMenu = () => {
    setIsOpen(!isOpen);
  }
  
  
  const handleLogOut = () => {
    signOut(auth).then(()=>{
      toast.success("Signed out!")
    }).then((err)=>{
      toast.error(err.message);
    })
  }
  
  
  return (
    <>
    <header className='bg-white border-b border-gray-400 fixed top-0 z-10 w-full h-[3rem]'>
    <div className='w-full md:max-w-3xl mx-auto pt-2 flex flex-row justify-between items-center font-semibold px-2'>
    
    <div>
    <Link to="/">
    <h3 className='text-orange-500 text-2xl font-semibold'>Dev<span className='text-[#0ef]'>Shop</span></h3>
    </Link>
    </div>
    
    <motion.ul className='hidden sm:flex flex-row justify-between items-center sm:gap-4'
    whileHover={{
      
    }}>
    <Link to='/'>
    <li>Home</li>
    </Link>
    <Link to='/all-products'>
    <li>All Products</li>
    </Link>
    <Link to='/about'>
    <li>About</li>
    </Link>
    <Link to='/contact'>
    <li>Contact</li>
    </Link>
    </motion.ul>
    
    <div className='flex flex-row justify-between items-center gap-3'>
    {
    userName ? (
    <>
    <button className='rounded-3xl bg-gray-200 py-1 px-2' onClick={handleLogOut}>Log Out</button>
    <span>{userName}</span>
    </>
    ) : (
    <Link to='/login'>
    <button className='rounded-3xl bg-gray-200 py-1 px-2'>Login</button>
    </Link>
    )
    }
    <Link to='/cart'>
    <p className='cursort-pointer relative'><span className='absolute top-[-30%] left-[35%] z-[-1] text-[#FF0055]'>{cartCount ? cartCount : ""}</span><FaShoppingCart size='25' className='opacity-[0.6]'/></p>
    </Link>
    <GiHamburgerMenu size='25' onClick={openMenu} className='sm:hidden'/>
    </div>
    </div>
    </header>
    
    {
      isOpen && 
    <ul className='sm:hidden w-2/5 h-screen pl-4 fixed top-0 right-0 z-50 bg-indigo-900'>
    <div className='pt-4 text-white'>
    <RxCross2 size='30' onClick={openMenu}/>
    </div>
    <div className='h-[60%] flex flex-col justify-center gap-y-6 text-white font-medium'>
    <Link to='/' onClick={openMenu}>
    <li>Home</li>
    </Link>
    <Link to='/all-products' onClick={openMenu}>
    <li>Products</li>
    </Link>
    <Link to='/about' onClick={openMenu}>
    <li>About</li>
    </Link>
    <Link to='/contact' onClick={openMenu}>
    <li>Contact</li>
    </Link>
    </div>
    </ul>
    }
    </>
    )
  
}

export default Navbar;
