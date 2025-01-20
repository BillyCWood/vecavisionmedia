import React from "react";

interface EmailTemplateProps { 
    name: string;
    email: string;
    phone: string;
    org: string;
    message: string;
}

export const Confirmation: React.FC<Readonly<EmailTemplateProps>> = ({
    name, email, phone, org, message
}) => (
    <div className='flex flex-col gap-y-6 justify-center'>
        <h1>Hey, { name }! Thanks for reaching out!</h1>
        <p>Thank you for filling out my form and expressing interest in Veca Vision Media. I will review the information you sent and get in touch with you soon!</p>
        <br />
        <p>Here is the info you submitted:</p>
        <p>name: { name }</p>
        <p>email: { email }</p>
        <p>phone: { phone }</p>
        <p>org: { org }</p>
        <p>message:<br /> { message }</p>
        <br />
        <br />
        <p>I will be in touch soon!</p>
        <p>Jaiden Veca</p>
        <br />
        <br />
        <br />
        <br />
        <p className="font-light">Please do not reply to this email, as I am unable to respond from this email address. Please email veca.vision@gmail.com instead</p>
    </div>
);

export default Confirmation;