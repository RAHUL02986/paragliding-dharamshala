'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  const socials = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Twitter, href: 'https://twitter.com' },
  ]

  return (
    <footer className="w-full bg-primary/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
              <span className="text-2xl">🪂</span>
              <span>Paraglide Dharamshala</span>
            </Link>
            <p className="text-muted-foreground">
              Experience the thrill of paragliding over the magnificent Himalayas with expert guidance and safety standards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <MapPin size={16} />
              <span>Dharamshala, Himachal Pradesh</span>
            </div>
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
            <p>
              &copy; {currentYear} Paraglide Dharamshala. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#home" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#home" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
