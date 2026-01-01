// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="text-2xl font-bold">YourBrand</div>
      <ul className="flex space-x-6">
        <li><a href="#" className="text-gray-700 hover:text-black">Home</a></li>
        <li><a href="#" className="text-gray-700 hover:text-black">Shop</a></li>
        <li><a href="#" className="text-gray-700 hover:text-black">About</a></li>
        <li><a href="#" className="text-gray-700 hover:text-black">Contact</a></li>
      </ul>
    </nav>
  );
}
