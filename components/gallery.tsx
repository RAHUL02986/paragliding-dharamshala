'use client'

import { useState } from 'react'
import Image from 'next/image'

const images = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Tandem paragliding flight',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Paraglider preparing for takeoff',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Aerial view of Dharamshala',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Beginner tandem flight',
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'Formation flying',
  },
  {
    src: '/images/gallery-6.jpg',
    alt: 'Sunset paragliding',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="w-full py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Photo Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore stunning moments from our paragliding adventures over Dharamshala
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
