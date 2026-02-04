# Paraglide Dharamshala Website - Setup Guide

Welcome to your paragliding business website! This guide will help you set up the email functionality to receive customer inquiries.

## Features

✈️ Modern, responsive design optimized for all devices
📸 Beautiful photo gallery with modal lightbox
📧 Contact form with Nodemailer email integration
🏔️ Showcase of paragliding services and team expertise
📱 Mobile-first approach with intuitive navigation

## Email Configuration Setup

The website uses **Nodemailer** to send emails. Follow these steps to set up email functionality:

### Option 1: Using Gmail (Recommended for Beginners)

1. **Enable 2-Factor Authentication on your Google Account**
   - Go to myaccount.google.com
   - Select "Security" in the left menu
   - Enable 2-Step Verification

2. **Create an App Password**
   - After enabling 2FA, go back to Security settings
   - Find "App passwords" section
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password

3. **Add Environment Variables to Vercel**
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add the following variables:

   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-character-app-password
   BUSINESS_EMAIL=rahul.codexmatrix@gmail.com
   ```

   Replace:
   - `your-email@gmail.com` with your Gmail address
   - `your-16-character-app-password` with the password from step 2
   - `BUSINESS_EMAIL` with where you want to receive inquiries

### Option 2: Using SendGrid

1. **Create a SendGrid Account**
   - Sign up at sendgrid.com
   - Verify your email address
   - Create an API key in Settings → API Keys

2. **Add Environment Variables to Vercel**

   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASSWORD=your-sendgrid-api-key
   BUSINESS_EMAIL=rahul.codexmatrix@gmail.com
   ```

   Replace `your-sendgrid-api-key` with your actual API key.

### Option 3: Using Other Email Providers

For Outlook, Yahoo, or other providers, you'll need:
- SMTP Host
- SMTP Port (usually 587 or 465)
- Email address
- App-specific password or API key

Contact your email provider for their SMTP settings.

## Deployment Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Environment Variables**
   - Follow the email configuration steps above
   - Add variables to your Vercel project

3. **Test Locally (Optional)**
   ```bash
   npm run dev
   ```
   - Visit http://localhost:3000
   - Test the contact form

4. **Deploy to Vercel**
   - The website will automatically deploy to Vercel when you push changes to your GitHub repository
   - Alternatively, use the Vercel CLI: `vercel`

## Customization

### Change Business Email
- Update `BUSINESS_EMAIL` environment variable in Vercel
- The contact form will send to this email address

### Modify Phone Number
- Edit `/components/contact.tsx` line 68
- Update the phone number in phone href and display text

### Change Team Members
- Edit `/components/about.tsx` 
- Modify the `team` array with your actual team information

### Update Service Packages
- Edit `/components/services.tsx`
- Modify the `services` array with your current offerings and pricing

### Add More Gallery Images
- Add images to `/public/images/`
- Update the `images` array in `/components/gallery.tsx`

## Troubleshooting

### "Missing configuration" Error
- Check that all environment variables are set in Vercel
- Ensure variable names match exactly (case-sensitive)
- Redeploy after adding environment variables

### Emails Not Sending
- Verify SMTP credentials are correct
- Check that 2FA is enabled (for Gmail)
- Ensure app-specific password is used (not regular password)
- Check Vercel logs for error messages

### Form Not Submitting
- Open browser console (F12) for error messages
- Verify all required fields are filled
- Check that email format is valid

## Security Notes

- Never commit environment variables to Git
- SMTP passwords are stored securely in Vercel
- Contact form includes HTML escaping to prevent injection attacks
- All form inputs are validated server-side

## Support

If you need help:
1. Check the troubleshooting section above
2. Review the email provider's documentation
3. Check Vercel deployment logs for error messages
4. Contact your email service provider support

## Project Structure

```
/
├── app/
│   ├── api/send-email/route.ts    # Email sending endpoint
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Main page
│   └── globals.css                 # Global styles
├── components/
│   ├── header.tsx                  # Navigation header
│   ├── hero.tsx                    # Hero section with CTA
│   ├── services.tsx                # Service packages
│   ├── about.tsx                   # Team and company info
│   ├── gallery.tsx                 # Photo gallery
│   ├── contact.tsx                 # Contact form
│   ├── footer.tsx                  # Footer with links
│   └── ui/                         # shadcn/ui components
├── public/
│   └── images/                     # Hero and gallery images
└── package.json                    # Dependencies
```

Enjoy your new paragliding business website! 🪂
