import { Resend } from 'resend';
import type { APIRoute } from "astro";


const resendApiKey = import.meta.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);
// resend.apiKeys.create({ name: 'Production' })

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData()
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;
    console.log(data);
    // Basic validation
    if (!name || !email || !message) {
        return new Response('All fields are required', { status: 400 });
    }

    try {
        // console.log(data)
        // Sending email using Resend
        await resend.emails.send({
            from: email, // Your verified sender email
            to: '[info@topstreammedia.com]', // Recipient email
            subject: `Contact form submission from ${name}`,
            text: message,
        });

        return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
        console.log('Resend API Key:', process.env.RESEND_API_KEY);
        console.error('Error sending email:', error);
        return new Response('Error sending email', { status: 500 });
    }
};

// export async function GET() {
//     try {
//         return new Response(JSON.stringify({ message: 'Send a POST request to this endpoint to send an email.' }), {
//             status: 200,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     } catch (error) {
//         console.error('Error handling GET request:', error);
//         return new Response(JSON.stringify({ success: false, message: 'Failed to handle GET request.' }), {
//             status: 500,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     }
// }