import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Service selection is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const sheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (sheetWebhookUrl) {
      // Prepend ' to phone if it starts with + so Google Sheets treats it as text, not a formula
      const safePhone = validatedData.phone 
        ? (validatedData.phone.startsWith("+") ? `'${validatedData.phone}` : validatedData.phone) 
        : "N/A";

      try {
        // Forward lead to Google Apps Script Webhook with 8s timeout and follow redirects
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const response = await fetch(sheetWebhookUrl, {
          method: "POST",
          redirect: "follow",
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString(),
            ...validatedData,
            phone: safePhone,
          }),
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          console.error("Google Sheets webhook response status:", response.status);
        }
      } catch (webhookErr) {
        // Log webhook error without crashing user submission
        console.error("Google Sheets webhook forwarding error:", webhookErr);
      }
    } else {
      console.log("-----------------------------------------");
      console.log("📝 NEW LEAD RECEIVED (Configure GOOGLE_SHEET_WEBHOOK_URL in .env.local):");
      console.log(validatedData);
      console.log("-----------------------------------------");
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
