import { motion } from 'framer-motion';

function ProductSpecifications({ specifications }) {
  return (
    <div className="bg-secondary-light rounded-lg p-6">
      <h3 className="text-xl font-semibold text-primary-dark mb-4">Specifications</h3>
      <div className="space-y-3">
        {specifications.map((spec, index) => (
          <motion.div
            key={spec.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-between"
          >
            <span className="text-gray-600">{spec.label}</span>
            <span className="font-medium text-gray-800">{spec.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProductSpecifications;