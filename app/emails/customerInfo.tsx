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
    name: string;
    email: string;
    phone: string;
    org: string;
    message: string;
}

export const CustomerInfo: React.FC<Readonly<EmailTemplateProps>> = ({
    name, email, phone, org, message
}) => (
    <div className='flex flex-col gap-y-6 justify-center'>
        <h1>Someone Wants Your Service!</h1>
        <p>Here is the info they submitted:</p>
        <p>name: { name }</p>
        <p>email: { email }</p>
        <p>phone: { phone }</p>
        <p>org: { org }</p>
        <p>message:<br /> { message }</p>
        <br />
        <br />
        <br />
        <br />
        <p>Please do not reply to this email</p>
    </div>
);


export default CustomerInfo;