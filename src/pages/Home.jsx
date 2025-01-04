import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

function Home() {
  const products = [
    {
      id: 1,
      name: 'Non Woven Non Fusible Fabrics',
      image: 'https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      shortDescription: 'High-quality chemical bonded non-woven fabrics for various applications.',
    },
    {
      id: 2,
      name: 'Non Woven Fusible Interlinings',
      image: 'https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      shortDescription: 'Premium fusible interlinings for garment manufacturing.',
    },
    {
      id: 3,
      name: 'Embroidery Backing Fabrics',
      image: 'https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      shortDescription: 'Specialized backing materials for embroidery applications.',
    },
  ];

  return (
    <div>
      <Carousel />

      {/* Products Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-primary mb-12"
          >
            Our Products
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-auto max-w-4xl" />

      {/* About Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-center text-primary mb-12"
          >
            About Us
          </motion.h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              We are a leading manufacturer, supplier, importer & trader of various types of interlining fabrics.
              With years of experience in the industry, we provide high-quality products that meet international standards.
            </p>
            <Link
              to="/about"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-md hover:opacity-90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      
      <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-auto max-w-4xl" />
      
      {/* Services Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-primary mb-12"
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Manufacturing',
                description: 'State-of-the-art manufacturing facilities producing high-quality interlining products.'
              },
              {
                title: 'Quality Testing',
                description: 'Comprehensive testing facilities ensuring product quality and consistency.'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored interlining solutions meeting specific customer requirements.'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-md hover:opacity-90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-auto max-w-4xl" />

      {/* Contact Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-primary mb-12"
          >
            Contact Us
          </motion.h2>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Home;