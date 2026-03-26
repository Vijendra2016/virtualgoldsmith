import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { first_name, last_name, email, phone, client_type, service, message, location, source_page } = body;

  if (!first_name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Internal notification to contact@virtualgoldsmith.com
    await transporter.sendMail({
      from: `"${first_name} ${last_name}" <${email}>`,
      to: 'contact@virtualgoldsmith.com',
      subject: `New CAD Quote Request — ${location || 'Virtual Goldsmith'}`,
      html: `
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Client Type:</strong> ${client_type || 'Not provided'}</p>
        <p><strong>Service Needed:</strong> ${service || 'Not provided'}</p>
        <p><strong>Location:</strong> ${location || 'Not provided'}</p>
        <p><strong>Source Page:</strong> ${source_page || 'Not provided'}</p>
        <p><strong>Project Description:</strong><br/>${message}</p>
      `,
    });

    // Confirmation email to the customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Your CAD Project Inquiry — Virtual Goldsmith',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #fafafa;">
          <h2 style="color: #1a1a1a;">Hi ${first_name},</h2>
          <p style="font-size: 16px; color: #333;">
            Thank you for reaching out to Virtual Goldsmith. Todd has received your project inquiry and will personally review it and respond within <strong>1 business day</strong>.
          </p>
          <p style="font-size: 16px; color: #333;">Here's a summary of what you submitted:</p>
          <ul style="font-size: 16px; color: #333; padding-left: 20px;">
            <li><strong>Service:</strong> ${service || 'Not specified'}</li>
            <li><strong>Project Description:</strong> ${message}</li>
          </ul>
          <p style="font-size: 16px; color: #333;">We look forward to working with you!</p>
          <p style="font-size: 16px; color: #1a1a1a; margin-top: 30px;">
            — Todd &amp; the team at <strong>Virtual Goldsmith</strong>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Email error:', error.message);
      return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Failed to send email', error: 'Unknown error' }, { status: 500 });
  }
}
