// src/components/ProductGrid.tsx
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$99',
    image: '/images/product1.jpg',
  },
  // Add more products
];

export default function ProductGrid() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
