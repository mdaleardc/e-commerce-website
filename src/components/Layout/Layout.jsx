import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const Layout = ({ children }) => {
  
  
  
  return (
    <div>
    <Navbar />
    
    <div className='contents'>
    { children }
    </div>
    
    <Footer />
    </div>
    )
}

export default Layout;