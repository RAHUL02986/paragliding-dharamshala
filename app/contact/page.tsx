import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/components/contact'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    details: 'Bir Billing, Dharamshala, Kangra District, Himachal Pradesh 176077',
    description: 'World famous Bir Billing paragliding launch site - Asia\'s best',
  },
  {
    icon: Phone,
    title: 'WhatsApp / Phone',
    details: '+91 98765 43210',
    description: '24/7 booking & weather updates for Bir Billing flights',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@birbillingparagliding.com',
    description: 'Quick response for Himachal paragliding bookings',
  },
  {
    icon: Clock,
    title: 'Best Season',
    details: 'Oct-May (Daily 6AM-6PM)',
    description: 'Prime thermals Bir Billing. Monsoon flights on request',
  },
]

export const metadata: Metadata = {
  title: 'Contact Bir Billing Paragliding Himachal Pradesh | Book Tandem Flights',
  description: 'Book paragliding Bir Billing HP. Dharamshala Kangra location +91 9876543210. World class tandem flights from Asia\'s best site. Quick response guaranteed.',
  keywords: 'Bir Billing paragliding contact, Dharamshala paragliding booking, Himachal paragliding phone, Kangra paragliding address, book tandem Bir Billing',
  openGraph: {
    title: 'Contact - Bir Billing Paragliding Bookings',
    description: 'Book your Himachal Pradesh paragliding adventure today',
    images: '/images/hero-paragliding.jpg',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Book Your Bir Billing Flight</h1>
            <p className="text-xl text-muted-foreground">
              Contact Himachal Pradesh\'s premier paragliding experts - quick response guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">{info.title}</h3>
                    <p className="font-semibold text-primary text-center mb-2">{info.details}</p>
                    <p className="text-sm text-muted-foreground text-center">{info.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg lg:h-full ">
              <Image
                src="/images/hero-paragliding.jpg"
                alt="Bir Billing paragliding launch site Himachal Pradesh Dhauladhar views"
                fill
                className="object-cover"
              />
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Instant Booking Form</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Complete the form for immediate confirmation. Tandem flights available daily from Bir Billing (weather permitting).
              </p>
              <Contact />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className=" mx-auto px-4 ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Find Bir Billing Launch Site</h2>
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Bir Billing Paragliding Launch Site - World Paragliding Championships Venue"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6981.5!2d77.058!3d32.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8f7e7e7e7e7e%3A0x4d5f1f3e8c5d8d8d!2sBir%20Billing%2C%20Himachal%20Pradesh%20176077!5e0!3m2!1sen!2sin!4v1700000000000"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Located 35km from Dharamshala, 14km from Bir - Asia\'s #1 paragliding destination
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
