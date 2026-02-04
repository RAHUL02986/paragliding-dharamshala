import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import About from '@/components/about'
import Gallery from '@/components/gallery'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import { Toaster } from 'sonner'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />

      {/* Quick Navigation to Full Pages */}
      <section className="w-full py-12 bg-card/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Want to explore more? Visit our dedicated pages:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="outline">
                <Link href="/services">Full Services</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about">Our Team</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/gallery">Photo Gallery</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Toaster position="top-center" />
    </main>
  )
}
