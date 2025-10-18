import PropTypes from 'prop-types';
import Navbar from './Navbar';
import './Layout.css';

/**
 * Layout component wrapping all pages
 * Demonstrates component composition and children props
 */
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2024 React Practice Projects. Built for learning React fundamentals.</p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
