import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';

const productsData = [
  {
    title: 'Chemical Bonded Non-Woven Non-Fusible Fabrics',
    description: 'High-quality non-fusible fabrics perfect for various applications.',
    imageUrl: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544032527-042957c6f7ce?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      'Weight: 30-150 GSM',
      'Width: 90-150 cm',
      'Color: White and Custom Colors',
      'Application: Garments, Bags, Shoes'
    ]
  },
  {
    title: 'Chemical Bonded Non-Woven Fusible Interlinings',
    description: 'Premium fusible interlinings for superior bonding strength.',
    imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      'Weight: 40-120 GSM',
      'Width: 90-150 cm',
      'Adhesive Type: PA, EVA, TPU',
      'Application: Collars, Cuffs, Waistbands'
    ]
  },
  {
    title: 'Non-Woven Embroidery Backing Fabrics',
    description: 'Specialized backing fabrics for perfect embroidery results.',
    imageUrl: 'https://images.unsplash.com/photo-1544032527-042957c6f7ce?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1544032527-042957c6f7ce?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      'Weight: 30-80 GSM',
      'Width: 90-150 cm',
      'Type: Tear-Away, Cut-Away, Wash-Away',
      'Application: Machine Embroidery'
    ]
  },
  {
    title: 'Knitted Fusible Interlinings',
    description: 'Flexible and durable knitted interlinings for various applications.',
    imageUrl: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544032527-042957c6f7ce?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581088583819-45c89b3d5b84?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      'Weight: 20-60 GSM',
      'Width: 90-150 cm',
      'Stretch: 2-Way, 4-Way',
      'Application: Stretch Fabrics, Knitwear'
    ]
  },
  {
    title: 'Weft Insert Fusible Interlinings',
    description: 'Professional-grade weft insert interlinings for enhanced stability.',
    imageUrl: 'https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      'Weight: 50-150 GSM',
      'Width: 90-150 cm',
      'Construction: Warp Knitted with Weft Insert',
      'Application: Tailored Garments'
    ]
  },
  {
    title: 'Dyed Interlinings',
    description: 'Custom-dyed interlinings available in various colors and specifications.',
    imageUrl: 'https://images.unsplash.com/photo-1581088583819-45c89b3d5b84?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1581088583819-45c89b3d5b84?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      'Weight: 30-150 GSM',
      'Width: 90-150 cm',
      'Colors: Custom Pantone Colors',
      'Application: Fashion Garments'
    ]
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof productsData[0] | null>(null);

  return (
    <section id="products" className="py-16 bg-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-sky-900 mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>
      
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default Products;