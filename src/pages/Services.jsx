import { motion } from 'framer-motion';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faIndustry, 
  faShip, 
  faTruckFast, 
  faFlask,
  faHandshake,
  faCertificate,
  faTools,
  faChartLine,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  const mainServices = [
    {
      icon: faIndustry,
      title: 'Manufacturing Excellence',
      description: 'State-of-the-art manufacturing facilities producing high-quality interlining products with precision and consistency.'
    },
    {
      icon: faShip,
      title: 'Global Supply Chain',
      description: 'Comprehensive import & export services with established networks across major textile markets worldwide.'
    },
    {
      icon: faTruckFast,
      title: 'Rapid Delivery',
      description: 'Efficient logistics ensuring timely delivery to customers worldwide with real-time tracking capabilities.'
    }
  ];

  const additionalServices = [
    {
      icon: faFlask,
      title: 'Quality Testing',
      description: 'Comprehensive testing facilities ensuring product quality and consistency.',
      features: ['Material strength testing', 'Wash resistance analysis', 'Color fastness verification', 'Adhesion testing']
    },
    {
      icon: faHandshake,
      title: 'Custom Solutions',
      description: 'Tailored interlining solutions meeting specific customer requirements.',
      features: ['Custom weight options', 'Special finishes', 'Bespoke adhesive formulations', 'Unique material blends']
    },
    {
      icon: faCertificate,
      title: 'Quality Certification',
      description: 'International quality certifications ensuring product excellence.',
      features: ['ISO 9001:2015', 'OEKO-TEX® Standard 100', 'Global compliance', 'Regular audits']
    }
  ];

  const supportServices = [
    {
      icon: faTools,
      title: 'Technical Support',
      description: 'Expert technical assistance for optimal product implementation.'
    },
    {
      icon: faChartLine,
      title: 'Market Analysis',
      description: 'Regular market insights and trend analysis for informed decisions.'
    },
    {
      icon: faGlobe,
      title: 'Global Reach',
      description: 'Worldwide distribution network ensuring product availability.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Comprehensive solutions for all your interlining needs, backed by decades of expertise and innovation.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <FadeInWhenVisible key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-secondary text-4xl mb-4">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-primary-light text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Specialized Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <FadeInWhenVisible key={service.title} delay={index * 0.1}>
                <div className="bg-primary rounded-lg p-8">
                  <div className="text-secondary-light text-3xl mb-4">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="mb-4 text-gray-300">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Additional Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <FadeInWhenVisible key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="text-accent text-3xl mb-4">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;