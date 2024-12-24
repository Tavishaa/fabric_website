import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
                <FontAwesomeIcon icon={faPhone} className="text-primary w-6" />
                <div className="ml-4">
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-primary">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary w-6" />
                <div className="ml-4">
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:contact@example.com" className="text-gray-600 hover:text-primary">
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary w-6" />
                <div className="ml-4">
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">
                    123 Business Street<br />
                    City, Country
                  </p>
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