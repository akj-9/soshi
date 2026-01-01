// src/components/ScrollLinks.tsx
'use client'

import { motion } from 'framer-motion'

const linkVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }
  })
}

export default function ScrollLinks() {
  const links = ['Shop', 'Men', 'Women', 'Accessories', 'Contact']

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">
      {links.map((link, i) => (
        <motion.a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-2xl font-semibold text-gray-800 hover:underline"
          variants={linkVariants}
          initial="hidden"
          whileInView="visible"
          custom={i}
          viewport={{ once: true }}
        >
          {link}
        </motion.a>
      ))}
    </section>
  )
}
