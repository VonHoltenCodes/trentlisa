'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const photos = [
  { id: 1, src: '/photo1.webp', alt: 'Trent and Lisa memory 1' },
  { id: 2, src: '/photo2.webp', alt: 'Trent and Lisa memory 2' },
  { id: 3, src: '/photo3.webp', alt: 'Trent and Lisa memory 3' },
  { id: 4, src: '/photo4.webp', alt: 'Trent and Lisa memory 4' },
  { id: 5, src: '/photo5.webp', alt: 'Trent and Lisa memory 5' },
  { id: 6, src: '/photo6.webp', alt: 'Trent and Lisa memory 6' },
]

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <section id="photos" className="section" style={{backgroundColor: '#f9fafb'}}>
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Our Memories
        </motion.h2>
        
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="photo-item"
              onClick={() => setSelectedPhoto(photo.id)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}