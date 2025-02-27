import { FaSquareFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  
  
  
  return (
    <>
    
    <footer className="bg-black pt-[2rem] mx-auto">
    <div className='w-[95%] sm:w-5/6 text-white mx-auto grid grid-cols-2 sm:grid-cols-4 justify-center gap-x-2 gap-y-4 px-2 py-2'>
    <div className=''>
    <h4 className='text-2xl font-medium text-yellow-400 tracking-wider'>Menu</h4>
    <p>Home</p>
    <p>Shop</p>
    <p>Categories</p>
    <p>Best Sellers</p>
    </div>
    
    <div className=''>
    <h4 className='text-2xl font-medium text-yellow-400 tracking-wider'>Company</h4>
    <p>About Us</p>
    <p>Privacy Policy</p>
    <p>Terms & Condition</p>
    </div>
    
    <div className=''>
    <h4 className='text-2xl font-medium text-yellow-400 tracking-wider'>Contact</h4>
    <p>+1 123 456 7890</p>
    <p>123 E-commerce St., City</p>
    <p>Live Chat</p>
    <p className='hidden sm:block'>support@example.com</p>
    </div>
    
    <div className=''>
    <h4 className='text-2xl font-medium text-yellow-400 tracking-wider'>Tech Support</h4>
    <p>FAQs</p>
    <p>Return Policy</p>
    <p>Shipping Info</p>
    <p>Technical Issue</p>
    </div>
    
    </div>
    
    <div className='bg-blue-900 flex flex-rows justify-between items-center text-white px-4 py-2'>
    <p className='flex flex-rows'>Copyrigth &copy; Mohammed Ismail. All rights reserved</p>
    <p className='flex flex-rows justify-between items-center gap-2'><FaSquareFacebook /> <FaLinkedin /> <FaSquareXTwitter /></p>
    </div> 
    </footer>
    
    </>
    )
  
}

export default Footer;