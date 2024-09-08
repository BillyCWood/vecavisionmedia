import { EmailTemplate } from '../../emails/email-template';
import { Resend } from 'resend';

require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request, res:Response) {
  
  // set rate limit
  
  try {
    const { fname, lname, email, phone, org, message } = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'billyc.wood4@gmail.com',
      subject: 'Testing',
      react: EmailTemplate({ fname, lname, email, phone, org, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
