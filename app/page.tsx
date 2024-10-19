import Link from "next/link";
import Image from "next/image";

import Button from "./ui/button";
import VVMCarousel from "./ui/vvmcarousel";


export default function Home() {
  return (
    
    <main className="flex flex-col w-screen text-[#fff]">
      
       
      {/* <div className="min-h-screen bg-[#000] bg-center bg-no-repeat bg-cover justify-center pt-16" style={{backgroundImage: "url('/images/robert-shunev-mS1nlYbq1kA-unsplash.jpg')"}}>
        <div className="flex flex-col items-center gap-y-2 px-6 text-center">
          <h1 className="font-bold text-2xl">Bringing your vision to life, one frame at a time</h1>
          <p className="mb-6">72% of customers say they prefer learning about a product or service through video. We can help you create impressive video content to grow your business and give customers the desire to have your produect or service.</p>
          <Link href="/contact"><Button text="Learn How" /></Link>
        </div>
      </div>

      <div className="min-h-screen bg-center bg-no-repeat bg-cover pt-16" style={{backgroundImage: "url('/images/theregisti-HSXIp58yPyI-unsplash.jpg')"}}>
        <div className="flex flex-col items-center gap-y-2 px-6 text-center">
          <h1 className="font-bold text-2xl">Inspire, Engage, and Impress</h1>
          <p className="mb-6">Hook your audience, engage their senses, and leave an unforgettable impression with captivaing cideo productions that elevate your brand.</p>
          <Link href="/services"><Button text="View Services" /></Link>
        </div>
      </div>

      <div className=" min-h-screen bg-center bg-no-repeat bg-cover pt-16" style={{backgroundImage: "url('/images/hunter-moranville-CMEpx6q7xrs-unsplash.jpg')"}}>
        <div className="flex flex-col items-center gap-y-2 px-6 text-center">
          <h1 className="font-bold text-2xl">See it for Yourself</h1>
          <p className="mb-6">Examples of how we've brought our clients vision to life.</p>
          <Link href="/portfolio" className="py-6" ><Button text="View the Vision" /></Link>
        </div>
      </div> */}

      <div className="min-h-screen relative">
        <Image src={'/images/robert-shunev-mS1nlYbq1kA-unsplash.jpg'} alt="camera 1" style={{objectFit:"cover"}} quality={75} className="-z-10" fill priority />
        <div className="flex flex-col items-center gap-y-2 pt-16 px-6">
          <h1 className="font-bold text-2xl">Bringing your vision to life, one frame at a time</h1>
          <p className="mb-6">72% of customers say they prefer learning about a product or service through video. We can help you create impressive video content to grow your business and give customers the desire to have your produect or service.</p>
          <Link href="/contact"><Button text="Learn How" /></Link>
        </div>
      </div>
      <div className="min-h-screen relative">
        <Image src={'/images/theregisti-HSXIp58yPyI-unsplash.jpg'} alt="camera 2" style={{objectFit:"cover"}} quality={75} className="-z-10" fill />
        <div className="flex flex-col items-center gap-y-2 pt-16 px-6">
          <h1 className="font-bold text-2xl">Inspire, Engage, and Impress</h1>
          <p className="mb-6">Hook your audience, engage their senses, and leave an unforgettable impression with captivaing video productions that elevate your brand.</p>
          <Link href="/services"><Button text="View Services" /></Link>
        </div>
      </div>
      <div className="min-h-screen relative">
        <Image src={'/images/hunter-moranville-CMEpx6q7xrs-unsplash.jpg'} alt="camera 3" style={{objectFit:"cover"}} quality={75} className="-z-10" fill />
        <div className="flex flex-col items-center gap-y-2 pt-16 px-6">
          <h1 className="font-bold text-2xl">See it for Yourself</h1>
          <p className="mb-6">Examples of how we've brought our clients vision to life.</p>
          <Link href="/portfolio"><Button text="View the Vision" /></Link>
        </div>

        <div className="min-w-screen flex mt-20">
          
          <div className="w-4/5 lg:w-1/2 mx-auto">
            <VVMCarousel />
          </div>

        </div>
      </div>

      
    </main>
    
 
  );
}
