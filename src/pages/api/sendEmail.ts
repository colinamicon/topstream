import { Resend } from 'resend';
import type { APIRoute } from 'astro';

const resendApiKey = import.meta.env.PUBLIC_RESEND_API_KEY;
const resend = new Resend(resendApiKey);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name') as string;
  const email = data.get('email') as string;
  const message = data.get('message') as string;
  // Basic validation
  if (!name || !email || !message) {
    return new Response('All fields are required', { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'tim@topstreammedia.com', // Your verified sender email
      to: '[tim@topstreammedia.com]', // Recipient email
      subject: `Contact form submission from ${name}`,
      replyTo: email,
      text: message,
      headers: {
        // Adding headers here
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`, // Use the API key
      },
    });

    console.log(data);
    return new Response('Email sent successfully!', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Error sending email', { status: 500 });
  }
};
