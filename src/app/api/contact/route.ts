import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

/**
 * Contact Form API Route
 * Handles form submissions and sends emails using nodemailer
 */

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "সব তথ্য পূরণ করুন" }, { status: 400 });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content to send to you
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "dev.rana.cse@gmail.com",
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>নতুন Contact Form জমা</h2>
        <p><strong>নাম:</strong> ${name}</p>
        <p><strong>ইমেইল:</strong> ${email}</p>
        <p><strong>বিষয়:</strong> ${subject}</p>
        <p><strong>বার্তা:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>এই ইমেইলটি আপনার ওয়েবসাইটের contact form থেকে এসেছে।</em></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to user
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "আমরা আপনার বার্তা পেয়েছি",
      html: `
        <h2>ধন্যবাদ ${name},</h2>
        <p>আমরা আপনার বার্তা সফলভাবে পেয়েছি। শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
        <p><strong>আপনার বার্তা:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>ধন্যবাদ!</p>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      {
        success: true,
        message: "ইমেইল সফলভাবে পাঠানো হয়েছে",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);

    return NextResponse.json(
      {
        error: "ইমেইল পাঠাতে সমস্যা হয়েছে। পরে চেষ্টা করুন।",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
