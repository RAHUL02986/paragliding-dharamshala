# Paragliding Website - Pages Guide

## Overview
Your paragliding business website now includes beautifully designed individual pages for each menu item, along with the main landing page.

## Page Structure

### 1. **Home Page** (`/`)
- **File**: `/app/page.tsx`
- **Features**:
  - Hero section with call-to-action
  - Services overview with 4 main packages
  - About team section with key statistics
  - Photo gallery preview
  - Contact form section
  - Quick navigation links to dedicated pages
- **Purpose**: Comprehensive overview of all offerings and first impression

### 2. **Services Page** (`/services`)
- **File**: `/app/services/page.tsx`
- **Features**:
  - Detailed service descriptions with 4 packages:
    - Scenic Tandem Flight
    - Group Adventure Tours
    - Paragliding Courses
    - Certification Program
  - Expanded feature highlights for each service
  - Ideal customer segment for each package
  - "Why Choose Us" section
  - Call-to-action buttons for booking
- **Purpose**: Help customers understand differences between packages and make informed decisions

### 3. **About Page** (`/about`)
- **File**: `/app/about/page.tsx`
- **Features**:
  - Company history and founding story
  - Team achievements with statistics
  - Four core values: Safety First, Adventure & Beauty, Excellence
  - Meet the expert team with detailed member information
  - Leadership credentials and specialties
  - Community engagement call-to-action
- **Purpose**: Build trust and credibility with potential customers

### 4. **Gallery Page** (`/gallery`)
- **File**: `/app/gallery/page.tsx`
- **Features**:
  - 6 stunning paragliding images
  - Filter by category: All, Flights, Training, Scenery
  - Interactive image cards with hover effects
  - Lightbox modal for full-size viewing
  - Navigation between images in lightbox
  - Image descriptions and category labels
  - Call-to-action to book flights
- **Purpose**: Showcase visual experiences and inspire bookings

### 5. **Contact Page** (`/contact`)
- **File**: `/app/contact/page.tsx`
- **Features**:
  - Contact information cards (Location, Phone, Email, Hours)
  - Full contact form with validation
  - Side-by-side form and imagery
  - Google Maps embed showing location
  - Professional layout for inquiries
  - Automatic email sending via Nodemailer
- **Purpose**: Facilitate customer inquiries and bookings

## Navigation

All pages are accessible through:
1. **Header Navigation** - Fixed menu bar with links to all pages
2. **Mobile Menu** - Responsive navigation for mobile devices
3. **Call-to-Action Buttons** - "Book Now" buttons throughout the site
4. **Quick Navigation** - Links at bottom of home page

## Responsive Design

All pages are fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up (md breakpoint)
- **Desktop**: 1024px and up (lg breakpoint)

## Color Scheme

The site uses a mountain-inspired color palette:
- **Primary**: Teal/Green (#0d5a3d) - represents nature and adventure
- **Secondary**: Warm Orange - represents energy and sunrise
- **Neutrals**: Light backgrounds with dark text for contrast
- **Accents**: Used for highlights and interactive elements

## Performance Features

- Image optimization with Next.js Image component
- Lazy loading for gallery images
- Smooth animations and transitions
- Fast page load times
- SEO-friendly metadata on each page

## Customization Tips

### Update Contact Information
Edit `/app/contact/page.tsx`:
```typescript
const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    details: 'Your location here',
    // ...
  },
  // More contact details
]
```

### Add or Remove Gallery Images
1. Generate new images or add your own to `/public/images/`
2. Update the `galleryImages` array in `/app/gallery/page.tsx`:
```typescript
const galleryImages = [
  {
    src: '/images/your-image.jpg',
    alt: 'Description',
    category: 'Category',
    description: 'Image description',
  },
  // Add more images
]
```

### Customize Services
Edit the `services` array in `/app/services/page.tsx` to add/modify packages, pricing, and features.

### Update Team Members
Edit the `team` array in `/app/about/page.tsx` to update team member information.

## Email Configuration

For the contact form to work, configure these environment variables in Vercel:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `BUSINESS_EMAIL`

See `SETUP_GUIDE.md` for detailed instructions.

## File Structure

```
/app
  /api/send-email/route.ts      # Email API endpoint
  /about/page.tsx                # About page
  /contact/page.tsx              # Contact page
  /gallery/page.tsx              # Gallery page
  /services/page.tsx             # Services page
  /page.tsx                       # Home page
  /layout.tsx                     # Root layout
  /globals.css                    # Global styles

/components
  /header.tsx                     # Navigation header
  /hero.tsx                       # Hero section
  /services.tsx                   # Services section
  /about.tsx                      # About section
  /gallery.tsx                    # Gallery section
  /contact.tsx                    # Contact form
  /footer.tsx                     # Footer
  /ui/                           # Shadcn UI components

/public/images/                  # Gallery and hero images
```

## Next Steps

1. **Deploy to Vercel** - Use the "Publish" button in v0
2. **Add Your Content** - Customize team members, services, and contact info
3. **Set Email Variables** - Configure SMTP settings for email functionality
4. **Monitor Analytics** - Track visitor behavior and conversions
5. **Regular Updates** - Keep gallery and testimonials fresh

## Support

For questions about specific pages or customization, refer to the component files where detailed comments explain functionality.

Happy paragliding! 🪂
