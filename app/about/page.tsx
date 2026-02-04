import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Award, Users, Heart, Trophy, Zap, Globe } from 'lucide-react'

const team = [
  {
    name: 'Raj Kumar',
    role: 'Chief Pilot & Founder',
    expertise: '15+ years of paragliding experience',
    highlight: '5000+ successful flights',
    specialty: 'Expert in mountain thermals and advanced techniques',
  },
  {
    name: 'Priya Singh',
    role: 'Senior Instructor',
    expertise: 'Certified tandem instructor',
    highlight: '2000+ tandem flights completed',
    specialty: 'Specializes in beginner training and safety',
  },
  {
    name: 'Arjun Patel',
    role: 'Safety Officer',
    expertise: 'Advanced safety certifications',
    highlight: 'Zero safety incidents since 2015',
    specialty: 'Equipment maintenance and safety protocols',
  },
  {
    name: 'Neha Sharma',
    role: 'Training Coordinator',
    expertise: 'Professional paragliding coach',
    highlight: 'Trained 500+ pilots',
    specialty: 'Course development and student mentorship',
  },
]

const stats = [
  { icon: Trophy, label: 'Years of Experience', value: '15+' },
  { icon: Users, label: 'Happy Customers', value: '5000+' },
  { icon: Heart, label: 'Safety Rating', value: '100%' },
  { icon: Zap, label: 'Flights Completed', value: '10,000+' },
]

const values = [
  {
    icon: Heart,
    title: 'Safety First',
    description: 'We prioritize your safety above all else with rigorous standards and professional equipment.',
  },
  {
    icon: Globe,
    title: 'Adventure & Beauty',
    description: 'We showcase the stunning beauty of the Himalayas and the thrill of flight.',
  },
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'We deliver exceptional service and unforgettable experiences every single time.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Discover the story behind Dharamshala's most trusted paragliding company
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/gallery-4.jpg"
                alt="Our team training participants"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Dharamshala Paragliding Adventures was founded in 2009 by Raj Kumar, a passionate paraglider and aviation enthusiast who fell in love with the stunning Himalayan landscape. What started as a personal passion quickly turned into a mission to share the joy and freedom of flight with others.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the past 15 years, we've grown into the most trusted paragliding destination in Dharamshala. We've trained hundreds of pilots, completed thousands of safe flights, and built a reputation for combining adventure with responsibility.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, our team of certified instructors continues this legacy, bringing together expertise, passion, and an unwavering commitment to safety and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="w-full py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">{value.title}</h3>
                    <p className="text-muted-foreground text-center">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-primary mb-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-semibold text-accent mb-2">{member.highlight}</p>
                    <p className="text-xs text-muted-foreground italic">{member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Become part of thousands of happy paragliders who've experienced the magic of flying over the Himalayas.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">Start Your Adventure</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
