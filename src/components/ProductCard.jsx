import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.shortDescription}</p>
        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;