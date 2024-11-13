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
        <div className="flex flex-col items-center gap-y-2 pt-32 px-10 md:px-24 lg:px-48">
          <h1 className="font-bold text-2xl text-vvm-lightblue">Bringing your vision to life, one frame at a time</h1>
          <p className="mb-6">72% of customers say they prefer learning about a product or service through video. We can help you create impressive video content to grow your business and give customers the desire to have your product or service.</p>
          <Link href="/contact"><Button text="Learn How" /></Link>
        </div>
      </div>



      <div className="min-h-screen relative md:hidden">
        <Image src={'/images/theregisti-HSXIp58yPyI-unsplash.jpg'} alt="camera 1" style={{objectFit:"cover"}} quality={75} className="-z-10" fill priority />
        <div className="flex flex-col items-center gap-y-2 pt-32 px-6">
        <h1 className="font-bold text-2xl text-vvm-lightblue">Inspire, Engage, and Impress</h1>
        <p className="mb-6 text-center">Hook your audience, engage their senses, and leave an unforgettable impression with captivaing video productions that elevate your brand.</p>
        <Link href="/services"><Button text="View Services" /></Link>
        </div>
      </div>



      <div className="hidden md:max-lg:flex flex-col min-h-screen 0 bg-[#000]">
        
        <Image src={'/images/theregisti-HSXIp58yPyI-unsplash.jpg'} alt="camera 1" width={960} height={960} />
        
        <div className="flex flex-col items-center gap-y-2 pt-32 px-16">
          <h1 className="font-bold text-2xl text-vvm-lightblue">Inspire, Engage, and Impress</h1>
          <p className="mb-6 text-center">Hook your audience, engage their senses, and leave an unforgettable impression with captivaing video productions that elevate your brand.</p>
          <Link href="/services"><Button text="View Services" /></Link>
        </div>
      </div>


      <div className="hidden min-h-screen max-h-screen lg:max-2xl:flex flex-col justify-evenly bg-[#000]">

        <div className="relative mx-auto">
          <div className="bg-vvm-pink w-full h-[640px] absolute top-0 left-0 -translate-y-8 -translate-x-8"></div>
          <Image src={'/images/theregisti-HSXIp58yPyI-unsplash.jpg'} alt="camera 2" width={960} height={960} className="relative z-[1] shadow-custom-gray shadow-lg" />
          <div className="bg-vvm-blue w-full h-[640px] absolute top-0 left-0 translate-y-8 translate-x-8"></div>
          
        </div>

        
        <div className="mx-auto w-1/2 gap-y-2 flex flex-col items-center">
          <h1 className="font-bold text-2xl text-vvm-lightblue text-center">Inspire, Engage, and Impress</h1>
          <p className="mb-6 text-center">Hook your audience, engage their senses, and leave an unforgettable impression with captivaing video productions that elevate your brand.</p>
          <Link href="/services"><Button text="View Services" /></Link>
        </div>
    
      </div>


      <div className="hidden min-h-screen max-h-screen 2xl:flex justify-evenly bg-[#000]">

        <div className="relative pt-44">
          <div className="bg-vvm-pink w-full h-[640px] absolute top-0 left-0 translate-y-36 -translate-x-8"></div>
          <Image src={'/images/theregisti-HSXIp58yPyI-unsplash.jpg'} alt="camera 2" width={960} height={960} className="relative z-[1]" />
          <div className="bg-vvm-blue w-full h-[640px] absolute top-0 left-0 translate-y-52 translate-x-8"></div>
          
        </div>


        
        
        
        <div className="max-lg:mx-auto w-1/2 lg:w-1/4 lg:mt-80 gap-y-2 flex flex-col">
          <h1 className="font-bold text-2xl text-vvm-lightblue">Inspire, Engage, and Impress</h1>
          <p className="mb-6">Hook your audience, engage their senses, and leave an unforgettable impression with captivaing video productions that elevate your brand.</p>
          <Link href="/services"><Button text="View Services" /></Link>
        </div>
    
      </div>



      <div className="min-h-screen relative">
        <Image src={'/images/hunter-moranville-CMEpx6q7xrs-unsplash.jpg'} alt="camera 3" style={{objectFit:"cover"}} quality={75} className="-z-10" fill />
        <div className="flex flex-col items-center gap-y-2 pt-16 px-6">
          <h1 className="font-bold text-2xl text-vvm-lightblue">See it for Yourself</h1>
          <p className="mb-6">Examples of how we've brought our clients vision to life.</p>
          <Link href="/portfolio"><Button text="View the Vision" /></Link>
        </div>

        <div className="">
        </div>

      </div>

      
    </main>
    
 
  );
}
