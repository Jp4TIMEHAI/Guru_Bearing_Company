import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { saveSubmission, ContactSubmission } from '@/lib/store';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fname, lname, email, phone, msg } = body;

        // Basic validation
        if (!fname || !lname || !email || !msg) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 1. Send the email notification
        const emailResult = await sendContactEmail({ fname, lname, email, phone, msg });
        
        // 2. (Optional) Also keep saving it locally for backup
        const submissionData: Omit<ContactSubmission, 'id' | 'createdAt'> = {
            type: 'contact',
            fname,
            lname,
            email,
            phone,
            message: msg
        };
        saveSubmission(submissionData);

        if (emailResult.success) {
            return NextResponse.json({ success: true, message: 'Message sent successfully' });
        } else {
            return NextResponse.json(
                { error: 'Failed to send message', details: emailResult.error },
                { status: 500 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid request' },
            { status: 400 }
        );
    }
}
