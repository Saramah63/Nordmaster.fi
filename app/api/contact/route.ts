import nodemailer from 'nodemailer';

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  try {
    const { name, email, message, phone } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return Response.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }

    if (!process.env.ZOHO_SMTP_USER || !process.env.ZOHO_SMTP_PASS || !process.env.CONTACT_TO) {
      return Response.json({ ok: false, error: 'Server not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Nordmaster Group <${process.env.ZOHO_SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Service inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\n\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: 'Send failed' }, { status: 500 });
  }
}
