import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are the AI Assistant for "Guru Bearing Company". Your role is to help customers inquire about bearings, answer their questions, and collect their information for a quotation.

Company Info:
- Industry: Industrial bearing supplier
- Products: Ball Bearings, Roller Bearings, Industrial Bearings, Automotive Bearings
- Services: Bulk bearing supply, Industrial machinery components, Wholesale distribution, Industrial procurement support

Objective:
1. Be helpful and professional.
2. If they ask about products, explain what you offer and ask for their required model/quantity.
3. Once they seem interested, politely ask for their Name, Phone, exact Product, and Quantity to proceed with a quote.
4. Keep responses concise and focused on industrial B2B sales.
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            // Fallback Mock System if no API key is provided
            console.warn("OPENAI_API_KEY is missing. Using mock response.");

            const lastMessage = messages[messages.length - 1].content.toLowerCase();
            let reply = "We supply a wide range of industrial and automotive bearings. To provide an accurate quote, could you please specify the bearing type and quantity you need?";

            if (lastMessage.includes("skf") || lastMessage.includes("fag") || lastMessage.includes("timken")) {
                reply = "Yes, we supply various industrial bearings including premium compatible models. What quantity do you require?";
            } else if (lastMessage.includes("buy") || lastMessage.includes("quote") || lastMessage.includes("quantity") || lastMessage.includes("100") || lastMessage.includes("50")) {
                reply = "Excellent. Could you please provide your Name and Phone number so our engineering sales team can prepare an official quotation for you?";
            } else if (lastMessage.includes("name is") || /[0-9]{8,15}/.test(lastMessage)) {
                reply = "Thank you for the information! Our team will contact you shortly with the quotation. Is there anything else I can help you with?";
            } else if (lastMessage.includes("hello") || lastMessage.includes("hi")) {
                reply = "Hello! Welcome to Guru Bearing Company. Are you looking for a specific type of bearing for your operations today?";
            }

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 800));
            return NextResponse.json({ reply });
        }

        // Call actual OpenAI API
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...messages
                ],
                temperature: 0.7,
                max_tokens: 150,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("OpenAI API error:", errorData);
            throw new Error("Failed to fetch from OpenAI");
        }

        const data = await response.json();
        return NextResponse.json({ reply: data.choices[0].message.content });

    } catch (error) {
        console.error("Chat API error:", error);
        return NextResponse.json(
            { reply: "I'm currently experiencing a technical issue. Please contact sales@gurubearing.example for assistance." },
            { status: 500 }
        );
    }
}
