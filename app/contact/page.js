import Image from "next/image";
import Button from "../ui/button";



export default function Contact(){
    return (
        <main className="pt-10 pb-10">
            <h2 className="font-bold text-xl text-center">Contact Veca Vision Media</h2>
            <Image src="/VVM-images/Veca-Vision.png" width={150} height={1} className="mx-auto" />
            <div className="flex justify-center">
                <p className="text-center">Videography Business in Bozeman, MT.</p>
                <img src="https://em-content.zobj.net/source/apple/76/round-pushpin_1f4cd.png" width={25} height={1} />
            </div>
            <p className="text-center mt-8">Email: veca.vision@gmail.com</p>
            <p className="text-center mt-3">Phone: (406) 595-6899</p>


            <form className="flex flex-col mt-6 pt-6 pb-10 items-center" method="POST">
                
                <div className="flex flex-col">
                    <label className="mb-1">First Name:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="fname" name="fname" value={FormData.fname} required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Last Name:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="lname" name="lname" value={FormData.lname} required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Email:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="email" id="email" name="email" value={FormData.email} required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Phone:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="phone" name="phone" value={FormData.phone} required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Organization (if applicable):</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="org" name="org" value={FormData.org} required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Tell Us What You're Looking For:</label>
                    <textarea className="mb-6 w-96 h-64 rounded-lg text-[#000] pl-2 pr-2" id="quest-com" name="quest-com" value={FormData.message} required></textarea>
                </div>

                <input type="hidden" name="_next" value="https://billycwood.github.io/Veca-Vision-Media.github.io/src/form_submission_thank_you.html" />
                <input type="hidden" name="_subject" value="Veca Vision - New Contact Submission!" />
                <input type="hidden" name="_template" value="box" />

                <button type="submit"><Button text="Submit" /></button>

            </form>


        </main>
    );
}