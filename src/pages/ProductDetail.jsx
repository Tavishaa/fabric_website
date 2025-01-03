import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductGallery from '../components/ProductGallery';
import ProductSpecifications from '../components/ProductSpecifications';
import ContactForm from '../components/ContactForm';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-16">Product not found</div>;
  }

  return (
    <div className="py-16 bg-secondary-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-primary-dark mb-8">{product.name}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductGallery images={product.images} />
            
            <div>
              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-semibold text-primary-dark mb-4">Description</h2>
                <p className="whitespace-pre-line">{product.description}</p>
              </div>
              
              <div className="bg-secondary text-primary p-6 rounded-lg shadow-lg border border-primary/10">
                <ProductSpecifications specifications={product.specifications} />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary-dark text-center mb-8">
            Interested in this product?
          </h2>
          <ContactForm preselectedProduct={product.category} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;