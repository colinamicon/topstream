import { Resend } from 'resend';
import type { APIRoute } from 'astro';

const resendApiKey = import.meta.env.PUBLIC_RESEND_API_KEY;
const resend = new Resend(resendApiKey);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Basic validation
  if (!name || !email || !message) {
    return new Response('All fields are required', { status: 400 });
  }

  try {
    // Send email using Resend API
    const { data, error } = await resend.emails.send({
      from: 'tim@topstreammedia.com',
      to: ['tim@topstreammedia.com'], // Ensure the 'to' field is an array
      subject: `Contact form submission from ${name}`,
      replyTo: [email], // Correctly use 'replyTo'
      html: `<strong>${message}</strong>`, // Use HTML content
    });

    // Handle the response from the email sending operation
    if (error) {
      console.error('Error sending email:', error);
      return new Response('Failed to send email', { status: 500 });
    } else {
      console.log('Email sent successfully:', data);
      return new Response('Email sent successfully', { status: 200 });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Error sending email', { status: 500 });
  }
};