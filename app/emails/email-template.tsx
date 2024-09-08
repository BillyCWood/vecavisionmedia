import * as React from 'react';
import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Text,
  } from "@react-email/components";
  


interface EmailTemplateProps { 
    fname: string;
    lname: string;
    email: string;
    phone: string;
    org: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fname, lname, email, phone, org, message
}) => (
    <div className='flex flex-col gap-y-6 justify-center'>
        <h1>Welcome, { fname } { lname }</h1>
        <p>Here is the info you submitted:</p>
        <p>{ email }</p>
        <p>{ phone }</p>
        <p>{ org }</p>
        <p>{ message }</p>
    </div>
);


export default EmailTemplate;