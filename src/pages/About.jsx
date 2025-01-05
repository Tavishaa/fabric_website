import { motion } from 'framer-motion';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

function About() {
  const stats = [
    { label: 'Years of Experience', value: '20+' },
    { label: 'Cities Served', value: '10+' },
    { label: 'Product Types', value: '50+' },
    { label: 'Happy Clients', value: '100+' }
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
                Established in 2007 by Mr. Jayesh Goyal, Hryday Enterprises has grown into a trusted name in the industry. Our dedicated team is committed to delivering high-quality, personalized services, fostering enduring partnerships with our clients.
              </p>
              <p className="text-gray-700">
                We pride ourselves on making each interaction meaningful and results-driven. With a foundation built on trust, integrity, and innovation, Hryday Enterprises consistently provides tailored solutions that exceed expectations, positioning us as a dependable partner in our clients' success.
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
      </div>
    </div>
  );
}

export default About;