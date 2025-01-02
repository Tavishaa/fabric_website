import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const productCategories = [
    { title: 'Non-Woven Products', items: products.filter(p => p.category.includes('nonwoven')) },
    { title: 'Fusible Products', items: products.filter(p => p.category.includes('fusible')) },
    { title: 'Shirt Components', items: products.filter(p => ['shirt-collars', 'shirt-cuffs', 'cuff-collar'].includes(p.category)) },
    { title: 'Specialty Products', items: products.filter(p => ['patti-rolls', 'belt-rolls'].includes(p.category)) }
  ];

  return (
    <header className="bg-primary text-background shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img src="/logo.png" alt="Company Logo" className="h-12" />
          </motion.div>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-background hover:text-gold transition-colors duration-300">Home</Link>
            
            <div className="relative">
              <button
                className="text-background hover:text-gold transition-colors duration-300 flex items-center"
                onMouseEnter={() => setIsProductsOpen(true)}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-64 bg-primary-light rounded-lg shadow-xl py-2"
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    {productCategories.map((category, index) => (
                      <div key={index} className="px-4 py-2">
                        <h3 className="text-sm font-semibold text-gold mb-1">{category.title}</h3>
                        {category.items.map(product => (
                          <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="block text-sm text-background hover:text-gold hover:bg-primary-dark px-2 py-1 rounded transition-colors duration-300"
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link to="/about" className="text-background hover:text-gold transition-colors duration-300">About Us</Link>
            <Link to="/services" className="text-background hover:text-gold transition-colors duration-300">Services</Link>
            <Link to="/contact" className="text-background hover:text-gold transition-colors duration-300">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="text-gold hover:text-secondary-light transition-colors duration-300">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="mailto:contact@example.com" className="text-gold hover:text-secondary-light transition-colors duration-300">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <div className="border-l border-background/20 h-6 mx-2"></div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-secondary-light transition-colors duration-300">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-secondary-light transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-secondary-light transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;