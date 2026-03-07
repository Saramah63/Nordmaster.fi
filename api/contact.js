import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    let body = req.body || {};
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        res.status(400).json({ ok: false, error: 'Invalid request body' });
        return;
      }
    }

    const { name, email, phone, message } = body || {};
    const cleanName = String(name || '').trim();
    const cleanEmail = String(email || '').trim();
    const cleanPhone = String(phone || '').trim();
    const cleanMessage = String(message || '').trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      res.status(400).json({ ok: false, error: 'Missing required fields' });
      return;
    }

    const user = process.env.ZOHO_SMTP_USER;
    const pass = process.env.ZOHO_SMTP_PASS;
    const to = process.env.CONTACT_TO || 'support@nordmastergroup.com';

    if (!user || !pass) {
      res.status(500).json({ ok: false, error: 'Email service not configured' });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: user,
      to,
      replyTo: cleanEmail,
      subject: `Nordmaster Group — ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone || '-'}\n\nMessage:\n${cleanMessage}`,
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Server error' });
  }
}
