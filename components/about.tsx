'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, Users, Heart } from 'lucide-react'

export default function About() {
  const team = [
    {
      name: 'Raj Kumar',
      role: 'Chief Pilot & Founder',
      expertise: '15+ years of paragliding experience',
      highlight: '5000+ successful flights',
    },
    {
      name: 'Priya Singh',
      role: 'Senior Instructor',
      expertise: 'Certified tandem instructor',
      highlight: '2000+ tandem flights completed',
    },
    {
      name: 'Arjun Patel',
      role: 'Safety Officer',
      expertise: 'Advanced safety certifications',
      highlight: 'Zero safety incidents since 2015',
    },
    {
      name: 'Neha Sharma',
      role: 'Training Coordinator',
      expertise: 'Professional paragliding coach',
      highlight: 'Trained 500+ pilots',
    },
  ]

  const stats = [
    { icon: Award, label: 'Years of Experience', value: '15+' },
    { icon: Users, label: 'Happy Customers', value: '5000+' },
    { icon: Heart, label: 'Safety Rating', value: '100%' },
  ]

  return (
    <section id="about" className="w-full py-16 lg:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/gallery-4.jpg"
              alt="Our team training participants"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">About Our Team</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Dharamshala Paragliding Adventures is led by a team of certified, experienced pilots dedicated to providing the safest and most thrilling paragliding experiences in the Himalayas.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              With over 15 years of combined experience and thousands of successful flights, we've established ourselves as the premier paragliding destination in Dharamshala. Our commitment to safety, quality instruction, and unforgettable experiences sets us apart.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-semibold text-accent">{member.highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
