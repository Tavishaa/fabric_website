import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const productCategories = [
    { title: 'Non-Woven Products', path: '/products#nonwoven' },
    { title: 'Fusible Interlinings', path: '/products#fusible' },
    { title: 'Shirt Components', path: '/products#shirt' },
    { title: 'Specialty Products', path: '/products#specialty' }
  ];

  return (
    <footer className="bg-primary text-background font-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-secondary/90 transition">
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a href="mailto:contact@example.com" className="hover:text-secondary/90 transition">
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
            <h3 className="text-xl font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary/90 transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-secondary/90 transition">Services</Link></li>
              <li><Link to="/about" className="hover:text-secondary/90 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary/90 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link 
                    to={category.path}
                    className="hover:text-secondary/90 transition"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-secondary transition-colors duration-300 text-2xl"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a 
                href="https://linkedin.com/company/your-company" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-secondary transition-colors duration-300 text-2xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary/20 text-center">
          <p className="font-primary">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;