import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={"https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.shortDescription}</p>
        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded hover:opacity-90 transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;