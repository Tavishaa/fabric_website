import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';

function Home() {
  const products = [
    {
      id: 1,
      name: 'Non Woven Non Fusible Fabrics',
      image: '/images/product1.jpg',
      shortDescription: 'High-quality chemical bonded non-woven fabrics for various applications.',
    },
    {
      id: 2,
      name: 'Non Woven Fusible Interlinings',
      image: '/images/product1.jpg',
      shortDescription: 'Premium fusible interlinings for garment manufacturing.',
    },
    {
      id: 3,
      name: 'Embroidery Backing Fabrics',
      image: '/images/product1.jpg',
      shortDescription: 'Specialized backing materials for embroidery applications.',
    },
  ];

  return (
    <div>
      <Carousel />
      
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-primary-dark mb-12"
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-primary-dark mb-12"
          >
            About Us
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-gray-700 mb-6">
              We are a leading manufacturer, supplier, importer & trader of various types of interlining fabrics.
              With years of experience in the industry, we provide high-quality products that meet international standards.
            </p>
            <a
              href="/about"
              className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition"
            >
              Learn More About Us
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-primary-dark mb-12"
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