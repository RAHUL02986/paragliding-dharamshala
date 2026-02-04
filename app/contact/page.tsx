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
    details: 'Dharamshala, Himachal Pradesh, India',
    description: 'Nestled in the beautiful Himalayan foothills',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 98765 43210',
    description: 'Available 24/7 for inquiries',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@paraglidedharmashala.com',
    description: 'Response within 2 hours',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Daily 6:00 AM - 6:00 PM',
    description: 'Open all days, including holidays',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help and answer any question you might have
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
                alt="Beautiful Dharamshala landscape"
                fill
                className="object-cover"
              />
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Send us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible. Whether you have a question about our services, pricing, or anything else, we're here to help!
              </p>
              <Contact />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className=" mx-auto px-4 ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Visit Us</h2>
          <div className="relative h-100 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Dharamshala location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.0346945891247!2d76.27906752346834!3d32.22375277080768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b50ba0f7a7999%3A0x4d5f1f3e8c5d8d8d!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
