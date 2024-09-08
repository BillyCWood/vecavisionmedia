import { EmailTemplate } from '../../emails/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request) {
  try {
    //const {firstName, lastName, email, phone, org, msg} = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'onboarding.resend.dev',
      to: 'billyc.wood4@gmail.com',
      subject: 'TESTING MWAHAHAHA',
      react: EmailTemplate({ firstName:"billy", lastName: "wood", email:"rowly.dev@gmail.com", phone:"1234567", org:"vvm", msg:"hi" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
