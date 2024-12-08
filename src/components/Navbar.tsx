import { Menu, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <>
      <div className="bg-sky-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="tel:+919876543210" className="flex items-center space-x-2 hover:text-sky-200">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@fabrictech.com" className="flex items-center space-x-2 hover:text-sky-200">
              <Mail size={16} />
              <span>info@fabrictech.com</span>
            </a>
          </div>
        </div>
      </div>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-sky-600 text-white p-4 sticky top-0 z-50"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">FabricTech</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-sky-200 transition">Home</Link>
            <Link to="/about" className="hover:text-sky-200 transition">About</Link>
            <Link to="/products" className="hover:text-sky-200 transition">Products</Link>
            <Link to="/contact" className="hover:text-sky-200 transition">Contact</Link>
          </div>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;