import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const Layout = ({ children }) => {
  
  
  
  return (
    <div className='bg-green-400'>
    <Navbar />
    
    <div className='contents'>
    { children }
    </div>
    
    <Footer />
    </div>
    )
}

export default Layout;