'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Tandem paragliding flight over Bir Billing Dhauladhar mountains Himachal Pradesh',
    category: 'Flights',
    description: 'Thrilling tandem paragliding from Bir Billing - world famous HP paragliding site',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Paragliding gear preparation Bir Billing takeoff Kangra Himachal Pradesh',
    category: 'Training',
    description: 'Safety equipment check before Bir Billing launch - Himachal standards',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Aerial panorama Bir Billing valley Dharamshala Himachal Pradesh paragliding',
    category: 'Scenery',
    description: 'Spectacular Dhauladhar mountain views from Bir Billing flight path',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Beginner tandem paragliding instructor Bir Billing Himachal Pradesh',
    category: 'Training',
    description: 'First tandem flight experience - safe beginner introduction Bir Billing HP',
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'Advanced formation paragliding Bir Billing Kangra Himachal Pradesh',
    category: 'Flights',
    description: 'Professional pilots formation flying above Bir Billing valley',
  },
  {
    src: '/images/gallery-6.jpg',
    alt: 'Golden hour sunset paragliding Bir Billing Himachal Pradesh',
    category: 'Scenery',
    description: 'Magical sunset flight over Dhauladhar ranges from Bir Billing',
  },
]

const categories = ['All', ...new Set(galleryImages.map((img) => img.category))]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      const newIndex = selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1
      setSelectedImageIndex(newIndex)
    }
  }

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      const newIndex = selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1
      setSelectedImageIndex(newIndex)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Bir Billing Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Professional photography from Himachal Pradesh's premier paragliding destination
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setSelectedImageIndex(null)
                }}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-card/80 border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setSelectedImageIndex(index)}
                    className="relative group overflow-hidden rounded-lg cursor-pointer h-80"
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-6">
                      <p className="text-white font-semibold text-lg">{image.category}</p>
                      <p className="text-white/80 text-sm">{image.description}</p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
                  <div className="relative w-full h-[600px]">
                    <Image
                      src={filteredImages[selectedImageIndex ?? index].src}
                      alt={filteredImages[selectedImageIndex ?? index].alt}
                      fill
                      className="object-contain"
                    />

                    {/* Navigation Buttons */}
                    <button
                      onClick={handlePrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                      <p className="text-sm font-semibold">{filteredImages[selectedImageIndex ?? index].category}</p>
                      <p className="text-lg">{filteredImages[selectedImageIndex ?? index].description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Your Bir Billing Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands who've captured their Himachal Pradesh paragliding memories with us.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">Book Flight - Be In Our Gallery</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
