// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative bg-gray-100">
      <img src="/images/hero.jpg" alt="Featured Product" className="w-full h-screen object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">New Collection Out Now</h1>
      </div>
    </section>
  );
}
