import { NextResponse } from 'next/server';
import { sendQuoteEmail } from '@/lib/email';
import { saveSubmission, QuoteSubmission } from '@/lib/store';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Server Console Log as per requirements
        console.log("=========================================");
        console.log("NEW QUOTE REQUEST RECEIVED:");
        console.log("Name:", body.name);
        console.log("Email:", body.email);
        console.log("Phone:", body.phone);
        console.log("Product:", body.product);
        console.log("Quantity:", body.quantity);
        console.log("Message:", body.message);
        console.log("=========================================");

        // 1. Send the email notification
        const emailResult = await sendQuoteEmail({
            name: body.name,
            email: body.email,
            phone: body.phone,
            product: body.product,
            quantity: body.quantity,
            message: body.message
        });

        // 2. (Optional) Also keep saving it locally for backup
        const submissionData: Omit<QuoteSubmission, 'id' | 'createdAt'> = {
            type: 'quote',
            name: body.name,
            email: body.email,
            phone: body.phone,
            product: body.product,
            quantity: body.quantity,
            message: body.message
        };
        saveSubmission(submissionData);

        if (emailResult.success) {
            return NextResponse.json({ success: true, message: "Quote request logged successfully." }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, message: "Error sending email request.", error: emailResult.error }, { status: 500 });
        }
    } catch (error) {
        console.error("Error processing quote request:", error);
        return NextResponse.json({ success: false, message: "Error processing request." }, { status: 500 });
    }
}
