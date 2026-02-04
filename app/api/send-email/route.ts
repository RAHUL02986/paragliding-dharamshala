import nodemailer from 'nodemailer'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {

    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'rahul.codexmatrix@gmail.com',
        pass: 'mvnw wvvt xntf fqai',
      },
    })

    // Verify connection
    await transporter.verify()

    // Send email to business
    await transporter.sendMail({
      from: 'rahul.codexmatrix@gmail.com',
      to: 'rahul.codexmatrix@gmail.com',
      subject: `New Inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #0d5a3d;">New Inquiry from Paraglide Dharamshala Website</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This is an automated email from your Paraglide Dharamshala website contact form.</p>
        </div>
      `,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: 'rahul.codexmatrix@gmail.com',
      to: email,
      subject: 'We Received Your Inquiry - Paraglide Dharamshala',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #0d5a3d;">Thank You for Contacting Us!</h2>
          
          <p>Hi ${escapeHtml(name)},</p>
          
          <p>We received your inquiry and appreciate your interest in Paraglide Dharamshala. Our team will review your message and get back to you within 24 hours.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Inquiry Details:</h3>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p>In the meantime, feel free to explore our website or reach out to us directly:</p>
          <ul>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Email:</strong> rahul.codexmatrix@gmail.com</li>
            <li><strong>Location:</strong> Dharamshala, Himachal Pradesh</li>
          </ul>
          
          <p>We look forward to providing you with an unforgettable paragliding experience!</p>
          
          <p style="margin-top: 30px;">Best regards,<br><strong>Paraglide Dharamshala Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This is an automated confirmation email. Please do not reply to this email.</p>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    if (error instanceof Error) {
      // Check for specific nodemailer errors
      if (error.message.includes('ECONNREFUSED')) {
        return NextResponse.json(
          { error: 'Email service temporarily unavailable. Please try again later.' },
          { status: 503 }
        )
      }
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { error: 'Email configuration error. Please contact administrator.' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
