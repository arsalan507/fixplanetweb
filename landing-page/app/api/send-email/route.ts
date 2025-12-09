import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { device, model, issue, name, phone, source, landingPage } = body;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'FIXplanet Leads <onboarding@resend.dev>',
      to: ['hello@fixplanet.in'],
      subject: `New Lead from ${source || 'Landing Page'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: #f9fafb;
              padding: 30px;
              border: 1px solid #e5e7eb;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background: white;
              border-radius: 6px;
              border-left: 4px solid #667eea;
            }
            .field-label {
              font-weight: bold;
              color: #667eea;
              font-size: 12px;
              text-transform: uppercase;
              margin-bottom: 5px;
            }
            .field-value {
              font-size: 16px;
              color: #1f2937;
            }
            .footer {
              background: #1f2937;
              color: white;
              padding: 15px;
              border-radius: 0 0 8px 8px;
              font-size: 12px;
              text-align: center;
            }
            .urgent {
              background: #fef3c7;
              border-left-color: #f59e0b;
              padding: 15px;
              border-radius: 6px;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">🔔 New Lead Received!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">From ${source || 'Landing Page'}</p>
            </div>

            <div class="content">
              <div class="urgent">
                <strong>⚡ Action Required:</strong> New customer inquiry - contact within 1 hour for best conversion rate!
              </div>

              <div class="field">
                <div class="field-label">Customer Name</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">Contact Number</div>
                <div class="field-value"><a href="tel:+91${phone}" style="color: #667eea; text-decoration: none;">+91 ${phone}</a></div>
              </div>

              <div class="field">
                <div class="field-label">Device Type</div>
                <div class="field-value">${device}</div>
              </div>

              <div class="field">
                <div class="field-label">Device Model</div>
                <div class="field-value">${model}</div>
              </div>

              <div class="field">
                <div class="field-label">Issue Reported</div>
                <div class="field-value">${issue}</div>
              </div>

              ${landingPage ? `
              <div class="field">
                <div class="field-label">Landing Page</div>
                <div class="field-value"><a href="${landingPage}" style="color: #667eea; word-break: break-all;">${landingPage}</a></div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">Submission Time</div>
                <div class="field-value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
              </div>

              <div style="margin-top: 30px; padding: 20px; background: #dbeafe; border-radius: 6px; text-align: center;">
                <p style="margin: 0 0 15px 0; font-weight: bold; color: #1e40af;">Quick Actions</p>
                <a href="tel:+91${phone}" style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; margin: 5px;">📞 Call Now</a>
                <a href="https://wa.me/91${phone}" style="display: inline-block; background: #25D366; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; margin: 5px;">💬 WhatsApp</a>
              </div>
            </div>

            <div class="footer">
              <p style="margin: 0;">FIXplanet Lead Management System</p>
              <p style="margin: 5px 0 0 0; opacity: 0.7;">Automated notification from landing page form</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    // Sync lead to CRM
    try {
      console.log('📤 Syncing lead to CRM...');

      const crmResponse = await fetch(process.env.CRM_API_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': process.env.CRM_API_KEY!,
          'x-vercel-protection-bypass': process.env.CRM_API_KEY!,
        },
        body: JSON.stringify({
          device,
          model,
          issue,
          name,
          phone,
          source: source || 'Landing Page',
          landingPage
        }),
      });

      const crmResult = await crmResponse.json();

      if (crmResult.success) {
        console.log('✅ Lead synced to CRM:', crmResult.lead_id);
      } else {
        console.error('❌ CRM sync failed:', crmResult.error);
        // Don't fail the whole request - email was already sent
      }
    } catch (crmError) {
      console.error('❌ Error syncing to CRM:', crmError);
      // Don't fail the whole request - email was already sent
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error },
      { status: 500 }
    );
  }
}
