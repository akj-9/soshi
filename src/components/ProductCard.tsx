// src/components/ProductCard.tsx
interface Product {
  image: string;
  name: string;
  price: string | number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-medium">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
      </div>
    </div>
  );
}
