import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { TeamEmail, ClientEmail } from '@/app/emails/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);
const emailUser = String(process.env.EMAIL_USER); 

export async function POST(req: Request) {
  try {
    
    const body = await req.json();
    const { fullName, email, mobile, serviceType, description, address } = body;

    //Required fields
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
    
    //Templates
    const teamEmail = TeamEmail({ fullName, email, mobile, serviceType, description, address, formattedDate })
    const clientEmail = ClientEmail(fullName)

    // Send both emails in parallel
    await Promise.all([
      //Email to YOUR TEAM (notification)
      
      resend.emails.send({
        from: `Everything Electrical Sydney <${emailUser}>`,
        //change back to previous
        to: emailUser,
        replyTo: email,
        subject: `New message from ${fullName}`,
        html: teamEmail
      }),
      
      //Email to THE USER (confirmation)
      resend.emails.send({
        from: `Everything Electrical Sydney <${emailUser}>`,
        to: [email],
        replyTo: emailUser,
        subject: `Thanks for contacting Everything Electrical!`,
        html: clientEmail
      })
    ]);

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