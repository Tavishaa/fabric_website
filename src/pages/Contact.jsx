import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="py-16 bg-secondary-light min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary-dark text-center mb-12"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-primary-dark mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-primary text-xl" />
                <div className="ml-4">
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+919769171415" className="text-gray-600 hover:text-primary">
                    +91 9769171415
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary text-xl" />
                <div className="ml-4">
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:hrydayenterprises@gmail.com" className="text-gray-600 hover:text-primary">
                    hrydayenterprises@gmail.com
                  </a>
                  <div>
                <a href="mailto:goyaljayesh@yahoo.com" className="text-gray-600 hover:text-primary">
                  goyaljayesh@yahoo.com 
                </a>
                </div>
                </div>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary text-xl" />
                <div className="ml-4">
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">
                    Shop No. 3, Lorik Yadav Premises,<br />
                    Santosh Nagar, Scout Camp Road,<br />
                    Off Link Rd, Behind Cafe City Corner,<br />
                    Behram Baug, Jogeshwari (West),<br />
                    Mumbai - 400102.
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-6">
                <h3 className="font-medium mr-4">Connect with us:</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://wa.me/+919769171415" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors duration-300 text-2xl"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/105148537/admin/dashboard/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors duration-300 text-2xl"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;