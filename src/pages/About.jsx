import { motion } from 'framer-motion';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

function About() {
  const stats = [
    { label: 'Years of Experience', value: '20+' },
    { label: 'Countries Served', value: '30+' },
    { label: 'Product Types', value: '100+' },
    { label: 'Happy Clients', value: '1000+' }
  ];

  const certifications = [
    'ISO 9001:2015',
    'OEKO-TEX® Standard 100',
    'Global Organic Textile Standard',
    'SA8000'
  ];

  return (
    <div className="py-16 bg-secondary-light min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary-dark text-center mb-12"
        >
          About Us
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <FadeInWhenVisible>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                With over two decades of experience in the textile industry, we have established ourselves
                as a leading manufacturer, supplier, importer & trader of various types of interlining fabrics.
              </p>
              <p className="text-gray-700">
                Our commitment to quality and innovation has made us a trusted partner for businesses worldwide,
                serving clients across multiple continents with our premium interlining solutions.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                We strive to provide high-quality interlining solutions that meet the evolving needs of the
                garment industry while maintaining the highest standards of customer service and technical support.
              </p>
              <p className="text-gray-700">
                Our vision is to be the global leader in innovative interlining solutions, setting industry
                standards for quality and sustainability.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <FadeInWhenVisible key={stat.label} delay={index * 0.1}>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-primary-dark mb-6">Quality Assurance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Testing Facilities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Advanced Material Testing Lab</li>
                  <li>Wash Testing Facility</li>
                  <li>Color Fastness Testing</li>
                  <li>Strength and Durability Testing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Certifications</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {certifications.map(cert => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary-dark mb-6">Global Presence</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Our products are trusted by leading garment manufacturers across the globe. We export to:
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-none p-0">
                <li>North America</li>
                <li>Europe</li>
                <li>Asia Pacific</li>
                <li>Middle East</li>
                <li>South America</li>
                <li>Africa</li>
              </ul>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default About;