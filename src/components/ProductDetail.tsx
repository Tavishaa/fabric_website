import React from 'react';
import { X, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductDetailProps {
  product: {
    title: string;
    description: string;
    imageUrl: string;
    additionalImages: string[];
    specifications: string[];
  };
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const navigate = useNavigate();

  const handleInquiry = () => {
    navigate('/contact', { state: { productTitle: product.title } });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-sky-900">{product.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <img src={product.imageUrl} alt={product.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <div className="grid grid-cols-3 gap-2">
                {product.additionalImages.map((img, index) => (
                  <img key={index} src={img} alt={`${product.title} ${index + 1}`} className="w-full h-24 object-cover rounded-lg" />
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <h3 className="font-semibold text-sky-800 mb-4">Specifications:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <button
            onClick={handleInquiry}
            className="w-full bg-sky-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-sky-700 transition"
          >
            <DollarSign size={20} />
            <span>Inquire About Price</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;