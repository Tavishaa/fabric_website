import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';

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
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-primary mb-12"
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

      <section className="py-16 bg-primary text-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gold mb-12"
          >
            About Us
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-background/90 mb-6">
              We are a leading manufacturer, supplier, importer & trader of various types of interlining fabrics.
              With years of experience in the industry, we provide high-quality products that meet international standards.
            </p>
            <a
              href="/about"
              className="inline-block bg-gold text-primary px-6 py-3 rounded hover:bg-secondary transition-all duration-300"
            >
              Learn More About Us
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-primary mb-12"
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