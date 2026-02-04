'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-paragliding.jpg"
        alt="Paragliding over Dharamshala mountains"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
          Soar Above the Himalayas
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-100 text-pretty">
          Experience the ultimate adventure paragliding over the breathtaking landscapes of Dharamshala
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Flight
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/20 border-white text-white hover:bg-white/30"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  )
}
