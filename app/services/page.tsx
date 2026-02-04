import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Wind, Users, BookOpen, Trophy, CheckCircle, Award } from 'lucide-react'

const services = [
  {
    icon: Wind,
    title: 'Scenic Tandem Flight',
    description: 'Perfect for beginners and thrill-seekers. Experience the magic of flight with our certified pilot.',
    price: '₹4,999',
    duration: '45 minutes',
    highlights: [
      '20-30 minute flight duration',
      'All safety equipment included',
      'Panoramic Himalayan views',
      'Professional video recording',
      'Flight certificate provided',
    ],
    ideal: 'Beginners, families, first-time flyers',
  },
  {
    icon: Users,
    title: 'Group Adventure Tours',
    description: 'Bring your friends or family on an unforgettable group experience with special discounts.',
    price: '₹4,499',
    duration: 'Per person',
    highlights: [
      'Groups of 4+ get 10% discount',
      'Groups of 8+ get 15% discount',
      'Flexible scheduling',
      'Group coordination included',
      'Social flight experience',
    ],
    ideal: 'Groups, families, corporate teams',
  },
  {
    icon: BookOpen,
    title: 'Paragliding Courses',
    description: 'Learn all techniques from setup to advanced maneuvers with expert instructors.',
    price: '₹24,999',
    duration: 'Per person',
    highlights: [
      '5-day intensive course',
      'Small group training (max 4 people)',
      'Ground school & flight practice',
      'Advanced techniques taught',
      'Course completion certificate',
      'Equipment provided during course',
    ],
    ideal: 'Adventure enthusiasts, serious learners',
  },
  {
    icon: Trophy,
    title: 'Certification Program',
    description: 'Become a certified paraglider with our internationally recognized training.',
    price: '₹49,999',
    duration: 'Per person',
    highlights: [
      '15-day comprehensive program',
      'International certification',
      'Solo flight training included',
      'Rescue techniques training',
      'Weather interpretation course',
      'Post-training mentorship (3 months)',
      'Gear discount for graduates',
    ],
    ideal: 'Professionals, aspiring pilots',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the perfect paragliding experience tailored to your skill level and dreams
            </p>
            <p className="text-lg text-muted-foreground">
              From your first flight to becoming a certified pilot, we have the perfect package for you
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="flex flex-col hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{service.price}</div>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-6">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-3">Key Features:</p>
                      <ul className="space-y-2">
                        {service.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-semibold text-muted-foreground mb-4">
                        Ideal For: <span className="text-foreground">{service.ideal}</span>
                      </p>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link href="/contact">Book This Service</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: '15+ Years Experience',
                description: 'Trusted by thousands of paragliding enthusiasts across the Himalayas',
              },
              {
                icon: CheckCircle,
                title: '100% Safety Record',
                description: 'Advanced equipment, certified pilots, and rigorous safety protocols',
              },
              {
                icon: Wind,
                title: 'Scenic Locations',
                description: 'Stunning views of Dharamshala and the beautiful Himalayan landscape',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Card key={idx} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for an Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Don't wait! Book your paragliding experience today and create memories that will last a lifetime.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">Book Your Flight Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
