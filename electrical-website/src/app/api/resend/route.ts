import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log(resend)
const emailUser = String(process.env.EMAIL_USER); // Your team's email

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, mobile, serviceType, description, address } = body;

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-AU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    // Send both emails in parallel using Promise.all()
    const [teamEmailResult, userEmailResult] = await Promise.all([
      //Email to YOUR TEAM (notification)
      
      resend.emails.send({
        from: `Everything Electrical Sydney <${emailUser}>`,
        to: [emailUser],
        replyTo: email,
        subject: `New message from ${fullName}`,
        html: `
            <!doctype html>
            <html lang="en" style="margin: 0;padding: 0;box-sizing: border-box;">
              <head style="margin: 0;padding: 0;box-sizing: border-box;">
                <meta charset="UTF-8" style="margin: 0;padding: 0;box-sizing: border-box;">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" style="margin: 0;padding: 0;box-sizing: border-box;">
                <title style="margin: 0;padding: 0;box-sizing: border-box;">Everything Electrical Sydney - Professional Services</title>
                <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
              </head>
              <body style="margin: 0;padding: 0px 0;box-sizing: border-box;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;line-height: 1.6;color: #333333;background-color: #f5f5f5;">
                <div class="email-container" style="margin: 0 auto;padding: 0;box-sizing: border-box;max-width: 650px;background-color: #ffffff;box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);border-radius: 8px;overflow: hidden;">
                  <div class="header" style="margin: 0;padding: 10px 10px 0px 10px;box-sizing: border-box;text-align: center;position: relative;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td align="center" style="padding: 20px;">
                          <img src="https://www.everythingelectricalsydney.com.au/images/logos/email.png" 
                              alt="Everything Electrical Sydney - Professional Electrical Services" 
                              width="300" 
                              style="display: block; width: 100%; max-width: 300px; height: auto; border: 0;" />
                        </td>
                      </tr>
                    </table>

                  </div>

                  <div class="content" style="margin: 0;padding: 10px 35px 10px;box-sizing: border-box;background-color: #ffffff;">
                    <div class="date" style="margin: 0;padding: 0;box-sizing: border-box;text-align: right;font-size: 13px;color: #666666;margin-bottom: 30px;padding-bottom: 15px;border-bottom: 2px solid #f0f0f0;font-weight: 500;">Date: ${formattedDate}</div>

                    <div class="main-content" style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 35px;">
                        <h2 style="margin: 0;padding: 0;box-sizing: border-box;color: #1a1a1a;font-size: 24px;margin-bottom: 25px;font-weight: 700;text-align: center;position: relative;padding-bottom: 15px;">Client Contact Form Submitted</h2>

                        <p style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 18px;font-size: 16px;color: #444444;text-align: justify;line-height: 1.7;"><b style="margin: 0;padding: 0;box-sizing: border-box;color: #da1818;font-weight: 600;">Dear Team,</b></p>
                        
                        <p style="margin: 0; padding: 0; box-sizing: border-box; margin-bottom: 18px; font-size: 16px; color: #444444; text-align: justify; line-height: 1.7;">
                          A potential client named 
                          <b style="color: #da1818; font-weight: 600;">${fullName}</b> has requested 
                          <b>${serviceType}</b> services.
                          They are located in <b>${address}</b>.

                        </p>

                        
                        <div class="highlight-box" style="margin: 25px 0;padding: 20px 25px;box-sizing: border-box;background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);border-left: 5px solid #da1818;border-radius: 0 8px 8px 0;box-shadow: 0 2px 8px rgba(218, 24, 24, 0.1);">
                          <p style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 18px;font-size: 16px;color: #444444;text-align: justify;line-height: 1.7;"><b style="margin: 0;padding: 0;box-sizing: border-box;color: #da1818;font-weight: 600;">Message: </b> ${description}</p>
                          <p style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 18px;font-size: 16px;color: #444444;text-align: justify;line-height: 1.7;">
                            <b style="margin: 0;padding: 0;box-sizing: border-box;color: #da1818;font-weight: 600;">Email: </b> 
                            <a href="mailto:${email}">${email}</a>
                          </p>

                        <p style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 18px;font-size: 16px;color: #444444;text-align: justify;line-height: 1.7;">
                          <b style="margin: 0;padding: 0;box-sizing: border-box;color: #da1818;font-weight: 600;">Mobile: </b> 
                          <a href="tel:${mobile}">${mobile}</a>
                        </p>

                        </div>
                        
                        
                    </div>

                    <div class="divider" style="margin: 30px 0;padding: 0;box-sizing: border-box;height: 2px;background: linear-gradient(90deg, transparent, #e9ecef, transparent);"></div>
                </div>
              </body>
            </html>

            `
      }),
      
      //Email to THE USER (confirmation)
      resend.emails.send({
        from: `Everything Electrical Sydney <${emailUser}>`,
        to: [email],
        subject: `Thanks for contacting Everything Electrical!`,
        html: `
            <!doctype html>
            <html lang="en" style="margin: 0;padding: 0;box-sizing: border-box;">
              <head style="margin: 0;padding: 0;box-sizing: border-box;">
                <meta charset="UTF-8" style="margin: 0;padding: 0;box-sizing: border-box;">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" style="margin: 0;padding: 0;box-sizing: border-box;">
                <title style="margin: 0;padding: 0;box-sizing: border-box;">Everything Electrical Sydney - Professional Services</title>
                <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
              </head>
              <body style="margin: 0;padding: 0px 0;box-sizing: border-box;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;line-height: 1.6;color: #333333;background-color: #f5f5f5;">
                <div class="email-container" style="margin: 0 auto;padding: 0;box-sizing: border-box;max-width: 650px;background-color: #ffffff;box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);border-radius: 8px;overflow: hidden;">
                  <div class="header" style="margin: 0;padding: 10px 10px 0px 10px;box-sizing: border-box;text-align: center;position: relative;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td align="center" style="padding: 20px;">
                          <img src="https://www.everythingelectricalsydney.com.au/images/logos/email.png" 
                              alt="Everything Electrical Sydney - Professional Electrical Services" 
                              width="300" 
                              style="display: block; width: 100%; max-width: 300px; height: auto; border: 0;" />
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div class="content" style="margin: 0;padding: 10px 35px 10px;box-sizing: border-box;background-color: #ffffff;">
                    <div class="date" style="margin: 0;padding: 0;box-sizing: border-box;text-align: right;font-size: 13px;color: #666666;margin-bottom: 30px;padding-bottom: 15px;border-bottom: 2px solid #f0f0f0;font-weight: 500;">12/12/12</div>

                    <div class="main-content" style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 35px;">
                        <h2 style="margin: 0;padding: 0;box-sizing: border-box;color: #1a1a1a;font-size: 24px;margin-bottom: 25px;font-weight: 700;text-align: center;position: relative;padding-bottom: 15px;">Professional Electrical Services</h2>

                        <p style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 18px;font-size: 16px;color: #444444;text-align: justify;line-height: 1.7;"><b style="margin: 0;padding: 0;box-sizing: border-box;color: #da1818;font-weight: 600;">Dear ${fullName},</b></p>
                        
                        <p style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 18px;font-size: 16px;color: #444444;text-align: justify;line-height: 1.7;">Thank you for contacting <b style="margin: 0;padding: 0;box-sizing: border-box;color: #da1818;font-weight: 600;">Everything Electrical Sydney</b>. 
                          We have received your inquiry and appreciate your interest in our professional electrical services.
                          One of our team members will respond within 24 hours.
                        
                        </p>
                        
                        <div class="highlight-box" style="margin: 25px 0;padding: 20px 25px;box-sizing: border-box;background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);border-left: 5px solid #da1818;border-radius: 0 8px 8px 0;box-shadow: 0 2px 8px rgba(218, 24, 24, 0.1);">
                          <p style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 18px;font-size: 16px;color: #444444;text-align: justify;line-height: 1.7;"><b style="margin: 0;padding: 0;box-sizing: border-box;color: #da1818;font-weight: 600;">Everything Electrical Sydney</b> is proud to serve the Greater Sydney area with licensed, professional electrical services you can rely on.</p>
                        </div>
                        
                        <p style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 18px;font-size: 16px;color: #444444;text-align: justify;line-height: 1.7;">For urgent requests, call us directly on <a href="tel:0449003526" style="margin: 0;padding: 0;box-sizing: border-box;">0449 003 526</a>.</p>
                        
                        <p style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 18px;font-size: 16px;color: #444444;text-align: justify;line-height: 1.7;"><b style="margin: 0;padding: 0;box-sizing: border-box;color: #da1818;font-weight: 600;">Kind Regards,</b><br style="margin: 0;padding: 0;box-sizing: border-box;">
                        <em style="margin: 0;padding: 0;box-sizing: border-box;">The Everything Electrical Sydney Team</em></p>
                        
                    </div>

                    <div class="disclaimer" style="margin: 25px 0;padding: 15px 20px;box-sizing: border-box;background-color: #03a403;border: 1px solid #6fff0998;border-radius: 6px;text-align: center;">
                      <p style="margin: 0;padding: 0;box-sizing: border-box;color: #f9f9f8;font-size: 14px;font-style: italic;font-weight: 600;"><b style="margin: 0;padding: 0;box-sizing: border-box;">This is an automated confirmation message. Please do not reply to this email.</b></p>
                    </div>

                    <div class="divider" style="margin: 30px 0;padding: 0;box-sizing: border-box;height: 2px;background: linear-gradient(90deg, transparent, #e9ecef, transparent);"></div>

                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); background-color: #ffffff;">
                    <thead>
                      <tr>
                        <th style="padding: 18px 20px; background: #2c2c2c; color: #ffffff; text-align: left; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Service Category</th>
                        <th style="padding: 18px 20px; background: #2c2c2c; color: #ffffff; text-align: left; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Professional Services Offered</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="padding: 18px 20px; font-weight: 700; color: #444444; font-size: 15px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Residential Services</td>
                        <td style="padding: 18px 20px; color: #444444; font-size: 15px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Electrical installations, switchboard upgrades, LED lighting, ceiling fans, safety inspections, home automation</td>
                      </tr>
                      <tr>
                        <td style="padding: 18px 20px; font-weight: 700; color: #444444; font-size: 15px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Commercial Services</td>
                        <td style="padding: 18px 20px; color: #444444; font-size: 15px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Office fit-outs, retail systems, emergency lighting, data cabling, commercial lighting, compliance audits</td>
                      </tr>
                      <tr>
                        <td style="padding: 18px 20px; font-weight: 700; color: #444444; font-size: 15px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Emergency Services</td>
                        <td style="padding: 18px 20px; color: #444444; font-size: 15px; border-bottom: 1px solid #e9ecef; vertical-align: top;">24/7 callouts, fault diagnosis, urgent repairs, outage restoration, hazard mitigation</td>
                      </tr>
                      <tr>
                        <td style="padding: 18px 20px; font-weight: 700; color: #444444; font-size: 15px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Maintenance Programs</td>
                        <td style="padding: 18px 20px; color: #444444; font-size: 15px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Preventive maintenance, test & tag, upgrades, inspections, energy audits</td>
                      </tr>
                    </tbody>
                  </table>

                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); background-color: #ffffff; margin-top: 20px">
                    <thead>
                      <tr>
                        <th style="padding: 18px 20px; background: #2c2c2c; color: #ffffff; text-align: left; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Contact</th>
                        <th style="padding: 18px 20px; background: #2c2c2c; color: #ffffff; text-align: left; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="padding: 18px 20px; font-weight: 700; color: #444444; font-size: 12px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Direct Phone:</td>
                        <td style="padding: 18px 20px; color: #444444; font-size: 12px; border-bottom: 1px solid #e9ecef; vertical-align: top;">
                          <a href="tel:0449003526" style="color: #da1818; text-decoration: none; font-weight: 600;">0449 003 526</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 18px 20px; font-weight: 700; color: #444444; font-size: 12px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Professional Email:</td>
                        <td style="padding: 18px 20px; color: #444444; font-size: 12px; border-bottom: 1px solid #e9ecef; vertical-align: top;">
                          <a href="mailto:info@everythingelectricalsydney.com.au" 
                            style="color: #da1818; text-decoration: none; font-weight: 600; word-break: break-word; word-wrap: break-word; display: inline-block;">
                            info@everythingelectricalsydney.com.au
                          </a>

                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 18px 20px; font-weight: 700; color: #444444; font-size: 12px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Official Website:</td>
                        <td style="padding: 18px 20px; color: #444444; font-size: 12px; border-bottom: 1px solid #e9ecef; vertical-align: top;">
                          <a href="https://www.everythingelectricalsydney.com.au" style="color: #da1818; text-decoration: none; font-weight: 600; word-break: break-word; word-wrap: break-word; display: inline-block;">www.everythingelectricalsydney.com.au</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 18px 20px; font-weight: 700; color: #444444; font-size: 12px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Service Coverage:</td>
                        <td style="padding: 18px 20px; color: #444444; font-size: 12px; border-bottom: 1px solid #e9ecef; vertical-align: top;">Greater Sydney Metropolitan Area & Surrounding Regions</td>
                      </tr>
                      
                    </tbody>
                  </table>
                    <div class="credentials" style="margin: 30px 0;padding: 25px 30px;box-sizing: border-box;background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);border-left: 6px solid #da1818;border-radius: 0 12px 12px 0;box-shadow: 0 4px 12px rgba(218, 24, 24, 0.1);">
                      <h4 style="margin: 0; padding: 0;box-sizing: border-box;color: #1a1a1a;font-size: 18px;margin-bottom: 15px;text-transform: uppercase;font-weight: 700;letter-spacing: 1px;">Professional Licenses & Certifications</h4>
                      <p style="margin: 0;padding: 0;box-sizing: border-box;color: #444444;font-size: 15px;margin-bottom: 8px;line-height: 1.6;font-weight: 500; font-size: 12px;">• <b style="margin: 0;padding: 0;box-sizing: border-box;">Australian Business Number (ABN):</b> 73 633 557 810</p>
                      <p style="margin: 0;padding: 0;box-sizing: border-box;color: #444444;font-size: 15px;margin-bottom: 8px;line-height: 1.6;font-weight: 500; font-size: 12px;">• <b style="margin: 0;padding: 0;box-sizing: border-box;">NSW Electrical Contractor License:</b> 342944C</p>
                      <p style="margin: 0;padding: 0;box-sizing: border-box;color: #444444;font-size: 15px;margin-bottom: 8px;line-height: 1.6;font-weight: 500; font-size: 12px;">• <b style="margin: 0;padding: 0;box-sizing: border-box;">Professional Insurance:</b> Fully Insured</p>
                    </div>
                  </div>
                </div>
              </body>
            </html>

            `
      })
    ]);

    
    console.log('Team email result:', teamEmailResult);
    console.log('User email result:', userEmailResult);

    return NextResponse.json(
      { 
        success: true, 
        message: "Emails sent successfully",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    );
  }
}