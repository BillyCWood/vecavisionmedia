'use client';
import Image from "next/image";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function Contact(){

    const router = useRouter();

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [org, setOrg] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const data = {
            fname, 
            lname, 
            email, 
            phone, 
            org, 
            message,
        };

        console.log(data);

        const res = await fetch( "/api/send", { method: "POST", headers:{'Content-Type': 'application/json',}, body: JSON.stringify(data), });
        
        console.log(res.status);

        if(res.status === 200) {
            alert("Success! Your message and information has been submitted! Thank you!");
            setIsLoading(false);
            setFname('');
            setLname('');
            setEmail('');
            setPhone('');
            setOrg('');
            setMessage('');
        }
        else if(res.status === 500) {
            alert("Uh oh! Something went wrong on our end. We apologize for the inconvenience.")
        }

    };


    return (
        <main className="pt-10 pb-10 bg-[#000] bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url('/VVM-bg-images/pawel-czerwinski-Uvl9d54tqpQ-unsplash.jpg')"}}>
            <h2 className="font-bold text-xl text-center">Contact Veca Vision Media</h2>
            <Image src="/VVM-images/Veca-Vision.png" width={150} height={1} aria-hidden={true} alt="alternate logo" className="mx-auto" />
            <div className="flex justify-center">
                <p className="text-center">Videography Business in Bozeman, MT.</p>
                <p><img src="https://em-content.zobj.net/source/apple/76/round-pushpin_1f4cd.png" aria-hidden={true} alt="pin drop emoji" width={25} height={1} /></p>
            </div>
            <p className="text-center mt-8">Email: veca.vision@gmail.com</p>
            <p className="text-center mt-3">Phone: (406) 595-6899</p>


            <form className="flex flex-col mt-6 pt-6 pb-10 items-center" onSubmit={handleSubmit}>
                
                <div className="flex flex-col">
                    <label className="mb-1">First Name:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="fname" name="fname" value={fname} aria-hidden={false} aria-label="First Name" onChange={ (e) => setFname(e.target.value) } required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Last Name:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="lname" name="lname" value={lname} aria-hidden={false} aria-label="Last Name" onChange={ (e) => setLname(e.target.value) } required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Email:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="email" id="email" name="email" value={email} aria-hidden={false} aria-label="Email Address" onChange={ (e) => setEmail(e.target.value) } required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Phone:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="phone" name="phone" value={phone} aria-hidden={false} aria-label="Phone Number" onChange={ (e) => setPhone(e.target.value) } required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Organization (if applicable):</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="org" name="org" value={org} aria-hidden={false} aria-label="Organization" onChange={ (e) => setOrg(e.target.value) } required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Tell Us What You're Looking For:</label>
                    <textarea className="mb-6 w-96 h-64 rounded-lg text-[#000] pl-2 pr-2" type="text" id="message" name="message" value={message} aria-hidden={false} aria-label="Tell us what you're looking for" onChange={ (e) => setMessage(e.target.value) } required />
                </div>

                <button type="submit" aria-hidden={false} aria-label="submit button" disabled={isLoading}>
                    { !isLoading && <Button text="Submit" /> }{ isLoading && <Button text="Sending..." /> }
                </button>

            </form>


        </main>
    );
}