import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-sky-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="flex items-center text-sky-600 hover:text-sky-700 transition"
        >
          <span className="mr-2">View Details</span>
          <ExternalLink size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;