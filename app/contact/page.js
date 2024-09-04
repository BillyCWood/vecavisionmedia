import Button from "../ui/button";



export default function Contact(){
    return (
        <main className="pt-10 pb-10">
            <h2 className="font-bold text-xl text-center">Contact Veca Vision Media</h2>
            <p className="text-center mt-6">Videography Business in Bozeman, MT.</p>
            <p className="text-center mt-12">Email: veca.vision@gmail.com</p>
            <p className="text-center mt-3">Phone: (406) 595-6899</p>


            <form className="flex flex-col mt-6 pt-6 pb-10 items-center" action="https://formsubmit.co/rowly.dev@gmail.com" method="POST">
                
                <div className="flex flex-col">
                    <label className="mb-1">First Name:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="fname" name="fname" required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Last Name:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="lname" name="lname" required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Email:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="email" id="email" name="email" required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Phone:</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="phone" name="phone" required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Organization (if applicable):</label>
                    <input className="mb-6 w-96 rounded-lg text-[#000] pl-2" type="text" id="org" name="org" required />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1">Tell Us What You're Looking For:</label>
                    <textarea className="mb-6 w-96 h-64 rounded-lg text-[#000] pl-2 pr-2" id="quest-com" name="quest-com" required></textarea>
                </div>


                <Button text="Submit" />

            </form>


        </main>
    );
}