import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with a fallback for build time
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_for_build');

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  deviceType: z.string().min(1, 'Please select a device type'),
  deviceModel: z.string().optional(),
  issueDescription: z.string().optional(), // Made optional for contact page form
  location: z.string().optional(), // Made optional for contact page form
  preferredDateTime: z.string().optional(),
  serviceTier: z.enum(['standard', 'premium', 'elite']).default('standard'),
  formSource: z.string().default('contact-page'),
});

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder_for_build') {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        {
          success: false,
          message: 'Email service not configured. Please call us directly at +91-8105955009',
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    const {
      name,
      phone,
      email,
      deviceType,
      deviceModel,
      issueDescription,
      location,
      preferredDateTime,
      serviceTier,
      formSource,
    } = validatedData;

    // Determine lead source label for tracking
    const leadSourceLabel = formSource === 'contact-page' ? 'Website Lead' :
                           formSource.includes('landing') ? 'Paid Lead' :
                           'Lead';

    // Email to business
    const { data: businessEmailData, error: businessEmailError } = await resend.emails.send({
      from: 'FIXplanet Leads <onboarding@resend.dev>',
      to: ['info.fixplanet@gmail.com'], // Updated to user's preferred email
      subject: `🔔 ${leadSourceLabel} - ${deviceType}${location ? ` in ${location}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #2D3436; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1A2F4F; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #F5F7FA; padding: 20px; }
              .section { background: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; }
              .label { font-weight: bold; color: #1A2F4F; }
              .value { color: #2D3436; margin-top: 5px; }
              .urgent { color: #EF4444; font-weight: bold; }
              .tier-badge { display: inline-block; padding: 5px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; }
              .tier-standard { background: #E1E8ED; color: #1A2F4F; }
              .tier-premium { background: #0A7D7F; color: white; }
              .tier-elite { background: #B8935E; color: white; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Service Request</h2>
              </div>
              <div class="content">
                <div class="section">
                  <p class="urgent">⏰ ACTION REQUIRED: Call customer within 15 minutes</p>
                </div>

                <div class="section">
                  <h3 style="margin-top: 0;">Customer Details</h3>
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                  <div class="label" style="margin-top: 10px;">Phone:</div>
                  <div class="value">${phone}</div>
                  <div class="label" style="margin-top: 10px;">Email:</div>
                  <div class="value">${email}</div>
                </div>

                <div class="section">
                  <h3 style="margin-top: 0;">Device Information</h3>
                  <div class="label">Type:</div>
                  <div class="value">${deviceType}</div>
                  ${deviceModel ? `
                    <div class="label" style="margin-top: 10px;">Model:</div>
                    <div class="value">${deviceModel}</div>
                  ` : ''}
                  ${issueDescription ? `
                    <div class="label" style="margin-top: 10px;">Issue:</div>
                    <div class="value">${issueDescription}</div>
                  ` : ''}
                </div>

                ${location || preferredDateTime || serviceTier !== 'standard' ? `
                <div class="section">
                  <h3 style="margin-top: 0;">Service Details</h3>
                  ${location ? `
                    <div class="label">Location:</div>
                    <div class="value">${location}</div>
                  ` : ''}
                  ${preferredDateTime ? `
                    <div class="label" style="margin-top: 10px;">Preferred Time:</div>
                    <div class="value">${preferredDateTime}</div>
                  ` : ''}
                  ${serviceTier !== 'standard' ? `
                    <div class="label" style="margin-top: 10px;">Service Tier:</div>
                    <div class="value">
                      <span class="tier-badge tier-${serviceTier}">
                        ${serviceTier.charAt(0).toUpperCase() + serviceTier.slice(1)}
                      </span>
                    </div>
                  ` : ''}
                </div>
                ` : ''}

                <div class="section">
                  <div class="label">Lead Source:</div>
                  <div class="value"><strong>${leadSourceLabel}</strong> (${formSource})</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Check if business email failed
    if (businessEmailError) {
      console.error('Business email error:', businessEmailError);
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send email notification. Please call us directly at +91-8105955009',
          error: businessEmailError.message,
        },
        { status: 500 }
      );
    }

    console.log('Business email sent successfully:', businessEmailData?.id);

    // Confirmation email to customer
    const { data: customerEmailData, error: customerEmailError } = await resend.emails.send({
      from: 'FIXplanet <onboarding@resend.dev>',
      to: email,
      subject: 'Service Request Received - FIXplanet Bangalore',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #2D3436; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1A2F4F; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
              .teal { color: #0A7D7F; }
              .content { background: #F5F7FA; padding: 30px; }
              .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; }
              .section h3 { margin-top: 0; color: #1A2F4F; }
              .highlight { background: #0A7D7F; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; }
              .detail-row { margin: 10px 0; }
              .label { font-weight: bold; color: #1A2F4F; }
              .footer { text-align: center; color: #697386; font-size: 12px; padding: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">fix<span class="teal">planet</span></div>
                <p style="margin: 0;">Service Request Received</p>
              </div>
              <div class="content">
                <div class="section">
                  <p>Hi <strong>${name}</strong>,</p>
                  <p>Thank you for choosing FIXplanet! We've received your service request for your ${deviceType}.</p>
                </div>

                <div class="highlight">
                  <h3 style="margin: 0; font-size: 18px;">📱 What Happens Next:</h3>
                  <ul style="margin: 10px 0; padding-left: 20px;">
                    <li>Our team will call you at <strong>${phone}</strong> within 15 minutes</li>
                    <li>We'll confirm your location and preferred time</li>
                    <li>Provide exact pricing after understanding the issue</li>
                    <li>Schedule your service at your convenience</li>
                  </ul>
                </div>

                <div class="section">
                  <h3>📋 Your Request Details:</h3>
                  <div class="detail-row">
                    <span class="label">Device:</span> ${deviceType}${deviceModel ? ` (${deviceModel})` : ''}
                  </div>
                  ${issueDescription ? `
                  <div class="detail-row">
                    <span class="label">Issue:</span> ${issueDescription}
                  </div>
                  ` : ''}
                  ${location ? `
                  <div class="detail-row">
                    <span class="label">Location:</span> ${location}
                  </div>
                  ` : ''}
                  ${serviceTier !== 'standard' ? `
                  <div class="detail-row">
                    <span class="label">Service Tier:</span> ${serviceTier.charAt(0).toUpperCase() + serviceTier.slice(1)}
                  </div>
                  ` : ''}
                </div>

                <div class="section">
                  <h3>⏰ Response Time: 15 minutes guaranteed</h3>
                  <h3>🛡️ Warranty: 12 months on all work</h3>
                  <h3>📍 Service: At your doorstep</h3>
                </div>

                <div class="section" style="background: #F5F7FA; border: 2px dashed #0A7D7F;">
                  <p style="margin: 0; text-align: center;">
                    <strong>Questions? Need immediate assistance?</strong><br>
                    Reply to this email or WhatsApp us at <strong>${process.env.NEXT_PUBLIC_PHONE || '+91-XXXX-XXXXXX'}</strong>
                  </p>
                </div>
              </div>

              <div class="footer">
                <p><strong>FIXplanet</strong><br>
                Bangalore's Trusted Apple Care Specialists</p>
                <p>fixplanet.in | ${process.env.NEXT_PUBLIC_PHONE || '+91-XXXX-XXXXXX'}<br>
                Serving Koramangala, Indiranagar, Whitefield & more</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Check if customer email failed (non-critical, we still succeeded with business email)
    if (customerEmailError) {
      console.error('Customer confirmation email error:', customerEmailError);
      // Still return success since business email went through
    } else {
      console.log('Customer confirmation email sent successfully:', customerEmailData?.id);
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
          device: deviceType,
          model: deviceModel || '',
          issue: issueDescription || '',
          name,
          phone,
          email,
          location: location || '',
          source: leadSourceLabel,
          landingPage: formSource,
          preferredDateTime: preferredDateTime || '',
          serviceTier: serviceTier || 'standard',
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
      {
        success: true,
        message: 'Service request submitted successfully. We\'ll contact you within 15 minutes.',
        emailId: businessEmailData?.id,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit request. Please try again or call us directly.',
      },
      { status: 500 }
    );
  }
}
