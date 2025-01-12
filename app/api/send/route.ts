import { EmailTemplate } from '../../emails/email-template';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request, res:Response) {
  
  // set rate limit
  
  try {
    const { name, email, phone, org, message } = await request.json();
    const { data, error } = await resend.batch.send([
      {
        from: 'Veca Vision Media <noreply@vecavisionmedia.com>',
        to: ['veca.vision@gmail.com'],
        subject: 'New Contact Request from ' + name + '!',
        react: EmailTemplate({ name, email, phone, org, message }),
      },
      {
        from: 'Veca Vision Media <noreply@vecavisionmedia.com>',
        to: [email],
        subject: 'New Contact Request from ' + name + '!',
        react: EmailTemplate({ name, email, phone, org, message }),
      },
    
    ]);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
