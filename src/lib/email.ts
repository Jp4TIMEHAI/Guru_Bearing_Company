import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
// Make sure to add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

// Replace this with your actual receiving email address
// Important: When using Resend's free tier, this MUST be the email address you signed up with!
const TO_EMAIL = process.env.RECEIVER_EMAIL || 'gurubearingcompany@gmail.com'; 

export async function sendContactEmail(data: { fname: string; lname: string; email: string; phone?: string; msg: string }) {
    try {
        const { data: responseData, error } = await resend.emails.send({
            from: 'Guru Bearing <onboarding@resend.dev>', // resend.dev is the default test domain
            to: [TO_EMAIL],
            subject: `New Contact Form Submission from ${data.fname} ${data.lname}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${data.fname} ${data.lname}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
                <br />
                <h3>Message:</h3>
                <p>${data.msg.replace(/\n/g, '<br/>')}</p>
            `
        });

        if (error) {
            console.error('Resend API Error:', error);
            return { success: false, error };
        }
        return { success: true, data: responseData };
    } catch (error) {
        console.error('Failed to send contact email:', error);
        return { success: false, error };
    }
}

export async function sendQuoteEmail(data: { name: string; email: string; phone: string; product: string; quantity: string; message: string }) {
    try {
        const { data: responseData, error } = await resend.emails.send({
            from: 'Guru Bearing <onboarding@resend.dev>',
            to: [TO_EMAIL],
            subject: `New Quote Request: ${data.product} from ${data.name}`,
            html: `
                <h2>New Quote Request</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <br />
                <h3>Requirements:</h3>
                <p><strong>Product:</strong> ${data.product}</p>
                <p><strong>Quantity:</strong> ${data.quantity}</p>
                <br />
                <h3>Message/Technical Requirements:</h3>
                <p>${data.message.replace(/\n/g, '<br/>')}</p>
            `
        });

        if (error) {
            console.error('Resend API Error:', error);
            return { success: false, error };
        }
        return { success: true, data: responseData };
    } catch (error) {
        console.error('Failed to send quote email:', error);
        return { success: false, error };
    }
}
