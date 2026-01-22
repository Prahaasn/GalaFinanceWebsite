import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = "re_3ksrjqMm_CHoSMYp9PpujQ9J52gJmwokc";

interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  loan_amount?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const submission: ContactSubmission = await req.json();

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #007acc; border-bottom: 3px solid #007acc; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <p style="color: #666; font-size: 14px;">From Gala Finance Group Website</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Name:</td>
              <td style="padding: 10px 0; color: #666;">${submission.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 10px 0; color: #007acc;">${submission.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 10px 0; color: #666;">${submission.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Loan Type:</td>
              <td style="padding: 10px 0; color: #666;">${submission.company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Loan Amount:</td>
              <td style="padding: 10px 0; color: #666;">${submission.loan_amount || 'Not provided'}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin: 20px 0;">
          <p style="font-weight: bold; color: #333; margin-bottom: 10px;">Message:</p>
          <div style="background: white; border-left: 4px solid #007acc; padding: 15px; color: #666;">
            ${submission.message || 'No message provided'}
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
          <p>Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'full', timeStyle: 'long' })}</p>
        </div>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Gala Finance Group <onboarding@resend.dev>',
        to: ['info@galafinancegroup.com'],
        subject: `New Contact Form Submission from ${submission.name}`,
        html: emailHtml,
        reply_to: submission.email
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend API error:', resendData);
      throw new Error(`Failed to send email: ${JSON.stringify(resendData)}`);
    }

    console.log('Email sent successfully:', resendData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: resendData.id
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact submission:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});