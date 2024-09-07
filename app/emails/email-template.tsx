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
    firstName,
}) => (
    <div>
        <h1>Welcome, {firstName}</h1>
    </div>
);


export default EmailTemplate;