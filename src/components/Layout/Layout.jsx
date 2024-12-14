import PropTypes from 'prop-types'; // Import PropTypes
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="contents">
        { children }
      </div>
      <Footer />
    </div>
  );
};

// Add PropTypes validation
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Validates that children is a React node and is required
};

export default Layout;