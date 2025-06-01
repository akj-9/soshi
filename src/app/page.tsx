import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductPreview from '@/3d/ProductPreview'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <section className="p-8 text-center flex-grow">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Clothing Store</h1>
        <p className="text-lg mb-8">Shop the latest fashion with a future-ready experience</p>
        <ProductPreview />
      </section>
      <Footer />
    </main>
  )
}
