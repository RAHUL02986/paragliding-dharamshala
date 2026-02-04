'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Email sent successfully! We will contact you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        toast.error(data.error || 'Failed to send email. Please try again.')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('An error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'rahul.codexmatrix@gmail.com',
      href: 'mailto:rahul.codexmatrix@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dharamshala, Himachal Pradesh',
      href: 'https://maps.google.com',
    },
  ]

  return (
    <section id="contact" className="w-full py-16 lg:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to book your paragliding adventure? Contact us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <a
                key={index}
                href={info.href}
                target={info.label === 'Location' ? '_blank' : undefined}
                rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{info.label}</p>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll respond within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
