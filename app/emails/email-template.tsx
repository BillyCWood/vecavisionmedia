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
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    org: string;
    msg: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName, lastName, email, phone, org, msg
}) => (
    <div className='flex flex-col gap-y-6 justify-center'>
        <h1>Welcome, { firstName } { lastName }</h1>
        <p>Here is the info you submitted:</p>
        <p>{ email }</p>
        <p>{ phone }</p>
        <p>{ org }</p>
        <p>{ msg }</p>
    </div>
);


export default EmailTemplate;