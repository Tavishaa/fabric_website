import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const productCategories = [
    { title: 'Non-Woven Products', path: '/products#nonwoven' },
    { title: 'Fusible Interlinings', path: '/products#fusible' },
    { title: 'Shirt Components', path: '/products#shirt' },
    { title: 'Specialty Products', path: '/products#specialty' }
  ];

  return (
    <footer className="bg-primary-dark text-white font-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-medium mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-secondary transition">
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a href="mailto:contact@example.com" className="hover:text-secondary transition">
                  contact@example.com
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                123 Business Street, City, Country
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition">Services</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link 
                    to={category.path}
                    className="hover:text-secondary transition"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary text-center">
          <p className="font-primary">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;