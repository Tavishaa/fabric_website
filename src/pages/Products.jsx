import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

function Products() {
  // First 4 products
  const topRowProducts = products.slice(0, 4);
  // Last 3 products
  const bottomRowProducts = products.slice(4);

  return (
    <div className="py-16 bg-secondary-light min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary-dark text-center mb-12"
        >
          Our Products
        </motion.h1>

        {/* Top row - 4 products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-7xl mx-auto">
          {topRowProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              displayImage={
                product.category === 'pp-nonwoven' 
                  ? '/ProductImages/pp1.jpg'
                  : product.images[0]
              }
            />
          ))}
        </div>

        {/* Bottom row - 3 products centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[calc(75%)] mx-auto">
          {bottomRowProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              displayImage={
                product.category === 'polyester-fusible' 
                ? '/ProductImages/polyester1.jpeg'
                : product.category === 'coated-fabric' 
                ? '/ProductImages/pvc1.jpg'
                : product.category === 'spunlace'
                ? '/ProductImages/spunlace1.jpg'
                : product.images[0]
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;