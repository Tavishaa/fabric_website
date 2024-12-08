import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FabricTech</h3>
            <div className="flex items-center space-x-2 mb-3">
              <MapPin size={20} />
              <p>123 Textile Avenue, Industrial Area, Mumbai, India</p>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <Phone size={20} />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <p>info@fabrictech.com</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-sky-200 transition">Home</a></li>
              <li><a href="#products" className="hover:text-sky-200 transition">Products</a></li>
              <li><a href="#contact" className="hover:text-sky-200 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-sky-200 transition">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-sky-200 transition">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-sky-200 transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sky-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} FabricTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;