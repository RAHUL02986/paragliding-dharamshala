'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wind, Users, BookOpen, Trophy } from 'lucide-react'

const services = [
  {
    icon: Wind,
    title: 'Scenic Tandem Flight',
    description: 'Perfect for beginners. Enjoy a 20-30 minute flight with our certified pilot while soaking in panoramic views of the Himalayas.',
    price: '₹4,999',
    duration: '45 minutes',
  },
  {
    icon: Users,
    title: 'Group Adventure Tours',
    description: 'Bring your friends or family on an unforgettable group paragliding experience. Discounts available for groups of 4+.',
    price: '₹4,499',
    duration: 'Per person',
  },
  {
    icon: BookOpen,
    title: 'Paragliding Courses',
    description: 'Comprehensive 5-day advanced paragliding course. Learn all techniques from setup to landing with our expert instructors.',
    price: '₹24,999',
    duration: 'Per person',
  },
  {
    icon: Trophy,
    title: 'Certification Program',
    description: 'Become a certified paraglider with our internationally recognized training program. Perfect for serious enthusiasts.',
    price: '₹49,999',
    duration: 'Per person',
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect paragliding experience tailored to your skill level and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Duration: <span className="font-semibold text-foreground">{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
