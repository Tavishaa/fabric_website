import { motion } from 'framer-motion';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faIndustry, 
  faShip, 
  faTruckFast, 
  faFlask,
  faHandshake,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  const services = [
    {
      icon: faIndustry,
      title: 'Manufacturing',
      description: 'State-of-the-art manufacturing facilities producing high-quality interlining products.'
    },
    {
      icon: faShip,
      title: 'Import & Export',
      description: 'Global sourcing and distribution of premium interlining materials.'
    },
    {
      icon: faTruckFast,
      title: 'Quick Delivery',
      description: 'Efficient logistics ensuring timely delivery to customers worldwide.'
    },
    {
      icon: faFlask,
      title: 'Quality Testing',
      description: 'Comprehensive testing facilities ensuring product quality and consistency.'
    },
    {
      icon: faHandshake,
      title: 'Custom Solutions',
      description: 'Tailored interlining solutions meeting specific customer requirements.'
    },
    {
      icon: faCertificate,
      title: 'Quality Certification',
      description: 'International quality certifications ensuring product excellence.'
    }
  ];

  return (
    <div className="py-16 bg-secondary-light min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary-dark text-center mb-12"
        >
          Our Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInWhenVisible key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-primary text-4xl mb-4">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible>
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary-dark mb-6">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Experience & Expertise</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Over 20 years of industry experience</li>
                  <li>Expert technical support team</li>
                  <li>Comprehensive product knowledge</li>
                  <li>International quality standards</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Customer Benefits</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Competitive pricing</li>
                  <li>Quick turnaround time</li>
                  <li>Flexible MOQ requirements</li>
                  <li>Reliable after-sales support</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default Services;